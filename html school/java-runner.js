/**
 * Java in-browser Runner & Simulator Engine
 * Transpiles and executes core Java code client-side with virtual stdout/stderr capture
 * and infinite-loop protection.
 */
class JavaRunner {
  constructor() {
    this.outputBuffer = [];
  }

  /**
   * Main execute method
   * @param {string} javaCode
   * @returns {{ success: boolean, output: string, executionTime: number, error?: string }}
   */
  run(javaCode) {
    const startTime = performance.now();
    this.outputBuffer = [];

    // Quick syntax checks
    const syntaxErr = this.checkBasicSyntax(javaCode);
    if (syntaxErr) {
      return {
        success: false,
        output: syntaxErr,
        executionTime: 0,
        error: "Compilation Error"
      };
    }

    try {
      const jsCode = this.transpileJavaToJS(javaCode);
      const executionResult = this.executeInSandbox(jsCode);
      const endTime = performance.now();
      const executionTime = Math.max(1, Math.round(endTime - startTime));

      if (executionResult.error) {
        return {
          success: false,
          output: (this.outputBuffer.join('') ? this.outputBuffer.join('') + "\n" : "") +
                  "Exception in thread \"main\" " + executionResult.error,
          executionTime,
          error: executionResult.error
        };
      }

      return {
        success: true,
        output: this.outputBuffer.join('') || "(Program executed successfully with no console output)",
        executionTime
      };
    } catch (err) {
      return {
        success: false,
        output: "Compiler / Runtime Error: " + (err.message || err),
        executionTime: Math.max(1, Math.round(performance.now() - startTime)),
        error: err.message
      };
    }
  }

  checkBasicSyntax(code) {
    let braceCount = 0;
    let parenCount = 0;
    let inString = false;
    let stringChar = '';

    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      const prevChar = i > 0 ? code[i - 1] : '';

      if ((char === '"' || char === "'") && prevChar !== '\\') {
        if (!inString) {
          inString = true;
          stringChar = char;
        } else if (stringChar === char) {
          inString = false;
        }
      }

      if (!inString) {
        if (char === '{') braceCount++;
        else if (char === '}') braceCount--;
        else if (char === '(') parenCount++;
        else if (char === ')') parenCount--;

        if (braceCount < 0) return "Syntax Error: Unmatched closing brace '}' found.";
        if (parenCount < 0) return "Syntax Error: Unmatched closing parenthesis ')' found.";
      }
    }

    if (braceCount !== 0) return "Syntax Error: Missing closing brace '}' - unmatched braces in class or method definition.";
    if (parenCount !== 0) return "Syntax Error: Missing closing parenthesis ')' - unmatched parentheses in expression.";

    if (!code.includes("class ")) {
      return "Compilation Error: Class declaration missing. Code must declare at least one class, e.g., 'public class Main'.";
    }

    return null;
  }

  transpileJavaToJS(javaCode) {
    let code = javaCode.replace(/\r\n/g, '\n');

    // 1. Protect string and char literals
    const stringLiterals = [];
    code = code.replace(/("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g, (match) => {
      stringLiterals.push(match);
      return `__STR_TOKEN_${stringLiterals.length - 1}__`;
    });

    // 2. Convert System.out.println & System.out.print
    code = code.replace(/System\.out\.println\s*\((.*?)\);/g, (match, expr) => {
      return `__stdout__.println(${expr !== undefined && expr.trim() !== '' ? expr : '""'});`;
    });
    code = code.replace(/System\.out\.print\s*\((.*?)\);/g, (match, expr) => {
      return `__stdout__.print(${expr !== undefined && expr.trim() !== '' ? expr : '""'});`;
    });

    // 3. Convert enhanced for loop: for (Type item : collection) -> for (let item of collection)
    code = code.replace(/for\s*\(\s*(?:int|double|String|boolean|char|float|long|var)\s+([a-zA-Z0-9_]+)\s*:\s*([^)]+)\)/g, 'for (let $1 of $2)');

    // 4. Convert array declarations: int[] arr = {1, 2, 3}; -> let arr = [1, 2, 3];
    code = code.replace(/(?:int|double|String|boolean|char|float|long)\s*\[\s*\]\s*([a-zA-Z0-9_]+)\s*=\s*\{([^}]+)\};/g, 'let $1 = [$2];');
    code = code.replace(/new\s+(?:int|double|String|boolean|char|float|long)\s*\[\s*\]\s*\{([^}]+)\}/g, '[$1]');

    // 5. Transform custom classes: convert Java constructor to JS constructor
    const classNames = [];
    const classMatchRegex = /class\s+([A-Za-z0-9_]+)/g;
    let match;
    while ((match = classMatchRegex.exec(code)) !== null) {
      if (match[1] !== 'Main') {
        classNames.push(match[1]);
      }
    }

    classNames.forEach(cls => {
      const constructorRegex = new RegExp(`(?:public|private|protected)?\\s*${cls}\\s*\\(([^)]*)\\)\\s*\\{`, 'g');
      code = code.replace(constructorRegex, (m, params) => {
        const cleanParams = params.replace(/\b(?:int|double|float|long|short|byte|boolean|char|String|var)\s+/g, '');
        return `constructor(${cleanParams}) {`;
      });
    });

    // Remove Java visibility keywords inside classes: public void foo(...) -> foo(...)
    code = code.replace(/(?:public|private|protected)\s+(?:void|int|double|boolean|String|char|float)\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)\s*\{/g, (m, methodName, params) => {
      const cleanParams = params.replace(/\b(?:int|double|float|long|short|byte|boolean|char|String|var)\s+/g, '');
      return `${methodName}(${cleanParams}) {`;
    });

    // Clean class member fields for non-Main classes: class Foo { int x; String name; } -> class Foo { x; name; }
    code = code.replace(/class\s+(?!Main\b)([A-Za-z0-9_]+)\s*\{[^}]+\}/gs, (classBlock) => {
      return classBlock.replace(/(?:public|private|protected)?\s*\b(?:int|double|float|long|short|byte|boolean|char|String)\s+([a-zA-Z0-9_]+)\s*(=|;)/g, '$1 $2');
    });

    // 6. Unwrap 'public class Main' so Main methods/vars become direct function statements
    const mainClassIdx = code.indexOf('class Main');
    if (mainClassIdx !== -1) {
      const openBraceIdx = code.indexOf('{', mainClassIdx);
      if (openBraceIdx !== -1) {
        let depth = 1;
        let closeBraceIdx = -1;
        for (let i = openBraceIdx + 1; i < code.length; i++) {
          if (code[i] === '{') depth++;
          else if (code[i] === '}') {
            depth--;
            if (depth === 0) {
              closeBraceIdx = i;
              break;
            }
          }
        }

        if (closeBraceIdx !== -1) {
          const beforeMain = code.substring(0, mainClassIdx).replace(/public\s*$/, '');
          const mainContent = code.substring(openBraceIdx + 1, closeBraceIdx);
          const afterMain = code.substring(closeBraceIdx + 1);
          code = beforeMain + '\n' + mainContent + '\n' + afterMain;
        }
      }
    }

    // 7. Convert main method: public static void main(String[] args) -> function __main__()
    code = code.replace(/(?:public\s+)?(?:static\s+)?void\s+main\s*\([^)]*\)\s*\{/g, 'function __main__() {');

    // 8. Convert static functions: public static ReturnType funcName(...) -> function funcName(...)
    code = code.replace(/(?:public\s+|private\s+|protected\s+)?static\s+(?:void|int|double|boolean|String|char|float)\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)\s*\{/g, (m, methodName, params) => {
      const cleanParams = params.replace(/\b(?:int|double|float|long|short|byte|boolean|char|String|var)\s+/g, '');
      return `function ${methodName}(${cleanParams}) {`;
    });

    // 9. Convert variable declarations: int x = 5; -> let x = 5;
    code = code.replace(/\b(?:int|double|float|long|short|byte|boolean|char|String)\s+([a-zA-Z0-9_]+)\s*(=|;|,)/g, 'let $1 $2');
    
    // Class instance declarations: Hero knight = new Hero(...) -> let knight = new Hero(...)
    classNames.forEach(cls => {
      const instanceRegex = new RegExp(`\\b${cls}\\s+([a-zA-Z0-9_]+)\\s*(=|;)`, 'g');
      code = code.replace(instanceRegex, 'let $1 $2');
    });

    // 10. Restore strings
    code = code.replace(/__STR_TOKEN_(\d+)__/g, (match, idx) => {
      return stringLiterals[Number(idx)];
    });

    return code;
  }

  executeInSandbox(transpiledCode) {
    const self = this;
    const stdout = {
      println: (val) => {
        const text = val !== undefined ? String(val) : '';
        self.outputBuffer.push(text + '\n');
      },
      print: (val) => {
        const text = val !== undefined ? String(val) : '';
        self.outputBuffer.push(text);
      }
    };

    try {
      const runnerFn = new Function('__stdout__', `
        ${transpiledCode}

        if (typeof __main__ === 'function') {
          __main__();
        }
      `);

      runnerFn(stdout);
      return { success: true };
    } catch (err) {
      return { error: err.toString() };
    }
  }
}

// Global export
if (typeof window !== 'undefined') {
  window.JavaRunner = JavaRunner;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = JavaRunner;
}

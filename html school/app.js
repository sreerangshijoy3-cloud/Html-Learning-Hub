/**
 * CodeCraft Studio Main Application Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial State & Starter Code Templates
  const TEMPLATES = {
    landing: {
      html: `<div class="hero">
  <div class="badge">🔥 New Release</div>
  <h1>Build The Future With Modern Code</h1>
  <p>Learn HTML5 semantics, CSS3 flexbox/animations, and modern reactive layouts in real-time.</p>
  <div class="actions">
    <button class="btn primary" onclick="alert('Welcome to CodeCraft!')">Get Started Free</button>
    <button class="btn secondary">Documentation &rarr;</button>
  </div>
</div>`,
      css: `body {
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, sans-serif;
  background: radial-gradient(circle at top, #1e293b, #0f172a);
  color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.hero {
  text-align: center;
  max-width: 580px;
  padding: 40px 24px;
}

.badge {
  display: inline-block;
  background: rgba(56, 189, 248, 0.15);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.3);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 20px;
}

h1 {
  font-size: 40px;
  line-height: 1.15;
  margin: 0 0 16px 0;
  background: linear-gradient(135deg, #ffffff 40%, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  color: #94a3b8;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 30px;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 14px;
}

.btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn.primary {
  background: #38bdf8;
  color: #0f172a;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.4);
}

.btn.primary:hover {
  transform: translateY(-2px);
}

.btn.secondary {
  background: #1e293b;
  color: #f1f5f9;
  border: 1px solid #334155;
}

.btn.secondary:hover {
  background: #334155;
}`,
      js: `console.log("Modern Landing Template initialized!");`
    },

    "profile-card": {
      html: `<div class="card">
  <div class="avatar-ring">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80" alt="Avatar" class="avatar" />
  </div>
  <h2>Sophia Rodriguez</h2>
  <div class="role">Lead UX & Frontend Architect</div>
  <p class="bio">Building high-performance interfaces with HTML, CSS, JavaScript & scalable architectures.</p>
  
  <div class="stats">
    <div class="stat"><span class="num">142</span><span class="lbl">Projects</span></div>
    <div class="stat"><span class="num">18.4k</span><span class="lbl">Followers</span></div>
    <div class="stat"><span class="num">99.8%</span><span class="lbl">Score</span></div>
  </div>
  
  <button class="follow-btn" id="followBtn">Follow +</button>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #090d16;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.card {
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 32px 28px;
  border-radius: 20px;
  width: 320px;
  text-align: center;
  color: #fff;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
}

.avatar-ring {
  width: 100px;
  height: 100px;
  margin: 0 auto 16px auto;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(135deg, #06b6d4, #8b5cf6);
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

h2 { margin: 0 0 4px 0; font-size: 20px; }
.role { color: #38bdf8; font-size: 13px; font-weight: 600; margin-bottom: 12px; }
.bio { color: #94a3b8; font-size: 13px; line-height: 1.5; margin-bottom: 24px; }

.stats {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #334155;
  border-bottom: 1px solid #334155;
  padding: 14px 0;
  margin-bottom: 24px;
}

.stat .num { display: block; font-size: 17px; font-weight: 700; color: #fff; }
.stat .lbl { font-size: 11px; color: #64748b; text-transform: uppercase; }

.follow-btn {
  width: 100%;
  padding: 12px;
  border: none;
  background: linear-gradient(135deg, #0284c7, #6366f1);
  color: white;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;
}

.follow-btn:hover { opacity: 0.9; transform: scale(1.02); }`,
      js: `const btn = document.getElementById('followBtn');
let isFollowing = false;
btn.addEventListener('click', () => {
  isFollowing = !isFollowing;
  btn.textContent = isFollowing ? '✓ Following' : 'Follow +';
  btn.style.background = isFollowing ? '#10b981' : 'linear-gradient(135deg, #0284c7, #6366f1)';
  console.log("Follow state changed to:", isFollowing);
});`
    },

    "todo-app": {
      html: `<div class="todo-card">
  <h2>Daily Tasks</h2>
  <div class="input-row">
    <input type="text" id="task-input" placeholder="Add a new goal..." />
    <button id="add-btn">Add</button>
  </div>
  <ul id="task-list" class="task-list">
    <li class="task-item completed">
      <span>Master HTML5 semantic elements</span>
      <button class="del-btn">&times;</button>
    </li>
    <li class="task-item">
      <span>Practice CSS Flexbox & Grid</span>
      <button class="del-btn">&times;</button>
    </li>
    <li class="task-item">
      <span>Run Java OOP Code Simulator</span>
      <button class="del-btn">&times;</button>
    </li>
  </ul>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #0f172a;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  color: #fff;
}

.todo-card {
  background: #1e293b;
  border-radius: 16px;
  padding: 28px;
  width: 100%;
  max-width: 380px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.4);
}

h2 { margin-top: 0; color: #38bdf8; font-size: 22px; }

.input-row {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  background: #0f172a;
  border: 1px solid #334155;
  padding: 10px 14px;
  border-radius: 8px;
  color: #fff;
  outline: none;
}

input:focus { border-color: #38bdf8; }

#add-btn {
  background: #38bdf8;
  color: #0f172a;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.task-item {
  background: #0f172a;
  padding: 12px 14px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid #334155;
}

.task-item.completed span {
  text-decoration: line-through;
  color: #64748b;
}

.del-btn {
  background: transparent;
  border: none;
  color: #ef4444;
  font-size: 18px;
  cursor: pointer;
  padding: 0 4px;
}`,
      js: `const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('task-list');

function addTask() {
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  li.className = 'task-item';
  li.innerHTML = \`<span>\${text}</span><button class="del-btn">&times;</button>\`;
  list.appendChild(li);
  input.value = '';
  console.log("New task added:", text);
}

addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => { if (e.key === 'Enter') addTask(); });

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('del-btn')) {
    e.target.parentElement.remove();
    console.log("Task deleted");
  } else if (e.target.closest('.task-item')) {
    e.target.closest('.task-item').classList.toggle('completed');
  }
});`
    },

    "flex-pricing": {
      html: `<div class="pricing-container">
  <div class="pricing-card">
    <div class="plan">Free Starter</div>
    <div class="price">$0<span>/mo</span></div>
    <ul class="features">
      <li>✓ Basic HTML & CSS</li>
      <li>✓ Community Access</li>
      <li>✓ 5 Practice Sandbox</li>
    </ul>
    <button class="btn outline">Choose Free</button>
  </div>

  <div class="pricing-card featured">
    <div class="popular-tag">MOST POPULAR</div>
    <div class="plan">Pro Developer</div>
    <div class="price">$19<span>/mo</span></div>
    <ul class="features">
      <li>✓ Unlimited HTML/CSS Previews</li>
      <li>✓ Full Java Compiler & OOP</li>
      <li>✓ 50+ Real World Projects</li>
      <li>✓ Interactive Code Mentorship</li>
    </ul>
    <button class="btn fill">Start Pro Trial</button>
  </div>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #0a0e17;
  color: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 20px;
}

.pricing-container {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
}

.pricing-card {
  background: #161e2e;
  border: 1px solid #283548;
  border-radius: 16px;
  padding: 32px 28px;
  width: 260px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.featured {
  border-color: #38bdf8;
  box-shadow: 0 0 30px rgba(56, 189, 248, 0.2);
  transform: scale(1.05);
}

.popular-tag {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #38bdf8;
  color: #0f172a;
  font-size: 11px;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 12px;
}

.plan { font-size: 16px; font-weight: 600; color: #94a3b8; }
.price { font-size: 38px; font-weight: 800; margin: 12px 0 20px 0; }
.price span { font-size: 16px; font-weight: 400; color: #64748b; }

.features {
  list-style: none;
  padding: 0;
  margin: 0 0 28px 0;
  flex: 1;
  font-size: 14px;
  color: #cbd5e1;
  line-height: 2.2;
}

.btn {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
}

.btn.fill { background: #38bdf8; color: #0a0e17; border: none; }
.btn.outline { background: transparent; border: 1px solid #334155; color: #fff; }`,
      js: `console.log("Pricing component loaded with CSS flexbox!");`
    },

    "neon-button": {
      html: `<div class="container">
  <button class="neon-btn neon-cyan">
    <span>CYBERPUNK</span>
  </button>
  <button class="neon-btn neon-pink">
    <span>SYNTHWAVE</span>
  </button>
  <button class="neon-btn neon-green">
    <span>MATRIX</span>
  </button>
</div>`,
      css: `body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #030712;
  font-family: monospace;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.neon-btn {
  position: relative;
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #fff;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}

.neon-cyan {
  border-color: #06b6d4;
  color: #06b6d4;
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.4);
}
.neon-cyan:hover {
  background: #06b6d4;
  color: #000;
  box-shadow: 0 0 35px #06b6d4;
}

.neon-pink {
  border-color: #ec4899;
  color: #ec4899;
  box-shadow: 0 0 15px rgba(236, 72, 153, 0.4);
}
.neon-pink:hover {
  background: #ec4899;
  color: #000;
  box-shadow: 0 0 35px #ec4899;
}

.neon-green {
  border-color: #10b981;
  color: #10b981;
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
}
.neon-green:hover {
  background: #10b981;
  color: #000;
  box-shadow: 0 0 35px #10b981;
}`,
      js: `console.log("Glowing CSS buttons initialized!");`
    }
  };

  // 2. Elements Cache
  const navTabs = document.querySelectorAll('.nav-tab');
  const tabContents = document.querySelectorAll('.tab-content');
  const themeToggle = document.getElementById('theme-toggle');

  // Web Playground Elements
  const editorHtml = document.getElementById('editor-html');
  const editorCss = document.getElementById('editor-css');
  const editorJs = document.getElementById('editor-js');
  const linesHtml = document.getElementById('lines-html');
  const linesCss = document.getElementById('lines-css');
  const linesJs = document.getElementById('lines-js');
  const livePreviewFrame = document.getElementById('live-preview-frame');
  const autoRunCheck = document.getElementById('auto-run-check');
  const runWebBtn = document.getElementById('run-web-btn');
  const resetWebBtn = document.getElementById('reset-web-btn');
  const templateSelect = document.getElementById('template-select');
  const openWindowBtn = document.getElementById('open-window-btn');
  const viewportBtns = document.querySelectorAll('.viewport-btn');
  const editorSubtabs = document.querySelectorAll('.editor-subtab');
  const codeBoxes = {
    html: document.getElementById('code-box-html'),
    css: document.getElementById('code-box-css'),
    js: document.getElementById('code-box-js')
  };
  const consoleDrawer = document.getElementById('console-drawer');
  const toggleConsoleBtn = document.getElementById('toggle-console-btn');
  const clearConsoleBtn = document.getElementById('clear-console-btn');
  const consoleLogs = document.getElementById('console-logs');
  const consoleCount = document.getElementById('console-count');
  const cursorPosEl = document.getElementById('editor-cursor-pos');

  // Java Elements
  const editorJava = document.getElementById('editor-java');
  const linesJava = document.getElementById('lines-java');
  const runJavaBtn = document.getElementById('run-java-btn');
  const resetJavaBtn = document.getElementById('reset-java-btn');
  const javaOutputText = document.getElementById('java-output-text');
  const javaExecBadge = document.getElementById('java-exec-badge');
  const javaExampleSelect = document.getElementById('java-example-select');
  const javaCursorPosEl = document.getElementById('java-cursor-pos');

  // Lessons Elements
  const trackBtns = document.querySelectorAll('.track-btn');
  const lessonListItems = document.getElementById('lesson-list-items');
  const lessonReaderPane = document.getElementById('lesson-reader-pane');
  const lessonProgressBadge = document.getElementById('lesson-progress-badge');

  // Cheat Sheet Elements
  const cheatsheetSearch = document.getElementById('cheatsheet-search');
  const cheatsheetGrid = document.getElementById('cheatsheet-grid');

  let currentTrack = 'html';
  let activeLessonId = 'html-1';
  let logCount = 0;
  let updateDebounceTimer = null;
  const javaRunner = new JavaRunner();

  // Completed Lessons in LocalStorage
  let completedLessons = JSON.parse(localStorage.getItem('codecraft_completed_lessons') || '[]');

  // ===================================================
  // Navigation & Tab Switching
  // ===================================================
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');
      navTabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.classList.add('active');

      if (targetId === 'web-playground') {
        updateLivePreview();
      }
    });
  });

  // Switch Subtabs (HTML / CSS / JS)
  editorSubtabs.forEach(subtab => {
    subtab.addEventListener('click', () => {
      const lang = subtab.getAttribute('data-lang');
      editorSubtabs.forEach(s => s.classList.remove('active'));
      subtab.classList.add('active');

      Object.values(codeBoxes).forEach(box => box.classList.remove('active'));
      if (codeBoxes[lang]) codeBoxes[lang].classList.add('active');
    });
  });

  // ===================================================
  // Editor Utilities (Line Numbers & Tab Indentation)
  // ===================================================
  function setupEditor(textarea, lineContainer, cursorDisplay) {
    function updateLines() {
      const lineCount = textarea.value.split('\n').length;
      let numbersHtml = '';
      for (let i = 1; i <= Math.max(lineCount, 1); i++) {
        numbersHtml += `${i}<br>`;
      }
      lineContainer.innerHTML = numbersHtml;
    }

    function updateCursor() {
      if (!cursorDisplay) return;
      const textToCursor = textarea.value.substring(0, textarea.selectionStart);
      const lines = textToCursor.split('\n');
      const currentLine = lines.length;
      const currentCol = lines[lines.length - 1].length + 1;
      cursorDisplay.textContent = `Line ${currentLine}, Col ${currentCol}`;
    }

    // Indent with 2 spaces on Tab
    textarea.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        textarea.value = textarea.value.substring(0, start) + '  ' + textarea.value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 2;
        updateLines();
        if (autoRunCheck.checked) triggerDebouncedPreview();
      }
    });

    textarea.addEventListener('input', () => {
      updateLines();
      updateCursor();
    });

    textarea.addEventListener('click', updateCursor);
    textarea.addEventListener('keyup', updateCursor);
    textarea.addEventListener('scroll', () => {
      lineContainer.scrollTop = textarea.scrollTop;
    });

    updateLines();
  }

  setupEditor(editorHtml, linesHtml, cursorPosEl);
  setupEditor(editorCss, linesCss, cursorPosEl);
  setupEditor(editorJs, linesJs, cursorPosEl);
  setupEditor(editorJava, linesJava, javaCursorPosEl);

  // ===================================================
  // Inbuilt Live Code Preview Engine (HTML + CSS + JS)
  // ===================================================
  function updateLivePreview() {
    const htmlCode = editorHtml.value;
    const cssCode = editorCss.value;
    const jsCode = editorJs.value;

    // Build standalone HTML document with console interceptor
    const combinedContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* User CSS */
    ${cssCode}
  </style>
</head>
<body>
  ${htmlCode}

  <script>
    // Console interceptor communicating with parent window
    (function() {
      function sendToParent(type, args) {
        try {
          const formatted = Array.from(args).map(arg => {
            if (typeof arg === 'object') {
              try { return JSON.stringify(arg); } catch(e) { return String(arg); }
            }
            return String(arg);
          }).join(' ');

          window.parent.postMessage({
            source: 'codecraft-preview',
            type: type,
            message: formatted
          }, '*');
        } catch(e) {}
      }

      const origLog = console.log;
      const origWarn = console.warn;
      const origErr = console.error;

      console.log = function() { sendToParent('log', arguments); origLog.apply(console, arguments); };
      console.warn = function() { sendToParent('warn', arguments); origWarn.apply(console, arguments); };
      console.error = function() { sendToParent('error', arguments); origErr.apply(console, arguments); };

      window.onerror = function(msg, url, lineNo) {
        sendToParent('error', ['Runtime Error: ' + msg + ' (Line ' + lineNo + ')']);
        return false;
      };
    })();

    try {
      ${jsCode}
    } catch(err) {
      console.error("Script Exception: " + err.message);
    }
  <\/script>
</body>
</html>`;

    // Inject via srcdoc
    livePreviewFrame.srcdoc = combinedContent;
  }

  function triggerDebouncedPreview() {
    clearTimeout(updateDebounceTimer);
    updateDebounceTimer = setTimeout(updateLivePreview, 350);
  }

  [editorHtml, editorCss, editorJs].forEach(ed => {
    ed.addEventListener('input', () => {
      if (autoRunCheck.checked) {
        triggerDebouncedPreview();
      }
    });
  });

  runWebBtn.addEventListener('click', updateLivePreview);

  // Handle messages from sandbox iframe for console
  window.addEventListener('message', (event) => {
    if (event.data && event.data.source === 'codecraft-preview') {
      const { type, message } = event.data;
      appendConsoleMessage(message, type);
    }
  });

  function appendConsoleMessage(msg, type = 'log') {
    const el = document.createElement('div');
    el.className = `console-msg console-${type}`;
    const timestamp = new Date().toLocaleTimeString().split(' ')[0];
    el.textContent = `[${timestamp}] ${msg}`;
    consoleLogs.appendChild(el);
    consoleLogs.scrollTop = consoleLogs.scrollHeight;

    logCount++;
    consoleCount.textContent = logCount;
  }

  clearConsoleBtn.addEventListener('click', () => {
    consoleLogs.innerHTML = '<div class="console-msg console-system">Console cleared.</div>';
    logCount = 0;
    consoleCount.textContent = '0';
  });

  toggleConsoleBtn.addEventListener('click', () => {
    consoleDrawer.classList.toggle('collapsed');
    toggleConsoleBtn.textContent = consoleDrawer.classList.contains('collapsed') ? '▲' : '▼';
  });

  // Viewport Presets
  viewportBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewportBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const width = btn.getAttribute('data-width');
      livePreviewFrame.style.width = width;
      if (width !== '100%') {
        livePreviewFrame.style.boxShadow = '0 0 25px rgba(0, 0, 0, 0.7)';
        livePreviewFrame.style.borderRadius = '12px';
      } else {
        livePreviewFrame.style.boxShadow = 'none';
        livePreviewFrame.style.borderRadius = '0';
      }
    });
  });

  // Open in new window
  openWindowBtn.addEventListener('click', () => {
    const htmlCode = editorHtml.value;
    const cssCode = editorCss.value;
    const jsCode = editorJs.value;
    const newWindow = window.open();
    newWindow.document.write(`<!DOCTYPE html><html><head><style>${cssCode}</style></head><body>${htmlCode}<script>${jsCode}<\/script></body></html>`);
    newWindow.document.close();
  });

  // Templates selector
  templateSelect.addEventListener('change', () => {
    const selected = templateSelect.value;
    if (TEMPLATES[selected]) {
      editorHtml.value = TEMPLATES[selected].html;
      editorCss.value = TEMPLATES[selected].css;
      editorJs.value = TEMPLATES[selected].js;
      setupEditor(editorHtml, linesHtml, cursorPosEl);
      setupEditor(editorCss, linesCss, cursorPosEl);
      setupEditor(editorJs, linesJs, cursorPosEl);
      updateLivePreview();
    }
  });

  resetWebBtn.addEventListener('click', () => {
    if (confirm("Reset editor to default starter template?")) {
      loadTemplate('landing');
    }
  });

  function loadTemplate(key) {
    if (TEMPLATES[key]) {
      editorHtml.value = TEMPLATES[key].html;
      editorCss.value = TEMPLATES[key].css;
      editorJs.value = TEMPLATES[key].js;
      setupEditor(editorHtml, linesHtml, cursorPosEl);
      setupEditor(editorCss, linesCss, cursorPosEl);
      setupEditor(editorJs, linesJs, cursorPosEl);
      updateLivePreview();
    }
  }

  // ===================================================
  // Java Playground & Simulator Controller
  // ===================================================
  const JAVA_PRESETS = {
    hello: LESSONS_DATA.java[0].starterCode.java,
    types: LESSONS_DATA.java[1].starterCode.java,
    decision: LESSONS_DATA.java[2].starterCode.java,
    loops: LESSONS_DATA.java[3].starterCode.java,
    methods: LESSONS_DATA.java[4].starterCode.java,
    oop: LESSONS_DATA.java[5].starterCode.java
  };

  function executeJavaCode() {
    const code = editorJava.value;
    javaExecBadge.textContent = "Compiling...";
    javaExecBadge.style.color = "#f59e0b";

    setTimeout(() => {
      const result = javaRunner.run(code);
      if (result.success) {
        javaExecBadge.textContent = `Completed in ${result.executionTime}ms`;
        javaExecBadge.style.color = "#10b981";
        javaOutputText.className = "term-output";
        javaOutputText.textContent = result.output;
      } else {
        javaExecBadge.textContent = "Error";
        javaExecBadge.style.color = "#ef4444";
        javaOutputText.className = "term-output error";
        javaOutputText.textContent = result.output;
      }
    }, 100);
  }

  runJavaBtn.addEventListener('click', executeJavaCode);

  javaExampleSelect.addEventListener('change', () => {
    const key = javaExampleSelect.value;
    if (JAVA_PRESETS[key]) {
      editorJava.value = JAVA_PRESETS[key];
      setupEditor(editorJava, linesJava, javaCursorPosEl);
      executeJavaCode();
    }
  });

  resetJavaBtn.addEventListener('click', () => {
    editorJava.value = JAVA_PRESETS.hello;
    javaExampleSelect.value = 'hello';
    setupEditor(editorJava, linesJava, javaCursorPosEl);
    executeJavaCode();
  });

  // ===================================================
  // Interactive Lessons & Curriculum Controller
  // ===================================================
  trackBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      trackBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTrack = btn.getAttribute('data-track');
      renderLessonList();
    });
  });

  function updateLessonProgressBadge() {
    const total = (LESSONS_DATA.html.length + LESSONS_DATA.css.length + LESSONS_DATA.java.length + LESSONS_DATA.javascript.length);
    lessonProgressBadge.textContent = `${completedLessons.length}/${total}`;
  }

  function renderLessonList() {
    const lessons = LESSONS_DATA[currentTrack] || [];
    lessonListItems.innerHTML = '';

    lessons.forEach(lesson => {
      const li = document.createElement('li');
      li.className = `lesson-item ${lesson.id === activeLessonId ? 'active' : ''}`;
      const isCompleted = completedLessons.includes(lesson.id);

      li.innerHTML = `
        <div class="lesson-item-header">
          <span class="lesson-item-title">${isCompleted ? '✓ ' : ''}${lesson.title}</span>
          <span class="lesson-pill pill-${lesson.difficulty.toLowerCase()}">${lesson.difficulty}</span>
        </div>
        <p class="lesson-item-desc">${lesson.description}</p>
      `;

      li.addEventListener('click', () => {
        activeLessonId = lesson.id;
        renderLessonList();
        renderLessonReader(lesson);
      });

      lessonListItems.appendChild(li);
    });

    const activeLesson = lessons.find(l => l.id === activeLessonId) || lessons[0];
    if (activeLesson) {
      activeLessonId = activeLesson.id;
      renderLessonReader(activeLesson);
    }
  }

  function renderLessonReader(lesson) {
    const isCompleted = completedLessons.includes(lesson.id);
    const isJava = lesson.category === 'Java';

    lessonReaderPane.innerHTML = `
      <div class="reader-header">
        <div class="reader-title-area">
          <span class="reader-category-tag">${lesson.category} Curriculum</span>
          <h2>${lesson.title}</h2>
        </div>
        <button id="load-lesson-btn" class="btn-load-code">
          <span>⚡ Load into ${isJava ? 'Java Simulator' : 'Code Preview'}</span>
        </button>
      </div>

      <div class="reader-section">
        <h3>Concept & Explanation</h3>
        <p>${lesson.description}</p>
        ${lesson.theory}
      </div>

      <div class="reader-section">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <h3>Interactive Starter Practice</h3>
          <button id="mark-complete-btn" class="btn btn-ghost">
            ${isCompleted ? '✓ Completed' : 'Mark as Completed'}
          </button>
        </div>
        <p>Click <strong>"Load into ${isJava ? 'Java Simulator' : 'Code Preview'}"</strong> to open this exercise in the live editor, run it, and experiment with code tweaks!</p>
      </div>
    `;

    document.getElementById('load-lesson-btn').addEventListener('click', () => {
      if (isJava) {
        // Load into Java Playground
        editorJava.value = lesson.starterCode.java;
        setupEditor(editorJava, linesJava, javaCursorPosEl);
        document.getElementById('tab-java').click();
        executeJavaCode();
      } else {
        // Load into HTML/CSS/JS Playground
        editorHtml.value = lesson.starterCode.html || '';
        editorCss.value = lesson.starterCode.css || '';
        editorJs.value = lesson.starterCode.js || '';
        setupEditor(editorHtml, linesHtml, cursorPosEl);
        setupEditor(editorCss, linesCss, cursorPosEl);
        setupEditor(editorJs, linesJs, cursorPosEl);
        document.getElementById('tab-web').click();
        updateLivePreview();
      }
    });

    document.getElementById('mark-complete-btn').addEventListener('click', () => {
      if (!completedLessons.includes(lesson.id)) {
        completedLessons.push(lesson.id);
      } else {
        completedLessons = completedLessons.filter(id => id !== lesson.id);
      }
      localStorage.setItem('codecraft_completed_lessons', JSON.stringify(completedLessons));
      updateLessonProgressBadge();
      renderLessonList();
    });
  }

  // ===================================================
  // Cheat Sheet Search & Filter
  // ===================================================
  cheatsheetSearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const cards = cheatsheetGrid.querySelectorAll('.cheat-card');

    cards.forEach(card => {
      const items = card.querySelectorAll('.cheat-item');
      let hasMatchingItem = false;

      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (!query || text.includes(query)) {
          item.style.display = 'flex';
          hasMatchingItem = true;
        } else {
          item.style.display = 'none';
        }
      });

      const cardKeywords = (card.getAttribute('data-keywords') || '').toLowerCase();
      if (!query || hasMatchingItem || cardKeywords.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });

  // ===================================================
  // Light / Dark Theme Toggle
  // ===================================================
  const savedTheme = localStorage.getItem('codecraft_theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    themeToggle.querySelector('.theme-icon').textContent = '☀️';
  }

  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme', !isLight);
    themeToggle.querySelector('.theme-icon').textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('codecraft_theme', isLight ? 'light' : 'dark');
  });

  // ===================================================
  // Initialize Defaults
  // ===================================================
  loadTemplate('landing');
  editorJava.value = JAVA_PRESETS.hello;
  setupEditor(editorJava, linesJava, javaCursorPosEl);
  executeJavaCode();
  renderLessonList();
  updateLessonProgressBadge();
});

// Comprehensive Lessons Data for HTML, CSS, JavaScript, and Java
const LESSONS_DATA = {
  html: [
    {
      id: "html-1",
      category: "HTML",
      title: "1. HTML Structure & Headings",
      difficulty: "Beginner",
      description: "HTML (HyperText Markup Language) is the skeleton of every website. Elements are defined using tags with opening and closing brackets.",
      theory: `
        <h3>What is HTML?</h3>
        <p>HTML documents consist of a tree of HTML elements. Each element tells the browser how to display content.</p>
        <ul>
          <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> represent six levels of section headings. <code>&lt;h1&gt;</code> is the highest section level and <code>&lt;h6&gt;</code> is the lowest.</li>
          <li><code>&lt;p&gt;</code> defines a paragraph of text.</li>
          <li><code>&lt;strong&gt;</code> makes text bold and important.</li>
          <li><code>&lt;em&gt;</code> italicizes text for emphasis.</li>
        </ul>
      `,
      starterCode: {
        html: `<h1>Welcome to CodeHub!</h1>
<p>This is your very first <strong>HTML</strong> paragraph.</p>
<h2>Explore Web Development</h2>
<p>Learning code is fun, fast, and <em>interactive</em>.</p>
<h3>Getting Started</h3>
<p>Edit this text in the editor and watch the preview update instantly!</p>`,
        css: `body {
  font-family: system-ui, sans-serif;
  padding: 20px;
  color: #1e293b;
  line-height: 1.6;
}

h1 {
  color: #2563eb;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
}

h2 {
  color: #0f172a;
}

strong {
  color: #d97706;
}`,
        js: `console.log("HTML & CSS playground loaded!");`
      }
    },
    {
      id: "html-2",
      category: "HTML",
      title: "2. Links, Images & Badges",
      difficulty: "Beginner",
      description: "Learn how to embed hyperlinks to navigate between pages and display images with attributes.",
      theory: `
        <h3>Connecting the Web</h3>
        <p>Hyperlinks make the web interconnected. Images bring your web pages to life.</p>
        <ul>
          <li><code>&lt;a href="url" target="_blank"&gt;</code> creates a clickable link.</li>
          <li><code>&lt;img src="image-url" alt="description" /&gt;</code> embeds an image. Notice that <code>&lt;img&gt;</code> is self-closing!</li>
          <li><code>alt</code> is vital for accessibility and search engines.</li>
        </ul>
      `,
      starterCode: {
        html: `<div class="card">
  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=80" alt="Laptop on desk" class="card-img" />
  <div class="card-content">
    <span class="badge">Technology</span>
    <h2>Modern Web Design</h2>
    <p>Discover how images and clickable links transform static documents into interactive stories.</p>
    <a href="https://developer.mozilla.org" target="_blank" class="btn">Learn MDN Docs &rarr;</a>
  </div>
</div>`,
        css: `body {
  font-family: system-ui, sans-serif;
  background: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  max-width: 360px;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
}

.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
}

.badge {
  background: #eff6ff;
  color: #2563eb;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.btn {
  display: inline-block;
  margin-top: 15px;
  background: #2563eb;
  color: white;
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 500;
  transition: background 0.2s;
}

.btn:hover {
  background: #1d4ed8;
}`,
        js: `console.log("Card component rendered successfully!");`
      }
    },
    {
      id: "html-3",
      category: "HTML",
      title: "3. Forms, Inputs & User Interaction",
      difficulty: "Intermediate",
      description: "Forms collect user data such as text, emails, passwords, and choices.",
      theory: `
        <h3>Form Elements</h3>
        <p>Forms are the primary way users submit data to web applications.</p>
        <ul>
          <li><code>&lt;form&gt;</code> wraps input controls.</li>
          <li><code>&lt;input type="text | email | password"&gt;</code> specifies input type for mobile keyboards and built-in validation.</li>
          <li><code>&lt;button type="submit"&gt;</code> triggers form submission.</li>
        </ul>
      `,
      starterCode: {
        html: `<div class="form-container">
  <h2>Create Account</h2>
  <p class="subtitle">Join thousands of developers coding daily</p>
  
  <form id="signup-form">
    <div class="form-group">
      <label for="username">Full Name</label>
      <input type="text" id="username" placeholder="Alex Rivers" required />
    </div>

    <div class="form-group">
      <label for="email">Email Address</label>
      <input type="email" id="email" placeholder="alex@example.com" required />
    </div>

    <div class="form-group">
      <label for="role">Skill Focus</label>
      <select id="role">
        <option value="html-css">HTML & CSS Designer</option>
        <option value="fullstack">Full-Stack JavaScript</option>
        <option value="java">Java Backend Engineer</option>
      </select>
    </div>

    <button type="submit" id="submit-btn">Register Free</button>
  </form>
  
  <div id="result-message" class="hidden"></div>
</div>`,
        css: `body {
  font-family: system-ui, sans-serif;
  background: #0f172a;
  color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 20px;
}

.form-container {
  background: #1e293b;
  padding: 30px;
  border-radius: 14px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 30px rgba(0,0,0,0.4);
}

h2 { margin: 0 0 6px 0; color: #38bdf8; }
.subtitle { color: #94a3b8; font-size: 14px; margin-bottom: 24px; }

.form-group {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
}

label {
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 6px;
  color: #cbd5e1;
}

input, select {
  padding: 10px 14px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  outline: none;
}

input:focus, select:focus {
  border-color: #38bdf8;
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2);
}

button {
  width: 100%;
  padding: 12px;
  background: #0284c7;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.2s;
}

button:hover { background: #0369a1; }

.hidden { display: none; }
#result-message {
  margin-top: 16px;
  padding: 12px;
  background: #064e3b;
  color: #6ee7b7;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
}`,
        js: `const form = document.getElementById('signup-form');
const result = document.getElementById('result-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('username').value;
  const role = document.getElementById('role').value;
  
  result.classList.remove('hidden');
  result.textContent = \`Welcome aboard, \${name}! Track: \${role.toUpperCase()}\`;
  console.log("Form submitted by:", name);
});`
      }
    }
  ],

  css: [
    {
      id: "css-1",
      category: "CSS",
      title: "1. The CSS Box Model",
      difficulty: "Beginner",
      description: "Everything in CSS is a box! Understand Content, Padding, Border, and Margin.",
      theory: `
        <h3>Mastering the Box Model</h3>
        <p>Every element rendered on the screen consists of four rectangular areas:</p>
        <ol>
          <li><strong>Content</strong>: Where text and images appear.</li>
          <li><strong>Padding</strong>: Clears an area around the content (inside border).</li>
          <li><strong>Border</strong>: A border that goes around padding and content.</li>
          <li><strong>Margin</strong>: Clears an area outside the border (spacing between elements).</li>
        </ol>
        <p><code>box-sizing: border-box;</code> ensures width and height include padding and border.</p>
      `,
      starterCode: {
        html: `<div class="container">
  <div class="box box-margin">
    <div class="box-label">Margin Area (Orange)</div>
    <div class="box box-border">
      <div class="box-label">Border Area (Yellow)</div>
      <div class="box box-padding">
        <div class="box-label">Padding Area (Green)</div>
        <div class="box box-content">
          <strong>Content Area (Blue)</strong>
          <p>Width: 200px &times; Height: 80px</p>
        </div>
      </div>
    </div>
  </div>
</div>`,
        css: `body {
  font-family: monospace;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.box {
  border-radius: 8px;
  text-align: center;
  box-sizing: border-box;
}

.box-label {
  font-size: 11px;
  font-weight: bold;
  padding: 6px;
  text-transform: uppercase;
}

.box-margin {
  background: #fed7aa;
  padding: 20px;
  border: 2px dashed #ea580c;
}

.box-border {
  background: #fef08a;
  padding: 20px;
  border: 4px solid #ca8a04;
}

.box-padding {
  background: #bbf7d0;
  padding: 20px;
}

.box-content {
  background: #bae6fd;
  border: 2px solid #0284c7;
  padding: 20px;
  color: #0369a1;
}`,
        js: `console.log("CSS Box Model loaded. Try modifying padding and margin in CSS!");`
      }
    },
    {
      id: "css-2",
      category: "CSS",
      title: "2. Flexbox: Layout Magic",
      difficulty: "Intermediate",
      description: "Create responsive one-dimensional layouts with Flexible Box Layout.",
      theory: `
        <h3>Why Flexbox?</h3>
        <p>Flexbox simplifies distributing space and aligning items along a row or column.</p>
        <ul>
          <li><code>display: flex;</code> activates flex context on container.</li>
          <li><code>justify-content: space-between | center | space-around;</code> aligns items along main axis.</li>
          <li><code>align-items: center;</code> aligns items along cross axis.</li>
          <li><code>gap: 16px;</code> creates consistent spacing between items.</li>
        </ul>
      `,
      starterCode: {
        html: `<header class="navbar">
  <div class="logo">🚀 CodePulse</div>
  <nav class="nav-links">
    <a href="#">Home</a>
    <a href="#">Tutorials</a>
    <a href="#">Challenges</a>
    <a href="#">Community</a>
  </nav>
  <button class="nav-btn">Get Started</button>
</header>

<main class="grid-cards">
  <div class="card">HTML5</div>
  <div class="card highlight">CSS3 Flexbox</div>
  <div class="card">Java Core</div>
</main>`,
        css: `body {
  font-family: system-ui, sans-serif;
  margin: 0;
  background: #0f172a;
  color: #f8fafc;
}

/* Flexbox Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: #1e293b;
  border-bottom: 1px solid #334155;
}

.logo {
  font-size: 20px;
  font-weight: 700;
  color: #38bdf8;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-links a {
  color: #94a3b8;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #38bdf8;
}

.nav-btn {
  background: #38bdf8;
  color: #0f172a;
  border: none;
  padding: 8px 18px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

/* Flexbox Card Grid */
.grid-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 50px 20px;
}

.card {
  flex: 1;
  max-width: 220px;
  background: #1e293b;
  padding: 30px 20px;
  text-align: center;
  border-radius: 12px;
  border: 1px solid #334155;
  font-size: 18px;
  font-weight: 600;
  transition: transform 0.2s, border-color 0.2s;
}

.card:hover {
  transform: translateY(-6px);
}

.highlight {
  border-color: #38bdf8;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.25);
}`,
        js: `console.log("Flexbox navbar and card layout ready!");`
      }
    },
    {
      id: "css-3",
      category: "CSS",
      title: "3. CSS Animations & Glowing Effects",
      difficulty: "Intermediate",
      description: "Bring websites to life with keyframe animations, gradients, and glowing effects.",
      theory: `
        <h3>Keyframes & Transitions</h3>
        <p>CSS enables hardware-accelerated animations without JavaScript:</p>
        <ul>
          <li><code>@keyframes &lt;name&gt;</code> specifies intermediate steps.</li>
          <li><code>animation: spin 3s infinite linear;</code> configures duration and easing.</li>
          <li><code>filter: drop-shadow(...)</code> creates modern neon glows.</li>
        </ul>
      `,
      starterCode: {
        html: `<div class="scene">
  <div class="glow-orb"></div>
  <div class="glass-card">
    <div class="chip">CSS FX</div>
    <h1>Neon Pulse</h1>
    <p>Pure CSS animation with infinite rotating gradients and glassmorphism backdrop blur.</p>
    <button class="glow-btn">Trigger Magic</button>
  </div>
</div>`,
        css: `body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #050505;
  font-family: system-ui, sans-serif;
  color: white;
  overflow: hidden;
}

.scene {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.glow-orb {
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff007f, #7928ca, #0070f3);
  filter: blur(50px);
  animation: rotateGlow 6s infinite linear alternate;
}

@keyframes rotateGlow {
  0% { transform: scale(0.9) rotate(0deg); opacity: 0.7; }
  100% { transform: scale(1.2) rotate(180deg); opacity: 1; }
}

.glass-card {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 36px 32px;
  max-width: 340px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
}

.chip {
  display: inline-block;
  background: rgba(255,255,255,0.1);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  letter-spacing: 1px;
}

h1 {
  font-size: 28px;
  margin: 14px 0 10px 0;
  background: linear-gradient(90deg, #fff, #93c5fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  color: #94a3b8;
  font-size: 14px;
  line-height: 1.6;
}

.glow-btn {
  margin-top: 18px;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
  transition: transform 0.2s, box-shadow 0.2s;
}

.glow-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(168, 85, 247, 0.7);
}`,
        js: `const btn = document.querySelector('.glow-btn');
btn.addEventListener('click', () => {
  alert("✨ CSS animations make modern websites look incredible!");
});`
      }
    }
  ],

  javascript: [
    {
      id: "js-1",
      category: "JavaScript",
      title: "1. DOM Manipulation & Interactive Counter",
      difficulty: "Beginner",
      description: "JavaScript adds behavior and interactivity to HTML elements.",
      theory: `
        <h3>What is the DOM?</h3>
        <p>The Document Object Model (DOM) is an object-oriented representation of the web page.</p>
        <ul>
          <li><code>document.getElementById('id')</code> selects an element.</li>
          <li><code>element.addEventListener('click', handler)</code> listens for clicks.</li>
          <li><code>element.textContent = value</code> modifies rendered text safely.</li>
        </ul>
      `,
      starterCode: {
        html: `<div class="counter-box">
  <h1>Interactive Counter</h1>
  <div id="counter-value">0</div>
  
  <div class="button-group">
    <button id="decrement-btn">- Subtract</button>
    <button id="reset-btn">Reset</button>
    <button id="increment-btn">+ Add</button>
  </div>
</div>`,
        css: `body {
  font-family: system-ui, sans-serif;
  background: #111827;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.counter-box {
  background: #1f2937;
  padding: 36px 48px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

h1 {
  font-size: 22px;
  color: #9ca3af;
  margin-top: 0;
}

#counter-value {
  font-size: 72px;
  font-weight: 800;
  color: #3b82f6;
  margin: 20px 0;
}

.button-group {
  display: flex;
  gap: 12px;
  justify-content: center;
}

button {
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: transform 0.1s, opacity 0.2s;
}

button:active { transform: scale(0.95); }

#increment-btn { background: #10b981; color: white; }
#decrement-btn { background: #ef4444; color: white; }
#reset-btn { background: #4b5563; color: white; }`,
        js: `let count = 0;
const valueDisplay = document.getElementById('counter-value');

function updateDisplay() {
  valueDisplay.textContent = count;
  if (count > 0) valueDisplay.style.color = '#10b981';
  else if (count < 0) valueDisplay.style.color = '#ef4444';
  else valueDisplay.style.color = '#3b82f6';
  console.log("Current count:", count);
}

document.getElementById('increment-btn').addEventListener('click', () => {
  count++;
  updateDisplay();
});

document.getElementById('decrement-btn').addEventListener('click', () => {
  count--;
  updateDisplay();
});

document.getElementById('reset-btn').addEventListener('click', () => {
  count = 0;
  updateDisplay();
});`
      }
    }
  ],

  java: [
    {
      id: "java-1",
      category: "Java",
      title: "1. Hello World & Structure",
      difficulty: "Beginner",
      description: "Discover Java's class structure, main method, and standard output printing.",
      theory: `
        <h3>Java Core Anatomy</h3>
        <p>Java is an object-oriented, strictly typed programming language.</p>
        <ul>
          <li>Every Java application starts inside a class (e.g. <code>public class Main</code>).</li>
          <li>The program execution begins with the <code>main</code> method:
            <code>public static void main(String[] args)</code>.</li>
          <li><code>System.out.println()</code> prints text followed by a new line.</li>
          <li>Every statement must end with a semicolon (<code>;</code>).</li>
        </ul>
      `,
      starterCode: {
        java: `public class Main {
    public static void main(String[] args) {
        System.out.println("===============================");
        System.out.println("  Welcome to Java Programming! ");
        System.out.println("===============================");
        
        System.out.println("Java is fast, robust, and platform independent.");
        System.out.println("Write Once, Run Anywhere (WORA)!");
        
        int year = 1995;
        System.out.println("Java was created in: " + year);
    }
}`
      }
    },
    {
      id: "java-2",
      category: "Java",
      title: "2. Variables, Math & Data Types",
      difficulty: "Beginner",
      description: "Work with integer numbers, floating-point decimals, strings, booleans, and arithmetic operations.",
      theory: `
        <h3>Primitive Data Types</h3>
        <p>In Java, variables must be explicitly declared with their type:</p>
        <ul>
          <li><code>int</code>: 32-bit integer (e.g. <code>42</code>)</li>
          <li><code>double</code>: floating-point decimal (e.g. <code>3.14159</code>)</li>
          <li><code>boolean</code>: true or false (e.g. <code>true</code>)</li>
          <li><code>String</code>: Sequence of characters in double quotes (e.g. <code>"Java"</code>)</li>
        </ul>
      `,
      starterCode: {
        java: `public class Main {
    public static void main(String[] args) {
        String studentName = "Aria Patel";
        int studentAge = 20;
        double gpa = 3.92;
        boolean isEnrolled = true;
        
        System.out.println("--- Student Profile ---");
        System.out.println("Name: " + studentName);
        System.out.println("Age: " + studentAge);
        System.out.println("GPA: " + gpa);
        System.out.println("Enrolled: " + isEnrolled);
        
        // Arithmetic calculations
        int mathScore = 95;
        int csScore = 98;
        int physicsScore = 91;
        double average = (mathScore + csScore + physicsScore) / 3.0;
        
        System.out.println("Average Grade: " + average);
    }
}`
      }
    },
    {
      id: "java-3",
      category: "Java",
      title: "3. If-Else Decision Making",
      difficulty: "Beginner",
      description: "Make decisions in code using conditional statements and comparison operators.",
      theory: `
        <h3>Conditionals in Java</h3>
        <p>Use <code>if</code>, <code>else if</code>, and <code>else</code> to execute different branches of code.</p>
        <ul>
          <li>Comparison operators: <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code></li>
          <li>Logical operators: <code>&amp;&amp;</code> (AND), <code>||</code> (OR), <code>!</code> (NOT)</li>
        </ul>
      `,
      starterCode: {
        java: `public class Main {
    public static void main(String[] args) {
        int score = 87;
        String grade;
        
        if (score >= 90) {
            grade = "A+ (Excellent!)";
        } else if (score >= 80) {
            grade = "B (Great job!)";
        } else if (score >= 70) {
            grade = "C (Good effort)";
        } else {
            grade = "Needs Improvement";
        }
        
        System.out.println("Student Exam Score: " + score);
        System.out.println("Calculated Grade: " + grade);
        
        // Pass / Fail Check
        boolean hasPassed = score >= 60;
        if (hasPassed) {
            System.out.println("Status: PASSED to next semester! 🎉");
        } else {
            System.out.println("Status: RETAKE required");
        }
    }
}`
      }
    },
    {
      id: "java-4",
      category: "Java",
      title: "4. Loops & Pattern Printing",
      difficulty: "Intermediate",
      description: "Repeat operations using for loops and while loops to generate patterns and sums.",
      theory: `
        <h3>Repeating Code with Loops</h3>
        <p>Loops allow repeated execution until a specific condition evaluates to false.</p>
        <ul>
          <li><code>for (initialization; condition; update)</code></li>
          <li><code>while (condition)</code></li>
          <li>Nested loops are commonly used for matrix calculations and pattern generation.</li>
        </ul>
      `,
      starterCode: {
        java: `public class Main {
    public static void main(String[] args) {
        System.out.println("=== 1. Multiplication Table of 7 ===");
        int num = 7;
        for (int i = 1; i <= 10; i++) {
            System.out.println(num + " x " + i + " = " + (num * i));
        }
        
        System.out.println("\\n=== 2. Pyramid Star Pattern ===");
        int rows = 5;
        for (int i = 1; i <= rows; i++) {
            String line = "";
            for (int j = 1; j <= i; j++) {
                line += "⭐ ";
            }
            System.out.println(line);
        }
        
        System.out.println("\\n=== 3. Sum of numbers 1 to 100 ===");
        int sum = 0;
        for (int n = 1; n <= 100; n++) {
            sum += n;
        }
        System.out.println("Total sum: " + sum);
    }
}`
      }
    },
    {
      id: "java-5",
      category: "Java",
      title: "5. Methods & Reusable Functions",
      difficulty: "Intermediate",
      description: "Write modular code with parameters, return types, and static helper methods.",
      theory: `
        <h3>Defining Methods</h3>
        <p>A method is a block of code which only runs when it is called.</p>
        <ul>
          <li><code>public static int add(int a, int b)</code></li>
          <li><code>void</code> means the method does not return a value.</li>
          <li><code>return</code> passes results back to the caller.</li>
        </ul>
      `,
      starterCode: {
        java: `public class Main {
    // Custom method to calculate power (x^y)
    public static int power(int base, int exponent) {
        int result = 1;
        for (int i = 0; i < exponent; i++) {
            result *= base;
        }
        return result;
    }
    
    // Custom method to check if a number is prime
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println("2^8 = " + power(2, 8));
        System.out.println("5^3 = " + power(5, 3));
        
        System.out.println("\\nPrime numbers check:");
        int[] testNumbers = {7, 12, 19, 25, 31};
        for (int num : testNumbers) {
            System.out.println("Is " + num + " prime? " + isPrime(num));
        }
    }
}`
      }
    },
    {
      id: "java-6",
      category: "Java",
      title: "6. Object-Oriented Programming (OOP)",
      difficulty: "Advanced",
      description: "Create custom classes, member variables, constructors, and object instances.",
      theory: `
        <h3>Classes and Objects</h3>
        <p>Java is an Object-Oriented language centered around Classes and Objects.</p>
        <ul>
          <li>A <strong>Class</strong> is a blueprint or template for objects.</li>
          <li>An <strong>Object</strong> is an instance of a class with state and behavior.</li>
          <li>Constructors initialize new instances of a class.</li>
        </ul>
      `,
      starterCode: {
        java: `class Hero {
    String name;
    String powerClass;
    int health;
    int attackPower;

    // Constructor
    public Hero(String name, String powerClass, int health, int attackPower) {
        this.name = name;
        this.powerClass = powerClass;
        this.health = health;
        this.attackPower = attackPower;
    }

    public void displayStatus() {
        System.out.println("[" + this.powerClass + "] " + this.name + " - HP: " + this.health + ", ATK: " + this.attackPower);
    }

    public void takeDamage(int dmg) {
        this.health -= dmg;
        System.out.println(this.name + " takes " + dmg + " damage! Remaining HP: " + this.health);
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("=== Creating RPG Heroes ===");
        Hero knight = new Hero("Arthur", "Warrior", 120, 25);
        Hero wizard = new Hero("Merlin", "Mage", 75, 55);

        knight.displayStatus();
        wizard.displayStatus();

        System.out.println("\\n=== Battle Simulation ===");
        System.out.println(wizard.name + " casts Fireball at " + knight.name + "!");
        knight.takeDamage(wizard.attackPower);

        System.out.println(knight.name + " retaliates with Sword Slash!");
        wizard.takeDamage(knight.attackPower);
    }
}`
      }
    }
  ]
};

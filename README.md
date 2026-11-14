# 🚀 CodeCraft Studio — HTML, CSS & Java Learning Platform

An interactive, all-in-one learning studio and live code preview environment designed to learn **HTML**, **CSS**, and **Java** directly in the browser with zero installations required.

---

## ✨ Features

### 1. 🌐 Inbuilt Web Playground (HTML & CSS Live Preview)
- **Real-Time Code Sync**: Live iframe updates as you type (with optional debouncing toggle).
- **Separated Editors**: Dedicated tabs for HTML, CSS, and JavaScript with line numbers and 2-space Tab indentation support.
- **Inbuilt Console Output Drawer**: Intercepts `console.log()`, `console.warn()`, and runtime JavaScript exceptions directly inside the bottom drawer.
- **Multi-Device Responsive Previews**: 1-click viewport switcher for **Desktop (100%)**, **Tablet (768px)**, and **Mobile (375px)**.
- **External Popup**: Open preview in a clean standalone browser window.
- **5 Pre-built Starter Templates**:
  1. *Modern Hero Landing Page*
  2. *Glassmorphism Profile Card*
  3. *Interactive To-Do List App*
  4. *CSS Flexbox Pricing Grid*
  5. *Animated Neon Glowing Buttons*

### 2. ☕ Inbuilt Java Simulator & Compiler Playground
- **Client-Side Java Virtual Runner**: Write and run Java code client-side without needing JDK installed locally.
- **Linux/Bash Styled Inbuilt Terminal**: Simulates `javac Main.java && java Main` with real-time compilation status, execution timestamps, and syntax checks.
- **Supports Core Java Syntax**:
  - `System.out.println()` & `System.out.print()`
  - Primitive data types (`int`, `double`, `boolean`, `String`, arrays)
  - Conditionals (`if`, `else if`, `else`)
  - Loops (`for`, `while`, enhanced `for-each`, nested star pyramids)
  - Custom functions & static methods (e.g. prime number checker, math functions)
  - Object-Oriented Programming (Classes, constructors, member variables, methods, object instances)
- **Presets & Reset**: Instantly switch between classic Java algorithm examples.

### 3. 📚 Step-by-Step Interactive Curriculum
- Structured beginner-to-advanced lessons across **HTML5**, **CSS3**, **Java**, and **JavaScript**.
- **1-Click "Load into Code Preview"**: Instantly injects lesson theory starter code into the live preview/simulator and switches to the editor.
- **Progress Tracking**: Checkboxes save completed lessons to browser `localStorage`.

### 4. 🔍 Syntax Cheat Sheet & Quick Lookup
- Instant search filter for essential HTML tags, CSS Flexbox/Grid properties, and Java keywords.

### 5. 🎨 Polished Modern Developer UI
- Dark Mode / Light Mode toggle with local persistence.
- High-contrast developer fonts (`Fira Code` & `Plus Jakarta Sans`).
- Offline-ready: Works anywhere simply by opening `index.html`.

---

## 🏃 How to Run

### Method 1: Direct File Open
Double click `index.html` or right-click and choose **"Open with Chrome / Edge / Firefox"**.

### Method 2: Local HTTP Server (Optional)
If you prefer running a local dev server:
```bash
# Using Python
python -m http.server 3000

# Or using npx
npx serve .
```
Then navigate to `http://localhost:3000`.

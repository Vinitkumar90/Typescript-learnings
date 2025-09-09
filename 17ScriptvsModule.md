# TypeScript: Script vs Module (with `export {}`)

- When a .ts (or .js) file is treated as a script (no import or export inside it):

- In the browser, all top-level variables get attached to the window object (the global object).

- In Node.js, they don’t go to window (since there’s no window) but they still live in a shared global scope for that script.

```
Example (Browser)
// index.js (compiled from a script file)
let msg = "hello";

console.log(window.msg); // "hello" ✅
```

Here, msg leaks into the global window object.

```
Example (Module)
// index.js (compiled from a module file)
export {};

let msg = "hello";

console.log(window.msg); // undefined ❌
```

Because modules have their own scope. Nothing leaks into window.

⚡That’s the big reason why modern JS/TS projects always use modules → to avoid global pollution.

---

## Script vs Module in TypeScript

### 1. Script (default behavior)
- If your `.ts` file has **no `import` or `export`**, it is treated as a **script**.  
- All variables in a script are placed in the **global scope** when compiled to JavaScript.  
- In the browser, they can accidentally leak into the `window` object.

Example:
```ts
let greetings = "hello";
console.log(greetings);
```
Compiles to normal JS, and `greetings` could end up in the global scope.

---

### 2. Module
- If your `.ts` file has **any `import` or `export`**, it becomes a **module**.  
- Variables in a module are **scoped locally** and do **not** leak into the global scope.  
- This is safer for large projects.

Example:
```ts
export {}; // empty export is enough to mark the file as a module

let greetings = "hello vinit";
console.log(greetings);
```
This will generate **ES Module** JavaScript with `export {}`.

---

## Browser Behavior

- Browsers understand **`export` / `import` (ES Modules)** ✅  
- Browsers **do not understand `exports` (CommonJS)** ❌ — that’s for Node.js.

So:
- Use `export` (ESM) if you want to run in the browser.  
- Use `exports` (CommonJS) if you’re targeting Node.js.

In HTML, when using ES modules:
```html
<script type="module" src="./dist/index.js"></script>
```

---

## Key Takeaways
1. Scripts put variables in global scope → potential conflicts.  
2. Adding `export {}` makes the file a **module**, preventing globals.  
3. Browser supports **ESM (`export` / `import`)**, not **CommonJS (`exports`)**.

---

## Browser

- ✅ Supports ESM (export / import) natively.

- ❌ Does not support CommonJS (exports, require).

So if your code runs in the browser, you must compile to "module": "ESNext" or "module": "ES2020" in tsconfig.json.

```json
// tsconfig.json for browser
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",   // Browser understands import/export
    "outDir": "dist"
  }
}
```

And in HTML:
```html
<script type="module" src="./dist/index.js"></script>
```

## Node.js

- Originally, Node.js only supported CommonJS (require, module.exports).

- But now Node.js also supports ESM (import/export), provided you:

- Use .mjs extension OR

- Add "type": "module" in package.json.

```json
CommonJS (default Node.js style)
// tsconfig.json for Node (CommonJS)
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",   // Node default
    "outDir": "dist"
  }
}
```

```json
ESM in Node.js (modern style)
// tsconfig.json for Node (ESM)
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",   // Node can handle import/export
    "outDir": "dist"
  }
}
```
```json
Also add to package.json:

{
  "type": "module"
}
```

---
## extra
```json
"module": "NodeNext" (or "Node16")
```
- Newer TypeScript options specifically designed for Node.js’s dual support (both CommonJS and ESM).

- Lets TypeScript follow Node’s own resolution rules:

- .cjs → CommonJS

- .mjs → ESM

- .js → depends on "type" field in package.json.

Recommended if you want modern Node.js compatibility with both systems.

---
## extra
- Any JS file included in HTML can manipulate the page via DOM.

- Modules do not leak variables to the HTML/global scope — you have to explicitly attach to window if you want that.

- JS cannot automatically access HTML variables; only the DOM and global objects are accessible.
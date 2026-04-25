## 2024-05-18 - Replacing `.filter()[0]` with `.find()` for better performance
**Learning:** Found multiple instances of `array.filter(condition)[0]` being used to find a single element. This is inefficient as it iterates the entire array and creates an unnecessary intermediate array, which then gets discarded.
**Action:** Replace `array.filter(condition)[0]` with `array.find(condition)` across the codebase. Use optional chaining `?.` if accessing a property on the found object.

## 2024-05-18 - Implement React Lazy Loading for Routes
**Learning:** Found that all page components were being statically imported in `App.js`, leading to a single large JS bundle (`main.js`). This negatively impacts the initial load time as the user must download the entire application code upfront, even for pages they may not visit.
**Action:** Replaced static imports with `React.lazy()` for all route components in `App.js` and wrapped the `Outlet` in `RootLayout.js` with a `Suspense` component. This enables code splitting, reducing the initial bundle size and improving the time to interactive.

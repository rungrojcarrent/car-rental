## 2024-05-18 - Replacing `.filter()[0]` with `.find()` for better performance
**Learning:** Found multiple instances of `array.filter(condition)[0]` being used to find a single element. This is inefficient as it iterates the entire array and creates an unnecessary intermediate array, which then gets discarded.
**Action:** Replace `array.filter(condition)[0]` with `array.find(condition)` across the codebase. Use optional chaining `?.` if accessing a property on the found object.
## 2024-05-18 - Route Code Splitting with React.lazy
**Learning:** Found that all page route components were statically imported in `src/App.js`, increasing the initial bundle size unnecessarily.
**Action:** Use `React.lazy()` for route components that are not immediately needed (like `Home`, `About`, `Vehicle`, etc.) and wrap the router's `<Outlet />` in `src/layout/RootLayout.js` with `<Suspense>` to handle the lazy loading. Keep error boundaries (`ErrorPage`) statically imported to avoid suspending during an error.

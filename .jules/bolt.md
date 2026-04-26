## 2024-05-18 - Replacing `.filter()[0]` with `.find()` for better performance
**Learning:** Found multiple instances of `array.filter(condition)[0]` being used to find a single element. This is inefficient as it iterates the entire array and creates an unnecessary intermediate array, which then gets discarded.
**Action:** Replace `array.filter(condition)[0]` with `array.find(condition)` across the codebase. Use optional chaining `?.` if accessing a property on the found object.

## 2024-05-18 - Route Code Splitting with React.lazy
**Learning:** The React application was importing all route components synchronously in `src/App.js`. This creates a large initial JavaScript bundle, slowing down the time-to-interactive for the main page. Lazy loading is very effective, but `ErrorPage` must remain statically imported since it serves as the error boundary and must be available synchronously if an error occurs.
**Action:** Use `React.lazy` for importing page components tied to specific routes. Always wrap `Outlet` or routing contexts with `<Suspense>` and a loading fallback. Maintain static imports for `ErrorPage` and the root layout.

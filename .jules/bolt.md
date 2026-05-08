## 2024-05-18 - Replacing `.filter()[0]` with `.find()` for better performance
**Learning:** Found multiple instances of `array.filter(condition)[0]` being used to find a single element. This is inefficient as it iterates the entire array and creates an unnecessary intermediate array, which then gets discarded.
**Action:** Replace `array.filter(condition)[0]` with `array.find(condition)` across the codebase. Use optional chaining `?.` if accessing a property on the found object.

## 2024-05-20 - React.lazy() and Error Boundary Routing
**Learning:** When using `React.lazy()` for route code splitting in this codebase, the `ErrorPage` component MUST remain statically imported. If the `ErrorPage` is lazy-loaded, it cannot immediately catch errors during the initial render or suspense phase, defeating its purpose as a reliable error boundary in React Router v6.
**Action:** Always statically import error boundary components or 404 pages when implementing route-level code splitting with `React.lazy()`.

## 2024-05-18 - Replacing `.filter()[0]` with `.find()` for better performance
**Learning:** Found multiple instances of `array.filter(condition)[0]` being used to find a single element. This is inefficient as it iterates the entire array and creates an unnecessary intermediate array, which then gets discarded.
**Action:** Replace `array.filter(condition)[0]` with `array.find(condition)` across the codebase. Use optional chaining `?.` if accessing a property on the found object.
## 2024-06-05 - Route Code Splitting with React Router v6
**Learning:** Statically importing all page-level components in React Router v6 apps causes all code to be downloaded on initial load, drastically increasing bundle size and slowing down the initial page render. This project specifically structured routes synchronously in `App.js`.
**Action:** Always use `React.lazy()` for route components (excluding error boundaries which must be synchronous) and wrap the `<Outlet />` with `<Suspense>` in the layout component to automatically code-split routes and improve performance.

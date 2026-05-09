## 2024-05-18 - Replacing `.filter()[0]` with `.find()` for better performance
**Learning:** Found multiple instances of `array.filter(condition)[0]` being used to find a single element. This is inefficient as it iterates the entire array and creates an unnecessary intermediate array, which then gets discarded.
**Action:** Replace `array.filter(condition)[0]` with `array.find(condition)` across the codebase. Use optional chaining `?.` if accessing a property on the found object.

## 2024-05-20 - Lazy Loading Route Components
**Learning:** Route components in App.js should be lazy-loaded using React.lazy() to reduce the initial bundle size. However, the ErrorPage component must be statically imported (not lazy-loaded) as it acts as an error boundary and needs to be immediately available without suspending.
**Action:** Wrap the main `<Outlet />` with `<Suspense>` in the RootLayout, and use `React.lazy(() => import(...))` for main route components.

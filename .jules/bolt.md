## 2024-05-18 - Replacing `.filter()[0]` with `.find()` for better performance
**Learning:** Found multiple instances of `array.filter(condition)[0]` being used to find a single element. This is inefficient as it iterates the entire array and creates an unnecessary intermediate array, which then gets discarded.
**Action:** Replace `array.filter(condition)[0]` with `array.find(condition)` across the codebase. Use optional chaining `?.` if accessing a property on the found object.
## 2024-05-18 - Lazy Loading Route Components
**Learning:** In a single-page React application, statically importing all route components causes them to be bundled into the main JavaScript payload, increasing initial load time.
**Action:** Use `React.lazy()` for route components (like Home, About, etc.) and wrap the router `<Outlet />` in a `<Suspense>` boundary to code-split the application. Only the main layout (`RootLayout`) and the error boundary (`ErrorPage`) should remain as static imports to ensure they load immediately.

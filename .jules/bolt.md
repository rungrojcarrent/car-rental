## 2024-05-18 - Replacing `.filter()[0]` with `.find()` for better performance
**Learning:** Found multiple instances of `array.filter(condition)[0]` being used to find a single element. This is inefficient as it iterates the entire array and creates an unnecessary intermediate array, which then gets discarded.
**Action:** Replace `array.filter(condition)[0]` with `array.find(condition)` across the codebase. Use optional chaining `?.` if accessing a property on the found object.

## 2024-05-18 - Implement Route Code Splitting
**Learning:** The initial JavaScript bundle sizes were large because all pages (`Home`, `About`, `Vehicle`, etc.) were statically imported in `App.js`. This creates a bottleneck on initial load, especially for users on slower connections or devices. React Router handles async loading out of the box when used with `React.lazy()` and `Suspense`.
**Action:** Lazy load route components using `React.lazy()` and wrap the root `<Outlet />` in a `<Suspense>` boundary. Ensure that error boundaries (like `ErrorPage`) are kept statically imported so they don't suspend during a crash.

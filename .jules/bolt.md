## 2024-05-18 - Replacing `.filter()[0]` with `.find()` for better performance
**Learning:** Found multiple instances of `array.filter(condition)[0]` being used to find a single element. This is inefficient as it iterates the entire array and creates an unnecessary intermediate array, which then gets discarded.
**Action:** Replace `array.filter(condition)[0]` with `array.find(condition)` across the codebase. Use optional chaining `?.` if accessing a property on the found object.
## 2026-05-02 - Code Splitting Routes with React.lazy
**Learning:** The React application in this repository was importing all route components statically in `src/App.js`. This meant the initial JavaScript bundle sent to the client contained all components for all pages, regardless of which page the user initially landed on, negatively impacting the initial load performance.
**Action:** Implemented code splitting using `React.lazy` for dynamic imports of route components, paired with a `<Suspense>` boundary in the main layout wrapper (`RootLayout.js`) to handle loading states smoothly. Ensure essential components like `ErrorPage` remain statically imported for immediate availability.

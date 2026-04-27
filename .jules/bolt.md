## 2024-04-27 - Code Splitting React Router

**Learning:** This codebase had all top-level page components statically imported into `App.js`, forcing the client to download the JavaScript for all pages even if they only needed to see the `Home` page. This creates a larger-than-necessary initial JS bundle. We used `React.lazy()` to lazily import the page components and `<Suspense>` within `RootLayout.js` to show a fallback loading state.

**Action:** Before optimizing smaller specific UI elements, always check top-level routing (like `App.js`) for missing code splitting opportunities to achieve significant initial load time improvements. Ensure ErrorBoundary/ErrorPage components remain statically imported to prevent circular failures during chunk loading errors.

## 2024-05-18 - Replacing `.filter()[0]` with `.find()` for better performance
**Learning:** Found multiple instances of `array.filter(condition)[0]` being used to find a single element. This is inefficient as it iterates the entire array and creates an unnecessary intermediate array, which then gets discarded.
**Action:** Replace `array.filter(condition)[0]` with `array.find(condition)` across the codebase. Use optional chaining `?.` if accessing a property on the found object.

## 2024-11-20 - Adding Lazy Loading to Components
**Learning:** Native `loading="lazy"` attribute on `<img>` tags is a quick, low-impact method to optimize image loading performance, specifically for components likely to render below the fold.
**Action:** When working on performance optimizations for images, default to adding `loading="lazy"` before considering heavier solutions like manual lazy-loading components or Intersection Observers, especially if browser compatibility allows it.

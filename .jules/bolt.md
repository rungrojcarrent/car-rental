## 2024-05-18 - Replacing `.filter()[0]` with `.find()` for better performance
**Learning:** Found multiple instances of `array.filter(condition)[0]` being used to find a single element. This is inefficient as it iterates the entire array and creates an unnecessary intermediate array, which then gets discarded.
**Action:** Replace `array.filter(condition)[0]` with `array.find(condition)` across the codebase. Use optional chaining `?.` if accessing a property on the found object.
## 2024-05-18 - Lazy loading unoptimized images
**Learning:** Found multiple `<img/>` elements in lower-page components without native `loading="lazy"` attributes, meaning images are downloaded before users ever scroll to them.
**Action:** Add `loading="lazy"` to images in components that reside "below the fold", preserving original layout/alt properties while delaying initial resource loading until near viewport intersection.

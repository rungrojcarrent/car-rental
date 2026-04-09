## 2026-04-09 - Performance Optimization: Array Searching
**Learning:** Using `.find()` instead of `.filter()[0]` improves performance because `.find()` stops iterating once it finds the first match, whereas `.filter()` creates a new array and iterates through the entire array.
**Action:** Always use `.find()` when retrieving a single element from an array to avoid creating unnecessary intermediate arrays and improve performance.

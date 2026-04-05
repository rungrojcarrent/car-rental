## 2024-04-05 - Array Search Optimization
**Learning:** Found usage of `.filter()[0]` for array element retrieval. This traverses the entire array and allocates an intermediate array just to get the first element.
**Action:** Always prefer `.find()` over `.filter()[0]` for O(N) short-circuiting traversal and to avoid intermediate memory allocations.
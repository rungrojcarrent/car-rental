## 2025-04-10 - Replace .filter()[0] with .find()
**Learning:** Found usage of `.filter(...)[0]` to retrieve a single object from state/context arrays. This creates an unnecessary intermediate array and loops over the whole list.
**Action:** Always prefer `.find(...)` which is O(N) but halts early and returns without intermediate allocations.

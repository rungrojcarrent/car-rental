## 2024-05-24 - Array Search Optimization
**Learning:** The codebase previously used `.filter(condition)[0]` which creates unnecessary intermediate arrays and doesn't short-circuit. Switching to `.find(condition)` improves performance and memory usage, avoiding full traversal.
**Action:** Always prefer `.find()` over `.filter()[0]` for single-element lookups to prevent unnecessary object allocation.

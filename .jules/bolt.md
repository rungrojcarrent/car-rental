## 2026-04-15 - Refactoring Form Validation/Reset Logic with Refs
**Learning:** React ref arrays can be cleanly used in components with many refs to minimize repetition during common form-level operations, such as clearing values and validating all fields.
**Action:** When writing or refactoring components with large forms and individual refs, consolidate refs into an array and loop over them (e.g., using `.some` or `.forEach`) for more maintainable, concise code.

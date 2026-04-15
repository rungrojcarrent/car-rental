## 2024-04-15 - React Component Testing with `@testing-library/user-event`
**Learning:** Testing `e.preventDefault()` via simulated form submissions using `userEvent` or `fireEvent.submit` on the form can be tricky if the logic is directly bound to a button's `onClick` handler.
**Action:** Next time, if `preventDefault()` is on a button click, we can create a mock event or explicitly spy on `Event.prototype.preventDefault`, or simply ensure `fireEvent.click()` behaves correctly instead of trying to pass a mock event using unsupported testing library methodologies.

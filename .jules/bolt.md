
## 2024-05-24 - React Scripts and ESLint v10
**Learning:** Running `npm run lint` natively with ESLint v10 environment without Flat Config requires the `ESLINT_USE_FLAT_CONFIG=false` prefix. Also, building with `CI=true` will fail the react-scripts build due to warnings being promoted to errors. Running `CI=false npm run build` helps confirm actual build-time syntax validity without being blocked by older warnings.
**Action:** Always test builds using `CI=false npm run build` locally to circumvent pre-existing un-fixable lint warnings stopping compilation. Keep testing flag `CI=true npm test -- --passWithNoTests` when tests are effectively empty.

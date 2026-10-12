# Novara Commerce documentation

This workspace contains the guides, generated API reference, and administration user documentation for Novara Commerce.

## Contents

- `docs/guides/` — getting-started, core-concept, developer, and how-to guides
- `docs/reference/` — generated TypeScript, GraphQL, and plugin API reference
- `docs/user-guide/` — administration dashboard documentation
- `src/manifest.ts` — navigation and documentation metadata

## Development

From the repository root, generate the API reference with:

```bash
bun run docs:build
```

Files below `docs/reference/` are generated from source code and should not be edited directly. Update the relevant source or JSDoc comments and regenerate them instead.

## Repository

Project source, issues, and documentation changes are managed in the [Novara Commerce repository](https://github.com/MarieHasson/novara-commerce).

## License

This documentation is distributed under the project license in [`../LICENSE.md`](../LICENSE.md).

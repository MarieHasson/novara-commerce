# Novara Commerce

Novara Commerce is a TypeScript headless-commerce framework for building custom catalogs, checkout flows, order management, promotions, payments, shipping, and multi-channel storefronts.

The project combines a Node.js and GraphQL backend with an extensible administration dashboard. Its plugin-oriented architecture allows teams to add domain-specific entities, business rules, integrations, and workflows without modifying the core framework.

## Features

- GraphQL APIs for administration and storefront clients
- Catalog, inventory, customer, order, promotion, tax, payment, and shipping services
- Multi-channel and multi-vendor support
- Extensible plugin and custom-field systems
- React-based administration dashboard
- SQL database support through PostgreSQL, MySQL, MariaDB, and SQLite
- End-to-end testing utilities and development tooling

## Requirements

- Node.js 20.19 or later, or Node.js 22.12 or later
- Bun
- A supported SQL database for production deployments

## Development

Install dependencies and build the monorepo:

```bash
bun install
bun run build
```

Run packages in watch mode while developing:

```bash
bun run watch
```

When working on the core and common packages together, use:

```bash
bun run watch:core-common
```

Run the test suites with:

```bash
bun run test
```

Package-specific end-to-end tests should be run from the relevant package directory. See [CONTRIBUTING.md](./CONTRIBUTING.md) for the complete development workflow.

## Repository layout

- `packages/` — framework packages, plugins, dashboard, CLI, and testing tools
- `docs/` — guides, API reference material, and user documentation
- `scripts/` — build, release, code-generation, and maintenance utilities
- `e2e-common/` — shared end-to-end test infrastructure

## Documentation

The documentation source is maintained in [`docs/docs`](./docs/docs). API reference files in `docs/docs/reference` are generated from source code and should not be edited directly.

## Security

Please report suspected vulnerabilities through [GitHub private vulnerability reporting](https://github.com/MarieHasson/novara-commerce/security/advisories/new). Do not disclose security issues through public issues or email. See [SECURITY.md](./SECURITY.md) for supported versions and reporting guidance.

## License

This project is distributed under the terms in [LICENSE.md](./LICENSE.md). Additional licensing material is available in the [`license`](./license) directory.

# Quality journal

Append-only dated evidence; do not claim production execution that was not verified.

## 2026-11-15 | Enforce living architecture documentation
- Scope: Nebula Noir PR documentation owner map, architectural boundary summary and CI evidence journal.
- Root cause: Prose documentation rules did not reject PRs that omitted required architecture updates.
- Owner: Project maintainers own auth, contact, storage, sync and the documentation contracts.
- Tests: Standalone Node contract tests cover source changes and malformed journal entries in pull-request CI.
- Failure path: Missing owners or inaccessible git ancestry reject the change, rather than silently passing.
- Docs updated: Architecture summary, quality programme, dated journal, agent contract and deployment guide.
- Residual risk: Live provider, RLS and browser behavior still require independent validation; branch rules are separate.

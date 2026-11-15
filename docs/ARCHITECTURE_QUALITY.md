# Architecture quality programme

Status: **Documentation quality process introduced; independent architecture audit not completed.** Owner: maintainers. Date: 2026-11-15.

## Sources of truth

[Architecture](ARCHITECTURE.md), [Security](../SECURITY.md), [Deployment/data operations](../DEPLOYMENT.md), [Documentation mapping](living-docs.json), [Quality journal](QUALITY_JOURNAL.md).

## Invariants

- Admin writes have server authorization and Supabase RLS independently of visible navigation.
- Public contact spam checks, rate limiting and provider errors are server-owned and fail closed.
- Media uploads have explicit consistency and replacement semantics. Failed new uploads never delete valid old assets.
- Instagram sync runs with bounded retries without using GET or serverless cold starts as write triggers.
- Returned database errors do not become writable empty defaults or fake success messages.
- Every change includes negative tests, reviewed architectural ownership and truthful operational claims.

## Acceptance baseline

| Gate | State |
| --- | --- |
| Complete UI, storage, auth, sync data-flow map | Not established |
| P0/P1 architectural findings resolved with regression tests | Not established |
| Live RLS, provider failure and partial-upload tests | Not fully verified |
| Performance SLOs, monitoring and rollback drill | Not established |
| Living docs PR check and dated journal | Added in PR; protect the required GitHub status |

A human reviewer validates journal evidence and all affected documents against current source and tests. No CI text check certifies a production outcome.

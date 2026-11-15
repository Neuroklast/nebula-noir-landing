# Architecture and boundaries

## Responsibility map

- Next.js App Router owns public presentation and admin routes. React client components manage form state, never trusted authorization.
- Server actions own validated contact submissions and admin mutations. Supabase with RLS is the durable user and content boundary.
- Authentication session rules and admin-only authorization live in the Supabase services and admin shell. Normal logout is local to one session.
- Contact handling uses server-side validation, rate limit, bot honeypot and notification delivery. Failure is observable, not an empty success.
- Media uploads use the configured object storage path. The media storage and metadata write sequence must be recoverable if either phase fails.
- Instagram synchronization is a distinct scheduled or provider-triggered operation, not tied to ordinary GET/SSR render.
- Deployment and environment contracts live in [DEPLOYMENT.md](../DEPLOYMENT.md). Privacy constraints are in [SECURITY.md](../SECURITY.md) and [COMPLIANCE.md](../COMPLIANCE.md).

## Required changes

New auth, media, contact or sync behavior must identify the canonical owner and data flows, preserve RLS, add negative-path tests and update the affected docs and [quality journal](QUALITY_JOURNAL.md). Never introduce automatic data migrations during application startup. This document is a current boundary overview, not proof that the architecture is free from defects.

# Learnova AI — Risk Management

**Status:** Initial risk register; owners are assumed to be the student project owner.

| Risk | Likelihood / impact | Mitigation |
|---|---|---|
| Scope exceeds available time | High / High | Build one vertical slice first; prioritize based on student value; move advanced features to later work |
| AI gives unsupported or incorrect answers | Medium / High | Retrieve from selected files, show citations, test representative questions, state uncertainty, allow feedback |
| One user's private files become accessible to another | Low / Critical | Enforce ownership checks on every operation, use private storage, test authorization paths, minimize privileged access |
| Uploaded file is malicious, oversized, or unprocessable | Medium / High | Validate type and size, use safe processing libraries, isolate background jobs, set timeouts and clear failure states |
| Provider price or quota makes the demo unusable | Medium / Medium | Set usage limits and a spending ceiling, track usage, provide graceful quota errors, evaluate alternatives |
| Poor extraction from scanned or complex documents | Medium / Medium | Define supported document constraints, report extraction quality, consider OCR only if time and need justify it |
| External search results are misleading or stale | Medium / Medium | Show source links and dates where possible, label external evidence, avoid presenting snippets as full-page verification |
| Data retention or deletion is unclear | Medium / High | Define lifecycle and deletion behavior before implementation; review provider retention controls |
| Multi-agent design adds complexity without user value | Medium / Medium | Start with bounded capabilities and explicit routing; keep the orchestration simple and measurable |
| Insufficient student feedback for evaluation | Medium / Medium | Recruit a small review group early and prepare short task-based evaluation scenarios |

## Review cadence

Review risks at each project stage and whenever scope, provider choice, data handling, or deployment plans change. Add an owner and response date for any high-impact risk that becomes active.

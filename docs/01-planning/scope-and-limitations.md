# Learnova AI — Scope and Limitations

**Status:** Day 1 draft

## In scope

- Student registration, login, profile, and protected application areas.
- Private upload, listing, organization, deletion, and processing status for PDF, DOCX, PPTX, and TXT materials.
- Text extraction, cleaning, chunking, embeddings, retrieval, and document-grounded answers with references.
- AI-assisted explanation, summarization, quiz generation, answer feedback, and study planning.
- Optional external research with source links, clearly distinguished from course-file evidence.
- Conversation history, basic learning activity, and responsive dashboard/workspaces.
- Operational safeguards: input validation, authorization, error handling, usage limits, and deletion workflows.

## Proposed delivery boundary

Deliver one small vertical slice first: authenticated user → private upload → successful processing → grounded answer with references. Add other capabilities in increments. The exact feature set for a semester/demo release depends on the deadline, available hours, and budget.

## Limitations

- Generated responses can be inaccurate, incomplete, or misinterpret retrieved passages.
- OCR and extraction quality vary for scanned, malformed, password-protected, or highly formatted files.
- Search results and snippets may be incomplete or change over time.
- Model, embedding, storage, and search services introduce cost, quotas, latency, and vendor dependency.
- The quality of study plans and answer marking depends on user-provided constraints and the generated rubric/model.
- A student-built prototype cannot promise institutional-scale uptime, compliance certification, or comprehensive subject coverage.
- The project has no confirmed deadline, pilot group, budget, or usage limits yet.

## Boundaries and safeguards

- Do not claim the system is a source of official academic advice or authoritative grading.
- Keep document-grounded responses distinct from external research.
- Show source passages where available and state when retrieval does not provide evidence.
- Restrict document access to the owning account and define deletion behavior before implementation.
- Avoid using student uploads to train third-party models unless explicit, informed approval and provider terms permit it.

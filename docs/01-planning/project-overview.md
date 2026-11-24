# Learnova AI — Project Overview

**Tagline:** Your Personal AI Learning Team  
**Project type:** Academic multi-agent learning platform  
**Planning status:** Day 1 draft — needs project-owner review  
**Version:** 0.1

## Project background

University students work with lecture notes, textbooks, slides, and other course materials that can be difficult to search and turn into active study. General-purpose chat tools may not know what is in a student's course documents, while separate tools for summarizing, practice questions, research, and scheduling can fragment the study workflow.

Learnova AI is proposed as a single web platform that helps students work with their own course materials and carry out common study tasks. This is a project proposal; the need and usability should be checked with prospective students before implementation.

## Project overview

Learnova AI will let a student organize academic documents and use AI-assisted study tools. For questions grounded in uploaded files, a retrieval-augmented generation (RAG) workflow will find relevant passages and provide a response with document references. A supervisor component will route requests to focused capabilities: teaching/explanation, summarization, quiz generation, answer evaluation, study planning, and external research.

The initial product is intended as a portfolio and academic project, developed incrementally. The first release should demonstrate a reliable end-to-end path before attempting every advanced feature.

## Vision and value

**Vision:** Make a student's own course materials easier to understand, practice, and use in a consistent study routine.

**Expected value:**
- Ask questions against selected course documents and inspect supporting sources.
- Turn materials into summaries and practice questions.
- Receive explanations and feedback that support learning.
- Organize revision around subjects and examination dates.
- Distinguish answers grounded in course files from external web research.

## Intended users

The primary user is a university student studying courses with digital notes and documents. The initial product assumes an individual learner, rather than a university-wide learning management system. The specific country, institution, subjects, and accessibility needs remain to be confirmed.

## Proposed high-level outcomes

1. Students can securely register and maintain an account.
2. Students can upload, view, organize, and remove supported course files.
3. Students can ask questions grounded in their own files and see references.
4. Students can generate and use summaries, quizzes, answer feedback, study plans, and web research.
5. Students can revisit conversations and learning activity.

## Success measures for the first release

These are proposed measures to refine during requirements analysis:
- A new user can complete the core upload-to-grounded-answer flow without help.
- Answers based on documents include traceable source references, or clearly say when support was not found.
- A user's documents and conversations are never exposed to another account.
- Core flows work on desktop and mobile-sized screens.
- Processing failures and unsupported files are explained clearly.
- A small student review group can complete representative study tasks and give actionable feedback.

No numeric targets are committed until a pilot size and evaluation method are agreed.

## Key assumptions

- The first target is individual university students.
- English is the initial interface and response language.
- Uploaded files are user-provided study materials; sharing and institutional integrations are out of the first-release scope.
- The initial release is a demonstrator, not a replacement for instructors or formal assessment.
- Third-party AI, storage, search, and hosting services may be used after cost, privacy, and access constraints are evaluated.

## Planning decisions still open

- Which university context and student group should be used for user feedback?
- What is the academic deadline and how many hours per week are available?
- Should external web research be in the first usable release, or follow document-based learning?
- What file size and usage limits are acceptable for a student demonstrator?
- What budget, if any, is available for hosted services and model usage?

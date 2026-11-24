# Learnova AI — Aim and Objectives

**Status:** Day 1 draft

## Main aim

To design, build, and evaluate a secure web-based learning platform that helps university students understand and practice with their own academic materials using AI-assisted study workflows.

## Specific objectives

1. Identify student study needs and define a realistic first-release scope.
2. Provide account-based access to a student's documents and learning history.
3. Support upload and processing of PDF, DOCX, PPTX, and TXT files, with clear status and failure handling.
4. Implement retrieval-augmented question answering that returns relevant source references and communicates when evidence is insufficient.
5. Provide specialized study capabilities for explanations, summaries, quizzes, answer feedback, study plans, and external research.
6. Coordinate capabilities through a supervisor that routes requests and returns understandable results.
7. Design responsive, accessible interfaces for the main study workflows.
8. Evaluate usability, privacy boundaries, retrieval grounding, and core workflow reliability with representative scenarios.

## First-release priority

Prioritize the upload → process → ask a question → inspect source flow, then add a small, coherent selection of study aids. The full six-agent experience is a long-term target; each capability can begin as a bounded workflow, and should only be presented as a distinct agent when it provides a clear user benefit.

## Out of scope for the initial release

- Replacing instructors, official course materials, or formal grading.
- Learning management system integrations or institution-wide administration.
- Collaborative document editing or shared class repositories.
- Native mobile applications.
- Guaranteed correctness of AI-generated answers or web research.
- High-stakes academic decisions made automatically by the system.

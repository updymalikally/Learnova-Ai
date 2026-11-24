# Learnova AI

Learnova AI is a learning support app built with Next.js and React. It provides a study assistant interface and an early document upload workflow.

## Features

- Chat with Learnova, a study assistant powered by OpenRouter when an API key is configured.
- Submit PDF, TXT, DOCX, and PPTX files up to 15 MB to the document endpoint.
- Check service status through a health endpoint.
- Run locally with Next.js.

## Getting started

1. Install Node.js (20 or later recommended).
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a local environment file by copying `.env.example` to `.env.local`.
4. Add your OpenRouter key to `OPENROUTER_API_KEY` in `.env.local` to enable AI replies. Keep this key private and never add `.env.local` to Git.
5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Purpose |
| --- | --- |
| `OPENROUTER_API_KEY` | Optional server-side key used for AI chat replies. |
| `OPENROUTER_MODEL` | OpenRouter model name; defaults to `openai/gpt-4o-mini`. |
| `APP_URL` | Optional site URL sent as the OpenRouter referrer. |
| `SERPER_API_KEY` | Reserved for future search integration. |
| `DATABASE_URL` | Reserved for future database integration. |

## API routes

- `POST /api/chat` — accepts a JSON object with a `message` string (up to 4,000 characters).
- `GET /api/documents` — returns the current document list (currently empty).
- `POST /api/documents` — validates supported document types and size, then returns a queued response.
- `GET /api/health` — reports service status and whether the AI key is configured.

## Current limitations

Document uploads are validated but are not persisted or processed yet. Database, private file storage, and background processing still need to be connected. Without `OPENROUTER_API_KEY`, chat returns a setup message instead of contacting an AI provider.

## Available scripts

- `npm run dev` — start the development server.
- `npm run build` — create a production build.
- `npm start` — serve the production build.

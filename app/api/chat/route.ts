import { NextResponse } from "next/server";
export const runtime = "nodejs";
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const message = typeof body?.message === "string" ? body.message.trim() : "";
  if (!message || message.length > 4000) return NextResponse.json({ error: "Enter a message under 4,000 characters." }, { status: 400 });
  const key = process.env.OPENROUTER_API_KEY;
  if (!key) return NextResponse.json({ reply: "Your study team is ready to connect. Add an OPENROUTER_API_KEY in your local environment to enable AI responses. This demo does not send your question to an external service yet." });
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json", "HTTP-Referer": process.env.APP_URL || "http://localhost:3000", "X-Title": "Learnova AI" }, body: JSON.stringify({ model: process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini", messages: [{ role: "system", content: "You are Learnova, a supportive academic study assistant. Explain clearly, encourage learning, and never claim an answer comes from uploaded course files unless file context is provided." }, { role: "user", content: message }], temperature: 0.4, max_tokens: 700 }) });
    if (!response.ok) return NextResponse.json({ error: "The AI service could not complete that request. Please try again." }, { status: 502 });
    const data = await response.json(); const reply = data.choices?.[0]?.message?.content;
    return NextResponse.json({ reply: typeof reply === "string" ? reply : "I couldn't form a response. Please try again." });
  } catch { return NextResponse.json({ error: "The AI service is temporarily unavailable." }, { status: 502 }); }
}

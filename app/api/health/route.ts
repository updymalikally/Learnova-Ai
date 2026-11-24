import { NextResponse } from "next/server";
export async function GET() { return NextResponse.json({ status: "ok", service: "learnova-ai", aiConfigured: Boolean(process.env.OPENROUTER_API_KEY) }); }

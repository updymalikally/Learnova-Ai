import { NextResponse } from "next/server";
const allowed = new Set(["application/pdf", "text/plain", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation"]);
export async function GET() { return NextResponse.json({ documents: [], note: "Connect database and private file storage to persist uploaded documents." }); }
export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof File)) return NextResponse.json({ error: "Choose a document to upload." }, { status: 400 });
  const ext = file.name.split(".").pop()?.toLowerCase();
  const extOk = ["pdf", "txt", "docx", "pptx"].includes(ext || "");
  const mimeOk = allowed.has(file.type) || ((ext === "docx" || ext === "pptx") && file.type === "application/zip");
  if (!extOk || !mimeOk) return NextResponse.json({ error: "Only PDF, DOCX, PPTX, and TXT documents are supported." }, { status: 415 });
  if (file.size > 15 * 1024 * 1024) return NextResponse.json({ error: "File size must be 15 MB or less." }, { status: 413 });
  return NextResponse.json({ accepted: true, name: file.name, size: file.size, status: "queued", note: "Storage and background processing are not configured yet." }, { status: 202 });
}

import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Learnova AI — Your Personal AI Learning Team", description: "A focused workspace for learning from your own course materials." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }

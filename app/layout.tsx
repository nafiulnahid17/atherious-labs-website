import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atherious Labs — Intelligent Products & Digital Ventures",
  description:
    "Atherious Labs builds intelligent products across AI, legal technology, creative systems and digital ventures.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

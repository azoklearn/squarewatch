import type { Metadata, Viewport } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Watch Square — Luxury Watches, Curated With Precision",
  description:
    "Watch Square. A private house for the dealing, collection and documentation of exceptional timepieces. Authenticated. Documented. Curated."
};

export const viewport: Viewport = {
  themeColor: "#F4EFE6"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-ivory">
      <body className="bg-ivory text-ink antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

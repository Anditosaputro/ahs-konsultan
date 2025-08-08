import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Konsultasi Bisnis UMKM",
  description: "AHS Konsultan konsultasi bisnis UMKM terbaik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.className}>
      <body>
        {children}
      </body>
    </html>
  );
}

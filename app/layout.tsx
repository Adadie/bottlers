import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Arsenal Bottlerz™ | Official UCL Final Commemorative Water",
  description:
    "Premium hydration, bottled fresh from the Emirates. May 30, 2026 — a date that will live in infamy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#050505] text-[#f0ebe0]">
        {children}
      </body>
    </html>
  );
}

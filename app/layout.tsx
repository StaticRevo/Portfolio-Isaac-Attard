import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Isaac Attard | Software Developer",
  description:
    "Portfolio website for Isaac Attard, a software developer and junior technical consultant based in Malta.",
  keywords: [
    "Isaac Attard",
    "Software Developer",
    "Junior Technical Consultant",
    "Portfolio",
    "Malta",
    "Software Engineering",
  ],
  openGraph: {
    title: "Isaac Attard | Software Developer",
    description:
      "Portfolio website for Isaac Attard, highlighting software engineering, consulting, machine learning, and project work.",
    url: "https://example.com",
    siteName: "Isaac Attard Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Attard | Software Developer",
    description:
      "Portfolio website for Isaac Attard, a software developer and junior technical consultant based in Malta.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}

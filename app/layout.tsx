import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  title: "Ken Portfolio | Frontend Engineer",
  description:
    "Frontend web developer portfolio showcasing high-quality React, Next.js, and TypeScript projects with a focus on performance, accessibility, and polished UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          {/* Gradient background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
          >
            <div className="relative left-1/2 aspect-1108/632 w-289 -translate-x-1/2 bg-[radial-gradient(circle_at_top,var(--color-zinc-200),transparent_60%),radial-gradient(circle_at_bottom,var(--color-zinc-100),transparent_55%)] opacity-60 dark:opacity-40" />
          </div>

          {/* Main content */}
          <main className="mx-auto flex w-full max-w-337.5 flex-1 flex-col px-6 pb-10 pt-6 sm:px-8 sm:pb-12 sm:pt-8 lg:px-10 lg:pb-16 lg:pt-10">
            {children}
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}

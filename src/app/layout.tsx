import "./globals.css";

import { type Metadata } from "next";

import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { size } from "./opengraph-image";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.khaodoes.dev"),
  title: {
    template: "%s | Khao's Portfolio",
    default: "Khao's Portfolio",
  },
  description:
    "I am a software engineer. I love building random new things and messing with AI and ML.",
  openGraph: {
    title: "Khao's Portfolio",
    url: "https://www.khaodoes.dev",
    siteName: "Khao's Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `https://www.khaodoes.dev/opengraph-image`,
        ...size,
        alt: "Khao's Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    title: "Khao's Portfolio",
    card: "summary_large_image",
    creator: "@khaoisthebest",
  },
  icons: {
    shortcut: "https://www.khaodoes.dev/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-dvh bg-black antialiased max-w-4xl mx-auto",
          space_grotesk.className,
        )}
      >
        <div
          className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgb(255, 255, 255) 1px, transparent 1px), linear-gradient(90deg, rgb(255, 255, 255) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

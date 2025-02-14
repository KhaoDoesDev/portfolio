import "./globals.css";

import { type Metadata } from "next";

import { Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { SizeIndicator } from "@/components/size-indicator";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteURL } from "@/data";

const nunito = Nunito({
  subsets: ["latin"],
});


const siteName = "Khao's Portfolio";
const siteDescription = "I am a software engineer. I love building random new things and messing with AI and ML.";

export const metadata: Metadata = {
	metadataBase: new URL(siteURL),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteURL,
		title: siteName,
		description: siteDescription,
		images: [
			{
				url: `${siteURL}/og?title=${encodeURIComponent(siteName)}`,
				width: 1200,
				height: 630,
				alt: siteName,
			},
		],
	},
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          "min-h-dvh bg-background antialiased max-w-2xl mx-auto pt-16 sm:pt-24 px-6", 
          nunito.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <SizeIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import type { Viewport } from 'next'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


import localFont from "next/font/local";
import { Dancing_Script, Shalimar } from 'next/font/google'

import "./globals.css";

import { ThemeProvider } from "@/components/providers"
import { TailwindIndicator } from "@/components/tailwind-indicator"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing-script'
})
const shalimar = Shalimar({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-shalimar'
})

export const metadata: Metadata = {
  title: {
    default: "Aliensky Coin",
    template: "Aliensky Corp",
  },
  metadataBase: new URL("https://aliensky.id/"),
  description: "AlienSky - Beyond the Moon in the Meme-iverse",
  keywords: [
    "aliensky",
    "meme coin",
    "meme solana",
    "meme solana coin",
    "aliensky meme",
    "aliensky meme coin",
    "whale checker",
    "rugcheck",
    "rug checker"
  ],
  authors: [
    {
      name: "hardcore",
      url: "https://hardcore.biz.id",
    },
  ],
  creator: "hardcore.biz.id",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `https://aliensky.id/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth' style={{scrollBehavior:'smooth'}} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${shalimar.variable} antialiased`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
      >
          <div vaul-drawer-wrapper="">
              <div className="select-none relative flex min-h-screen flex-col bg-black font-normal text-neutral-600 dark:text-neutral-200">
                  {children}
              </div>
          </div>
          <TailwindIndicator />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

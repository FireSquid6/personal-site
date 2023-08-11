import { Oxygen as Font } from "next/font/google"

import { Header } from "@/components/header"

import "./globals.css"
import { cn } from "@/lib/utils"

const font = Font({ weight: "400", subsets: ["latin"] })

const title = "Next Dev Blog"
const description =
  "A Next.js markdown blog for developers using the new App Router."
export const metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL,
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    "Next.js",
    "JavaScript",
    "TypeScript",
    "React",
    "TailwindCSS",
    "contentlayer",
    "App Router",
  ],
  authors: [
    {
      name: "firesquid",
      url: "https://github.com/firesquid6",
    },
  ],
  creator: "firesquid6",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title,
    description,
    siteName: title,
  },
  icons: {
    icon: "/favicon.ico",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`bg-bg text-fg ${font.className}`}>
        <Header />
        <div>
          <main className="font-sans antialiased">{children}</main>
        </div>
      </body>
    </html>
  )
}

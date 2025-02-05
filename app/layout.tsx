import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Bondyt App Website</title>
        <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}

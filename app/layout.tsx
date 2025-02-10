import "./globals.css";
import { Inter } from "next/font/google";
import type React from "react";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bondyt App Website",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Bondyt - Find Love, Marriage, and Friendship</title>
        <meta
          name="description"
          content="Bondyt is the ultimate platform for finding love, building friendships, and forming meaningful connections. Join now to discover your soulmate or new best friend."
        />
        <meta
          name="keywords"
          content="bond, bondyt, bondit, bond it, dating app, soulmate, relationships, love, marriage, friendship, connection, community, matchmaking, trust, companionship, unity, bond building, social app"
        />
        <meta name="author" content="Bondyt Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Bondyt - Find Love and Friendship" />
        <meta
          property="og:description"
          content="Join the Bondyt community to connect with people seeking love, friendships, and meaningful relationships. A secure and fun platform to find your soulmate."
        />
        <meta property="og:image" content="/pinklogo.png" />
        <meta property="og:url" content="https://bondyt-app-website.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bondyt - Connect, Love, and Build Friendships"
        />
        <meta
          name="twitter:description"
          content="Discover a secure and vibrant community to find your soulmate, build friendships, and create lasting memories."
        />
        <meta name="twitter:image" content="/x.png" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Bondyt",
              url: "https://bondyt-app-website.vercel.app",
              description:
                "Bondyt is a community app for finding love, marriage, friendships, and meaningful connections.",
              sameAs: [
                "https://twitter.com/BondytApp",
                "https://www.facebook.com/BondytApp",
                "https://www.instagram.com/BondytApp",
              ],
            }),
          }}
        />
      </Head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
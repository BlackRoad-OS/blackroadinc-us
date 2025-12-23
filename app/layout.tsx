import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BlackRoad OS, Inc. | AI Infrastructure for Human Collaboration",
  description: "BlackRoad OS, Inc. is a Delaware C-Corporation developing transparent, accountable AI orchestration systems for human-AI collaboration.",
  openGraph: {
    title: "BlackRoad OS, Inc.",
    description: "Building the infrastructure for human-AI collaboration",
    url: "https://blackroadinc.us",
    siteName: "BlackRoad OS, Inc.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlackRoad OS, Inc.",
    description: "Building the infrastructure for human-AI collaboration",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

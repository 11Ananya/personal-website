import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/cursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ananya Dabas | AI/ML Engineer & Full-Stack Developer",
  description:
    "CS student at the University of Waterloo building LLM pipelines, cloud systems, and production apps. Builds fast, ships faster.",
  keywords: [
    "Ananya Dabas",
    "software engineer",
    "AI/ML",
    "full-stack developer",
    "University of Waterloo",
    "internship",
  ],
  authors: [{ name: "Ananya Dabas" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ananya Dabas | AI/ML Engineer & Full-Stack Developer",
    description:
      "CS student at the University of Waterloo building LLM pipelines, cloud systems, and tools that actually ship.",
    siteName: "Ananya Dabas Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ananya Dabas | AI/ML Engineer & Full-Stack Developer",
    description:
      "CS student at the University of Waterloo building LLM pipelines, cloud systems, and tools that actually ship.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shaurya Sharma | Web Developer & Front-End Developer",
  description:
    "Shaurya Sharma – Passionate Web Developer, Front-End Developer, and Tech Enthusiast. Building modern, responsive, and interactive websites for businesses, startups, and individuals.",
  keywords: [
    "Shaurya Sharma",
    "Web Developer",
    "Front-End Developer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "UI/UX Designer",
    "Freelance Developer India",
  ],
  authors: [{ name: "Shaurya Sharma" }],
  creator: "Shaurya Sharma",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shauryasharma.dev",
    title: "Shaurya Sharma | Web Developer & Front-End Developer",
    description:
      "Building modern, responsive, and interactive websites that deliver great user experiences.",
    siteName: "Shaurya Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaurya Sharma | Web Developer",
    description: "Building premium digital experiences for businesses and individuals.",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <CustomCursor />
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

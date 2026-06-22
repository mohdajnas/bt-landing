import type { Metadata } from "next";
import { Manrope, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Boehm Tech | AI, Autonomous Systems & Enterprise Software",
  description: "Boehmtech is a deep technology company building intelligent, autonomous AI systems, enterprise software, and scalable digital solutions to transform modern operations.",
  keywords: ["AI solutions", "Autonomous Systems", "Enterprise Software", "Business Automation", "Deep Technology", "Boehmtech", "Digital Transformation", "Healthcare Technology", "E-Commerce", "Digital Agency"],
  authors: [{ name: "Boehmtech" }],
  creator: "Boehmtech",
  publisher: "Boehmtech",
  metadataBase: new URL("https://boehmtech.co"),
  openGraph: {
    title: "Boehm Tech | AI, Autonomous Systems & Enterprise Software",
    description: "Boehmtech builds intelligent, autonomous AI systems and scalable enterprise solutions to transform how organizations operate.",
    url: "https://boehmtech.co",
    siteName: "Boehmtech",
    images: [
      {
        url: "/assets/earth-space.png",
        width: 1200,
        height: 630,
        alt: "Boehmtech - AI & Autonomous Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boehm Tech | AI & Autonomous Systems",
    description: "Transform your operations with intelligent, autonomous systems and enterprise software from Boehmtech.",
    creator: "@boehmtechai",
    images: ["/assets/earth-space.png"],
  },
  alternates: {
    canonical: "https://boehmtech.co",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
      className={`${manrope.variable} ${jetbrainsMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900">{children}</body>
    </html>
  );
}

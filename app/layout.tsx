import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "StartupHQ — Startup Compliance Advisory for African Founders",
    template: "%s | StartupHQ",
  },
  description:
    "StartupHQ helps African founders launch with confidence, stay compliant, and scale sustainably. Legal compliance advisory built for startups.",
  metadataBase: new URL("https://startuphqconsult.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "StartupHQ",
    title: "StartupHQ — Startup Compliance Advisory for African Founders",
    description:
      "Legal compliance advisory built for African startups. Launch with confidence, stay compliant, and scale sustainably.",
  },
  twitter: {
    card: "summary_large_image",
    title: "StartupHQ — Startup Compliance Advisory for African Founders",
    description:
      "Legal compliance advisory built for African startups. Launch with confidence, stay compliant, and scale sustainably.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

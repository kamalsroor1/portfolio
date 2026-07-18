import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kamal Salah Sroor — Senior Full-Stack & Backend Engineer",
  description: "Senior Full-Stack & Backend Engineer based in Cairo, Egypt. Over 6 years of experience building scalable SaaS architectures, PostgreSQL database optimization, and Python FastAPI integrations.",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/icon-192.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kamalsroor.dev",
    title: "Kamal Salah Sroor — Senior Full-Stack & Backend Engineer",
    description: "Senior Full-Stack & Backend Engineer portfolio website. Explore database migration case studies, SaaS architecture, and Python backends.",
    siteName: "Kamal Salah Sroor Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamal Salah Sroor — Senior Full-Stack & Backend Engineer",
    description: "Senior Full-Stack & Backend Engineer portfolio website. Explore database migration case studies, SaaS architecture, and Python backends.",
  }
};

export const viewport: Viewport = {
  themeColor: "#7c3aed",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

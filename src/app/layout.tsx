import Footer from "@/components/layout/footer";
import type { Metadata, Viewport } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  weight: ["300", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  "https://ping-single-column-coming-soon-page.abdelrhman-ahmed8881.workers.dev";

const title = "Ping | Launching soon";
const description =
  "Ping is launching soon. Subscribe with your email address and we will notify you the moment it goes live.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Ping, launching soon, beside a preview of its dashboard.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Ping",
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "hsl(0, 0%, 100%)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreFranklin.variable} antialiased`}>
      <body className="flex min-h-dvh w-full flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}

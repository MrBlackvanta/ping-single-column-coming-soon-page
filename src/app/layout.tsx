import { Footer } from "@/components/layout/footer";
import type { Metadata, Viewport } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  weight: ["300", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ping single column coming soon page",
  description:
    "Frontend Mentor Ping single column coming soon page challenge built with Next.js and TypeScript.",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [{ color: "hsl(0, 0%, 100%)" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreFranklin.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh w-full flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}

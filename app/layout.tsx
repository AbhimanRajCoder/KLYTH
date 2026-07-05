import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";
import { Toaster } from "sonner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Klyth | Financial Growth, Rewired.",
  description: "Empowering a generation to grow financially with confidence. No boring lectures, no financial anxiety—just intuitive systems, daily habits, and a community that moves forward together.",
  verification: {
    google: "jiyUqznHz3a2n--taWZ24D85kfYG7DT3_rbhkjhrDAM",
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
      className={`${playfair.variable} ${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="bg-klyth-charcoal text-klyth-cream selection:bg-klyth-olive/30 flex flex-col font-sans overflow-x-hidden min-h-screen w-full">
        <AppShell>{children}</AppShell>
        <Toaster richColors position="bottom-center" />
      </body>
    </html>
  );
}

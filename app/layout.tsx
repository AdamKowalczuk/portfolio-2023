import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/layouts/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adam Kowalczuk - Frontend Developer",
  description: "Portfolio frontend developera specjalizującego się w React i Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="dark">
      <body
        className={`${inter.className} bg-background text-foreground min-h-screen antialiased`}
        suppressHydrationWarning
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

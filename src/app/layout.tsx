import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kanta Numa | Portfolio",
  description: "Portfolio of Kanta Numa - BtoB Business Growth Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}

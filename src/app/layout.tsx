import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Hitesh Malhotra | Product Manager",
  description: "Portfolio and case studies from Hitesh Malhotra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground min-h-screen flex flex-col font-sans`}
      >
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          {children}
        </main>
        <footer className="border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Hitesh Malhotra. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

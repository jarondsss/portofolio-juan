import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PersonaProvider } from "@/context/PersonaContext";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Juan A. Ronaldi — Deep Terminal",
  description: "engineer. builds things that ship. debugs at 2am by choice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <PersonaProvider>{children}</PersonaProvider>
      </body>
    </html>
  );
}

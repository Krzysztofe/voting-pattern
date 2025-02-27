import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";

import "./globals.css";
import Wrapper from "@/components/wrapper";

const inter = Inter({ subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Głosowanie",
  description: "Aplikacja do głosowania",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${inter.className} ${geistMono.variable} bg-bacground text-textColor min-h-screen`}
      >
        <main>
          <Wrapper>{children}</Wrapper>
        </main>
      </body>
    </html>
  );
}

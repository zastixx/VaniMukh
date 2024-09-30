import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PrelineScript } from "./components/PrelineScript";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "VaniMukh",
  description: "VaniMukh: AI-powered platform bridging seamless conversations Developed by Tarun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <PrelineScript />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatWidgetLoader from "./ChatWidgetLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "iDrive | Premium Used Cars | SW Florida",
    template: "%s | iDrive",
  },
  description: "Premium pre-owned vehicles in Southwest Florida. Quality inspected cars, SUVs, and trucks. Browse inventory, book appointments, and find your next vehicle at iDrive.",
  openGraph: {
    title: "iDrive | Premium Used Cars | SW Florida",
    description: "Premium pre-owned vehicles in Southwest Florida. Quality inspected cars, SUVs, and trucks.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ChatWidgetLoader />
      </body>
    </html>
  );
}

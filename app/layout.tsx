import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueMontreal = localFont({
  src: [
    {
      path: "./fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
});

const inputMono = localFont({
  src: "./fonts/InputMono-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-input-mono",
});

export const metadata: Metadata = {
  title: "Subtext",
  description: "Merchant risk intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${neueMontreal.variable} ${inputMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

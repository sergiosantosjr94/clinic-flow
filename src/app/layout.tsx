import "./globals.css";

import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClinicFlow",
  description:
    "A powerful, all-in-one SaaS platform designed specifically for medical clinics to streamline operations, improve patient care, and boost profitability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import "@/styles/globals.css";

import { type Metadata } from "next";
import { Hanken_Grotesk, Instrument_Sans } from "next/font/google";
import { TRPCReactProvider } from "@/trpc/react";
import Navbar from "@/components/navigation/navbar";
import React from "react";

export const metadata: Metadata = {
  title: "Shubham S Padhi | Developer and Creative Designer",
  description:
    "Full-stack developer and UI/UX designer focused on building fast, responsive and user-friendly web applications.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hk",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${instrument.variable} ${hanken.variable}`}>
      <body className="font-title">
        <Navbar />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}

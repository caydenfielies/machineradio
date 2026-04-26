import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import SmoothScroll from "@/components/smooth-scroll";
import Preloader from "@/components/preloader";

const editorialNew = localFont({
  src: [
    {
      path: "../public/Fonts/PPEditorialNew-Ultralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/Fonts/PPEditorialNew-UltralightItalic.otf",
      weight: "200",
      style: "italic",
    },
  ],
  variable: "--font-editorial-new",
});

const ppNeueYork = localFont({
  src: [
    {
      path: "../public/Fonts/PPNeueYork-CondensedLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/Fonts/PPNeueYork-CondensedMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Fonts/PPNeueYork-CondensedExtrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-pp-neue-york",
});

const optiAltoGreeting = localFont({
  src: [
    {
      path: "../public/Fonts/OPTIAltoGreeting Script.otf",
      style: "normal",
    },
  ],
  variable: "--font-optiAlto",
});

const ftCalhern = localFont({
  src: [
    {
      path: "../public/Fonts/FTCalhernTrial-WideUltralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/Fonts/FTCalhernTrial-WideBook.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ft-calhern",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Lotus",
  description: "Project Lotus by Lee.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${optiAltoGreeting.variable} ${editorialNew.variable} ${ppNeueYork.variable} ${ftCalhern.variable} h-full antialiased preloading`}
    >
      <body className="min-h-full flex flex-col">
        <Preloader />
        <Header />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

"use client"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Analytics } from "@vercel/analytics/react";
import NewNavbar from "./components/NewNavBar";
import NewFooter from "./components/NewFooter";
import { usePathname } from "next/navigation";
import NavBarNormal from "./components/NavBarNormal";


const notoSans = localFont({
  src: "./fonts/NotoSansThai.ttf",
  variable: "--font-noto-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const header = pathName === "/" ? <NewNavbar /> : <NavBarNormal />;
  return (
    <html lang="en">
      <title>ระแนงบังตา – Iconroof</title>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO รุ่นระแนงชิด รุ่นระแนงเว้นร่อง รุ่นระแนงบานเกล็ด โดยไอคอนรูฟ" />
      <meta name="keywords" content="ระแนงบังตา, ระแนงบังตาไวนิล, ระแนงบังตาไวนิล AMIGO, ระแนงชิด, ระแนงเว้นร่อง, ระแนงบานเกล็ด" />
      <meta name="author" content="Iconroof" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="notranslate" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="ระแนงบังตา – Iconroof" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/favicon.ico" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@iconroof" />
      <meta name="twitter:creator" content="@iconroof" />
      <meta name="twitter:title" content="ระแนงบังตา – Iconroof" />
      <meta name="twitter:description" content="บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO รุ่นระแนงชิด รุ่นระแนงเว้นร่อง รุ่นระแนงบานเกล็ด โดยไอคอนรูฟ" />
      <meta name="twitter:image" content="https://iconroof.co.th/asset/OG1.png" />
      <meta name="twitter:image:alt" content="iconroof ระแนง" />
      <meta property="og:site_name" content="Iconroof" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://iconroof.co.th/asset/OG1.png" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:alt" content="iconroof ระแนง" />
      <meta property="og:locale" content="th_TH" />
      <meta property="og:locale:alternate" content="en_US" />      
      <meta property="og:title" content="ระแนงบังตา – Iconroof" />
      <meta property="og:description" content="บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO รุ่นระแนงชิด รุ่นระแนงเว้นร่อง รุ่นระแนงบานเกล็ด โดยไอคอนรูฟ" />
      <meta property="og:type" content="website" />      
      <meta property="og:url" content="https://iconroof.co.th/" />
      <body
        className={`${notoSans.variable} antialiased`}>   
        {header}          
        {children}
        <Analytics />
        <NewFooter />
      </body>
    </html>
  );
}

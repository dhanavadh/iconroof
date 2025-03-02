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
      <meta property="og:title" content="ระแนงบังตา – Iconroof" />
      <meta property="og:description" content="บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO รุ่นระแนงชิด รุ่นระแนงเว้นร่อง รุ่นระแนงบานเกล็ด โดยไอคอนรูฟ" />
      <meta property="og:type" content="website" />      
      <meta property="og:url" content="https://xn--72ca6bng5c5ell7l.com/" />
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

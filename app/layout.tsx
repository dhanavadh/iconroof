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

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  title: 'ระแนงบังตา – Iconroof',
  description: 'บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ',
  openGraph: {
    title: 'ระแนงบังตา – Iconroof',
    description: 'บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ',
    url: 'https://iconroof.co.th/',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://iconroof.co.th/asset/amigo.png', // Must be an absolute URL
        width: 800,
        height: 600,
        alt: 'iconroof ระแนง',
      },
      {
        url: 'https://iconroof.co.th/asset/amigo.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'iconroof ระแนง',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const header = pathName === "/" ? <NewNavbar /> : <NavBarNormal />;
  return (
    <html lang="en">
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

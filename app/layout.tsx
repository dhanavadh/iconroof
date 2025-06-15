"use client"
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import NewNavbar from "./components/NewNavBar";
import NewFooter from "./components/NewFooter";
import { usePathname } from "next/navigation";
import NavBarNormal from "./components/NavBarNormal";
import JuneAds from "./components/Ads/JuneAds";
import CookieAlert from "./components/CookieAlert";


const notoSans = localFont({
  src: "./fonts/NotoSansThai.ttf",
  variable: "--font-noto-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});

const SarabunRegular = localFont({
  src: "./fonts/Sarabun-Regular.ttf",
  variable: "--font-sarabun-regular",
  weight: "400",
});
const SarabunMedium = localFont({
  src: "./fonts/Sarabun-Medium.ttf",
  variable: "--font-sarabun-medium",
  weight: "500",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const header = ["/products", "/redirect", '/products/amigo'].includes(pathName) ? <NewNavbar /> : <NewNavbar />;
  return (
    <html lang="en">      
      <body
        className={`${notoSans.variable} ${SarabunRegular.variable} ${SarabunMedium.variable} antialiased`}>  
        {header}          
        {children}
        <JuneAds />
        <CookieAlert />
        <Analytics />
        <NewFooter />
      </body>
    </html>
  );
}

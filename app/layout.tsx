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
      <title>จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof</title>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ ขายปลีก-ส่ง ราคาโรงงาน ทันสมัย แข็งแรง สวยงาม ระแนงบังตาไวนิล รับประกัน 10 ปี อบสีด้วย พาวเดอร์ โค้ท ตั้งแต่ 08.00-17.30 น. เปิดบริการวันจันทร์-เสาร์ บริการ: รับติดตั้งระแนงไวนิล, เปิดบริการ จันทร์-ศุกร์, ตั้งแต่ 08.00-17.30 น." />
      <meta name="keywords" content="ระแนงบังตา, ระแนงบังตาไวนิล, ระแนงบังตาไวนิล AMIGO, ระแนงชิด, ระแนงเว้นร่อง, ระแนงบานเกล็ด, ระแนงบังแดด, ระแนงตกแต่งบ้าน, ระแนงระเบียง, ระแนงกันแดด, ระแนงบังสายตา, ระแนงหน้าบ้าน, ระแนงข้างบ้าน, ระแนงแต่งบ้าน, ระแนงแต่งสวน, ไวนิลบังตา, แผ่นไวนิล, ไวนิลตกแต่ง, ไวนิลภายนอก, ไวนิลภายใน, วัสดุตกแต่งบ้าน, วัสดุก่อสร้าง, หลังคาไวนิล, หลังคาไวนิล AMIGO, ไวนิลคุณภาพสูง, ไวนิลราคาถูก, วัสดุตกแต่งภายนอก, แผ่นไวนิลทนแดด, แผ่นไวนิลทนน้ำ, ไวนิลตกแต่งผนัง, ผนังไวนิล, ไวนิลตกแต่งภายนอก, ติดตั้งระแนง, ช่างติดตั้งระแนง, ระแนงสำเร็จรูป, ผลิตภัณฑ์ไวนิล, ไวนิลกันน้ำ, ไวนิลกันปลวก, วัสดุกันความร้อน, ไวนิลทนฝน, วัสดุก่อสร้างบ้าน, สร้างบ้าน, รีโนเวทบ้าน, บ้านสวยด้วยไวนิล, ไอคอนรูฟ, Iconroof, Amigo, ไวนิล Amigo, ระแนง, ระ แนง, ระแน ง, บังตา, ฝ้า, ไอคอนรุฟ, ไอคอนรูฟ" />
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
      <meta name="twitter:title" content="จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof" />
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
      <meta property="og:title" content="จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof" />
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

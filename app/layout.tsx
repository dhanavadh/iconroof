import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";

const notoSans = localFont({
  src: "./fonts/NotoSansThai.ttf",
  variable: "--font-noto-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ระแนงบังตา – Iconroof",
  description: "บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO รุ่นระแนงชิด รุ่นระแนงเว้นร่อง รุ่นระแนงบานเกล็ด โดยไอคอนรูฟ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${geistMono.variable} antialiased`}
      >        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

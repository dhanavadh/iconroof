import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["latin", "thai"],
  variable: "--font-ibm-plex-sans-thai",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

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

export const metadata: Metadata = {
  metadataBase: new URL("https://iconroof.co.th"),
  title: {
    template: "%s | Iconroof",
    default: "จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof",
  },
  description: "จำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ ขายปลีก-ส่ง ราคาโรงงาน ทันสมัย แข็งแรง สวยงาม รับประกัน 10 ปี",
  keywords: [
    "amigo", "ระแนงบังตา", "ระแนงบังตาไวนิล", "ระแนงบังตาไวนิล AMIGO", "upvc", "Amigo",
    "scg ระแนงชิด", "ระแนงเว้นร่อง", "ระแนงบานเกล็ด", "ระแนงบังแดด", "ระแนงตกแต่งบ้าน",
    "ไอคอนรูฟ", "Iconroof", "ไวนิล Amigo"
  ],
  openGraph: {
    title: "จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof",
    description: "บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ",
    url: "https://iconroof.co.th/",
    siteName: "Iconroof",
    images: [
      {
        url: "https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/asset/og-img.jpg",
        width: 1200,
        height: 630,
        alt: "iconroof ระแนง",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-NS8K6LDN" />
      <GoogleAnalytics gaId="G-SED22GYP0X" />
      <body
        className={`${ibmPlexSansThai.variable} ${notoSans.variable} ${SarabunRegular.variable} ${SarabunMedium.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

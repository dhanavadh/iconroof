import Details from "./pages/Details";
import Products from "./components/Products";
import MainPage from "./pages/Main";
import Instal1 from "./components/installation";
import Slider from "./components/Slider";
import Alert from "./components/Alert";
import Link from "next/link";
import ProductsList from "./components/ProductList";
import InstallationList from "./components/Install";
import Head from "next/head";
import Image from "next/image";
import AmigoCompare from "./components/Amigo/AmigoCompare";
import { Metadata } from 'next'
import YouTubeList from "./components/YouTube";

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  title: 'จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof',
  description: 'รจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ ขายปลีก-ส่ง ราคาโรงงาน ทันสมัย แข็งแรง สวยงาม ระแนงบังตาไวนิล รับประกัน 10 ปี อบสีด้วย พาวเดอร์ โค้ท ตั้งแต่ 08.00-17.30 น. เปิดบริการวันจันทร์-เสาร์ บริการ: รับติดตั้งระแนงไวนิล, เปิดบริการ จันทร์-ศุกร์, ตั้งแต่ 08.00-17.30 น.',
  keywords: [
  "amigo", "ระแนงบังตา", "ระแนงบังตาไวนิล", "ระแนงบังตาไวนิล AMIGO", "upvc", "Amigo",
  "scg ระแนงชิด", "ระแนงเว้นร่อง", "ระแนงบานเกล็ด", "ระแนงบังแดด", "ระแนงตกแต่งบ้าน",
  "ระแนงระเบียง", "ระแนงกันแดด", "ระแนงบังสายตา", "ระแนงหน้าบ้าน", "ระแนงข้างบ้าน",
  "ระแนงแต่งบ้าน", "ระแนงแต่งสวน", "ไวนิลบังตา", "แผ่นไวนิล", "ไวนิลตกแต่ง", "ไวนิลภายนอก",
  "ไวนิลภายใน", "วัสดุตกแต่งบ้าน", "วัสดุก่อสร้าง", "หลังคาไวนิล", "หลังคาไวนิล AMIGO",
  "ไวนิลคุณภาพสูง", "ไวนิลราคาถูก", "วัสดุตกแต่งภายนอก", "แผ่นไวนิลทนแดด", "แผ่นไวนิลทนน้ำ",
  "ไวนิลตกแต่งผนัง", "ผนังไวนิล", "ไวนิลตกแต่งภายนอก", "ติดตั้งระแนง", "ช่างติดตั้งระแนง",
  "ระแนงสำเร็จรูป", "ผลิตภัณฑ์ไวนิล", "ไวนิลกันน้ำ", "ไวนิลกันปลวก", "วัสดุกันความร้อน",
  "ไวนิลทนฝน", "วัสดุก่อสร้างบ้าน", "สร้างบ้าน", "รีโนเวทบ้าน", "บ้านสวยด้วยไวนิล",
  "ไอคอนรูฟ", "Iconroof", "ไวนิล Amigo", "ระแนง", "ระ แนง", "ระแน ง", "บังตา", "ฝ้า",
  "ไอคอนรุฟ"
],
  openGraph: {
    title: 'จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof',
    description: 'บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ ขายปลีก-ส่ง ราคาโรงงาน ทันสมัย แข็งแรง สวยงาม ระแนงบังตาไวนิล รับประกัน 10 ปี อบสีด้วย พาวเดอร์ โค้ท ตั้งแต่ 08.00-17.30 น. เปิดบริการวันจันทร์-เสาร์ บริการ: รับติดตั้งระแนงไวนิล, เปิดบริการ จันทร์-ศุกร์, ตั้งแต่ 08.00-17.30 น.',
    url: 'https://iconroof.co.th/',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/asset/og-img.jpg', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'iconroof ระแนง',
      },
      {
        url: 'https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/asset/og-img.jpg', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'iconroof ระแนง',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
}

export default function Home() {
  return (
    
    <>
    <Head>
        <title>จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof</title>
    </Head>
    <Slider />
    <div className="flex flex-col min-h-screen items-start ml-6 md:ml-20 mr-6 md:mr-20 font-[family-name:var(--font-noto-sans)]">      
      <div className="flex flex-col items-start pt-8 ">
        <p className="h1">เลือกดูผลิตภัณฑ์ระแนง</p>
        <p className="p">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>        
      </div>       
      <ProductsList /> 
      <div className="flex flex-col items-start pt-4 pb-4">
        <p className="h1">เปรียบเทียบคุณสมบัติระแนง</p>
        <p className="p">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>          
      </div> 
      <div className="w-full overflow-x-auto">
        <AmigoCompare />
      </div>

      

      <div className="flex flex-col items-start pt-4 ">
        <p className="h1">งานติดตั้งระแนง</p>
        <p className="p">ขั้นตอนการติดตั้งระแนงจากช่างทำระแนง Iconroof</p>        
      </div> 
      <InstallationList />
      
      <div className="flex flex-col items-start pt-4 ">
        <p className="h1">ผลงานการติดตั้งโดยช่างโอ</p>
        <p className="p">ตัวอย่างงานติดตั้งระแนงจากช่างทำระแนง Iconroof</p>        
      </div> 
      <YouTubeList />
    </div>
    
    </>
  );
}

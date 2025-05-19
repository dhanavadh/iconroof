import AmigoA60Product from "@/app/components/Amigo/AmigoA60";
import Link from "next/link";
import Image from "next/image";
import AmigoGallerry from "@/app/components/Amigo/AmigoGallerry";
import AmigoCompare from "@/app/components/Amigo/AmigoCompare";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  title: 'Amigo ระแนงบังตา – ระแนงบังตาไวนิล (upvc Amigo, SCG) - ไอคอนรูฟ',
  description: 'บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล ระแนงบังตาไวนิล (upvc Amigo, SCG) ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ ขายปลีก-ส่ง ราคาโรงงาน ทันสมัย แข็งแรง สวยงาม ระแนงบังตาไวนิล รับประกัน 10 ปี อบสีด้วย พาวเดอร์ โค้ท ตั้งแต่ 08.00-17.30 น. เปิดบริการวันจันทร์-เสาร์ บริการ: รับติดตั้งระแนงไวนิล, เปิดบริการ จันทร์-ศุกร์, ตั้งแต่ 08.00-17.30 น.',
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
    title: 'Amigo ระแนงบังตา – ระแนงบังตาไวนิล (upvc Amigo, SCG) - ไอคอนรูฟ',
    description: 'บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ ขายปลีก-ส่ง ราคาโรงงาน ทันสมัย แข็งแรง สวยงาม ระแนงบังตาไวนิล รับประกัน 10 ปี อบสีด้วย พาวเดอร์ โค้ท ตั้งแต่ 08.00-17.30 น. เปิดบริการวันจันทร์-เสาร์ บริการ: รับติดตั้งระแนงไวนิล, เปิดบริการ จันทร์-ศุกร์, ตั้งแต่ 08.00-17.30 น.',
    url: 'https://iconroof.co.th/products/amigo',
    siteName: 'Amigo ระแนงบังตา – จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof',
    images: [
      {
        url: 'https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/asset/og-img.jpg', // Must be an absolute URL
        width: 630,
        height: 1200,
        alt: 'iconroof ระแนง',
      },
      {
        url: 'https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/asset/og-img.jpg', // Must be an absolute URL
        width: 630,
        height: 1200,
        alt: 'iconroof ระแนง',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
}

export default function AmigoPage() {
    
  return (
    <div className="flex flex-col min-h-screen items-start mx-6 md:mx-20 font-[family-name:var(--font-noto-sans)]">
      <div className='pb-4 mt-12 border-b-2 border-neutral-200 w-full' id='amigo'>
        <div className="flex flex-col items-center pt-6 lg:pt-12 mb-4">
          <p className="h1">ระแนงไวนิล AMIGO</p>
          <p className="p text-center">หมดปัญหาเรื่องปลวกและเชื้อรา ไม่ปิดตัว ไม่บวมน้ำ ทนต่อแสงแดด มีอายุการใช้งานที่ยาวนาน</p>        
          <Link href='https://line.me/ti/p/@plk2013' target='_blank' className='mt-4 px-4 py-2 rounded-full border-2 border-neutral-800 bg-neutral-800 text-white font-medium hover:bg-neutral-600 hover:border-neutral-600 cursor-pointer transition-colors duration-300 mb-4 lg:mb-0'>สั่งซื้อสินค้า</Link>                            
        </div>     

        <AmigoGallerry />
        <div className="flex flex-col items-start pt-4 pb-4">
            <p className="h1">เปรียบเทียบคุณสมบัติระแนง</p>
            <p className="p">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>          
        </div> 
        <AmigoCompare />

        <div className="flex flex-col items-start pt-4">
          <p className="h1">ระแนงไวนิล A60 , A40</p>
          <p className="p">Iconroof จัดจำหน้าย ระแนงไวนิล A60 , A40</p>        
        </div>   
        <AmigoA60Product />
      </div>     
    </div>
  );
}
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
  const header = ["/products", "/redirect", '/products/amigo'].includes(pathName) ? <NavBarNormal /> : <NewNavbar />;
  return (
    <html lang="en">
      {/* <title>จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof</title>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ ขายปลีก-ส่ง ราคาโรงงาน ทันสมัย แข็งแรง สวยงาม ระแนงบังตาไวนิล รับประกัน 10 ปี อบสีด้วย พาวเดอร์ โค้ท ตั้งแต่ 08.00-17.30 น. เปิดบริการวันจันทร์-เสาร์ บริการ: รับติดตั้งระแนงไวนิล, เปิดบริการ จันทร์-ศุกร์, ตั้งแต่ 08.00-17.30 น." />
      <meta name="keywords" content="ระแนงบังตา, ระแนงบังตาไวนิล, ระแนงบังตาไวนิล AMIGO, ระแนงชิด, ระแนงเว้นร่อง, ระแนงบานเกล็ด, ระแนงบังแดด, ระแนงตกแต่งบ้าน, ระแนงระเบียง, ระแนงกันแดด, ระแนงบังสายตา, ระแนงหน้าบ้าน, ระแนงข้างบ้าน, ระแนงแต่งบ้าน, ระแนงแต่งสวน, ไวนิลบังตา, แผ่นไวนิล, ไวนิลตกแต่ง, ไวนิลภายนอก, ไวนิลภายใน, วัสดุตกแต่งบ้าน, วัสดุก่อสร้าง, หลังคาไวนิล, หลังคาไวนิล AMIGO, ไวนิลคุณภาพสูง, ไวนิลราคาถูก, วัสดุตกแต่งภายนอก, แผ่นไวนิลทนแดด, แผ่นไวนิลทนน้ำ, ไวนิลตกแต่งผนัง, ผนังไวนิล, ไวนิลตกแต่งภายนอก, ติดตั้งระแนง, ช่างติดตั้งระแนง, ระแนงสำเร็จรูป, ผลิตภัณฑ์ไวนิล, ไวนิลกันน้ำ, ไวนิลกันปลวก, วัสดุกันความร้อน, ไวนิลทนฝน, วัสดุก่อสร้างบ้าน, สร้างบ้าน, รีโนเวทบ้าน, บ้านสวยด้วยไวนิล, ไอคอนรูฟ, Iconroof, Amigo, ไวนิล Amigo, ระแนง, ระ แนง, ระแน ง, บังตา, ฝ้า, ไอคอนรุฟ, ไอคอนรูฟ, ไม้ ระแนง เฌอ ร่า,ไม้ ระแนง,ระแนง บังตา,ระแนง ไว นิล upvc ราคา,ระแนง บังตา สํา เร็ จ รูป โฮม โปร,ไม้ ระแนง เทียม,ระแนง อ ลู มิ เนียม,รั้ว ไม้ ระแนง สํา เร็ จ รูป โฮม โปร,ราคา ไม้ ระแนง เฌอ ร่า,ไม้ ระแนง wpc ไท วัสดุ,ระแนง ไม้ เทียม ภายนอก,ระแนง กันแดด,ระแนง บังตา ข้าง บ้าน,ระแนง ปรับ ได้,ระแนง เม ทั ล ชีท,ระแนง ไม้ เทียม,ระแนง ไว นิล,รั้ว ระแนง สํา เร็ จ รูป,ไม้ ระแนง ตกแต่ง ผนัง,ขนาด ไม้ ระแนง,ระแนง กันแดด สวย ๆ,ระแนง บัง แดด,รั้ว ระแนง เม ทั ล ชีท,แบบ ระแนง หน้า บ้าน สวย ๆ,ไม้ ระแนง สํา เร็ จ รูป ขนาด 3 นิ้ว ยาว 3 เมตร ราคา,ไม้ ระแนง เฌอ ร่า 3 นิ้ว ราคา,ระแนง บัง แดด ข้าง บ้าน,ระแนง บัง แดด ทิศ ตะวันตก,ระแนง บัง แดด บัง ฝน,ระแนง ปรับ ได้ ราคา,ระแนง ไม้ เทียม ภายนอก ไท วัสดุ,ระแนง ไว นิล scg ราคา,รั้ว ระแนง,แบบ รั้ว ไม้ ระแนง สวย ๆ,ไม้ ระแนง สํา เร็ จ รูป ขนาด 3 นิ้ว ยาว 3 เมตร,ไม้ ระแนง สํา เร็ จ รูป โฮม โปร,ไม้ ระแนง เทียม ภายนอก,ไม้ ระแนง เทียม ไท วัสดุ,การ ติด ตั้ง ไม้ ระแนง เทียม,ระแนง กัน ฝน ข้าง บ้าน,ระแนง บังตา สํา เร็ จ รูป,ระแนง บานเกล็ด ปรับ ได้,ระแนง อ ลู มิ เนียม ลายไม้,ระแนง เม ทั ล ชีท ลายไม้ ราคา,ระแนง ไว นิล scg,รั้ว ระแนง บังตา,รั้ว ไม้ ระแนง,ราคา ไม้ ระแนง เทียม,อุปกรณ์ ระแนง ปรับ ได้,แบบ ระแนง กันแดด หน้า บ้าน,ไม้ ระแนง 2 นิ้ว ราคา,ไม้ ระแนง 3 นิ้ว ราคา ไท วัสดุ,ไม้ ระแนง ฝ้า เพดาน scg,ไม้ ระแนง เฌอ ร่า 3 นิ้ว ไท วัสดุ,การ ติด ตั้ง ระแนง ไม้ เทียม,ขนาด ไม้ ระแนง เฌอ ร่า,ฉาก บังตา ภายนอก,ตี ระแนง รั้ว,ตี ไม้ ระแนง ข้าง บ้าน,บัง แดด ข้าง บ้าน,บังตา หน้า บ้าน,ผนัง ไม้ ระแนง,ฝ้า ระแนง ไว นิล,ฟา ซาด ระแนง ราคา,ฟา ซาด อ ลู มิ เนียม ราคา,ระแนง pvc,ระแนง กล่อง เม ทั ล ชีท,ระแนง กัน ฝน ข้าง บ้าน ราคา,ระแนง กัน ฝน สาด,ระแนง กัน ฝน สํา เร็ จ รูป,ระแนง กันแดด สํา เร็ จ รูป,ระแนง กันแดด อ ลู มิ เนียม,ระแนง บัง แดด ชายคา,ระแนง บัง แดด ชายคา บ้าน,ระแนง บัง แดด บ้าน โม เดิ ร์ น,ระแนง บัง แดด หน้า บ้าน,ระแนง บังตา ไว นิล,ระแนง ปรับ องศา,ระแนง ปรับ ได้ ไท วัสดุ,ระแนง ริม รั้ว upvc,ระแนง สํา เร็ จ รูป,ระแนง สํา เร็ จ รูป ราคา,ระแนง สํา เร็ จ รูป โฮม โปร,ระแนง หน้า บ้าน,ระแนง ห้อง ครัว,ระแนง อ ลู มิ เนียม ปรับ ได้ ราคา,ระแนง อ ลู มิ เนียม ราคา,ระแนง อ ลู มิ เนียม ไท วัสดุ,ระแนง ไม้ สํา เร็ จ รูป โฮม โปร ราคา,ระแนง ไม้ เทียม กันแดด,รั้ว ระแนง ไว นิล,รั้ว ไม้ ระแนง บังตา,รั้ว ไม้ ระแนง สํา เร็ จ รูป ไท วัสดุ,รั้ว ไม้ ระแนง แนว ตั้ง,รั้ว ไว นิล ราคา,ราคา ติด ตั้ง ระแนง ไม้ เทียม,ราคา ฝ้า ไม้ ระแนง ต่อ ตาราง เมตร,ราคา ระแนง ปรับ ได้,ราคา ระแนง เม ทั ล ชีท,ราคา ระแนง ไม้ เทียม,ราคา ไม้ ระแนง เฌอ ร่า 3 นิ้ว,แบบ ระแนง บังตา สวย ๆ,แบบ ระแนง หลัง บ้าน,แผง ระแนง สํา เร็ จ รูป,ไม้ ระแนง 3 นิ้ว ยาว 4 เมตร,ไม้ ระแนง scg ราคา,ไม้ ระแนง ตกแต่ง ผนัง ไท วัสดุ,ไม้ ระแนง ทํา รั้ว,ไม้ ระแนง ทํา รั้ว บ้าน,ไม้ ระแนง บังตา ราคา,ไม้ ระแนง ยาว 4 เมตร,ไม้ ระแนง รั้ว,ไม้ ระแนง ราคา,ไม้ ระแนง ราคา มัด ละ,ไม้ ระแนง ราคา เท่า ไหร่,ไม้ ระแนง เฌอ ร่า 2 นิ้ว ราคา,icon roof,กันสาด ไม้ ระแนง,กันสาด ไม้ ระแนง หน้า บ้าน,กันแดด ไม้ ระแนง,กั้น บ้าน ด้วย ไม้ ระแนง,กั้น ระแนง ข้าง บ้าน,กั้น รั้ว ข้าง บ้าน ราคา,กั้น ห้อง ครัว ด้วย ไม้ ระแนง,การ ติด ตั้ง ไม้ ระแนง scg,การ ติด ตั้ง ไม้ ระแนง บังตา,การ ติด ไม้ ระแนง,การ ทํา ระแนง กันแดด,ค่าแรง ติด ตั้ง ระแนง ไม้ เทียม,ฉาก กันแดด ระเบียง,ฉาก กั้น ข้าง บ้าน,ฉาก บัง แดด ระเบียง,ชุด รั้ว ระแนง ไว นิล scg,ตกแต่ง ผนัง ไม้ เทียม,ตัวอย่าง ระแนง กันแดด,ตัวอย่าง รั้ว ไม้ ระแนง,ติด ตั้ง ระแนง ไม้ เทียม,ติด ตั้ง ไม้ ระแนง,ติด ตั้ง ไม้ ระแนง บังตา,ติด ตั้ง ไม้ ระแนง เทียม,ต่อ เติม ระแนง ไม้,ต่อ เติม รั้ว บ้าน ราคา,ต่อ เติม รั้ว บ้าน ไม้ ระแนง ราคา,ต่อ เติม ห้อง ครัว ไม้ ระแนง,ทำ ระแนง กันสาด,ที่ กั้นบัง แดด,ทํา ระแนง ข้าง บ้าน,ทํา ระแนง ปรับ ได้,ทํา รั้ว ระแนง ราคา,บัง สายตา ข้าง บ้าน,บังตา ห้องน้ำ,บังตา อ ลู มิ เนียม,ประตู รั้ว ไม้ ระแนง ราคา,ประตู รั้ว ไม้ เฌอ ร่า,ผนัง ไม้ ระแนง ราคา,ผนัง ไม้ เทียม ภายนอก ไท วัสดุ,ผนัง ไม้ เทียม ราคา,ฝา ไม้ ระแนง,ฝ้า ระแนง,ฝ้า ระแนง ตาราง เมตร ละ,ฝ้า ระแนง อ ลู มิ เนียม ราคา,ฝ้า ระแนง ไม้ เทียม,ฝ้า ระแนง ไว นิล ราคา,ฝ้า เพดาน ไม้ เทียม,ฝ้า เพดาน ไม้ เทียม scg ราคา,ฝ้า ไม้ ระแนง,ระเบียง หน้า บ้าน ไม้ ระแนง,ระแนง,ระแนง 4 นิ้ว,ระแนง upvc ราคา,ระแนง กัน ฝน,ระแนง กัน ฝน ระเบียง,ระแนง กันสาด,ระแนง กันแดด กัน ฝน,ระแนง กันแดด หน้า บ้าน,ระแนง กั้น ข้าง บ้าน,ระแนง กั้น รั้ว บ้าน,ระแนง กํา แพง,ระแนง ข้าง บ้าน,ระแนง ข้าง บ้าน แนว ตั้ง,ระแนง ตาราง เมตร ละ,ระแนง ต้นไม้,ระแนง บัง แดด โรงรถ,ระแนง บังตา ข้าง บ้าน ราคา,ระแนง บังตา ระเบียง,ระแนง บังตา ราคา,ระแนง บังตา เฌอ ร่า,ระแนง บังตา แนว ตั้ง,ระแนง บังตา ใน บ้าน,ระแนง บังตา ไว นิล scg,ระแนง บังตา ไว นิล ราคา,ระแนง บาน เลื่อน,ระแนง บานเกล็ด ระแนง กัน ฝน,ระแนง ปรับ องศา ได้,ระแนง ปรับ ได้ ทํา เอง,ระแนง ฝ้า,ระแนง ฝ้า เพดาน,ระแนง พราง ตา,ระแนง พับ ได้,ระแนง ภายนอก,ระแนง ระเบียง,ระแนง รั้ว,ระแนง รั้ว upvc,ระแนง รั้ว บ้าน สวย ๆ,ระแนง รั้ว เม ทั ล ชีท,ระแนง รั้ว เม ทั ล ชีท ลายไม้,ระแนง สวย ๆ,ระแนง สำเร็จ,ระแนง สไลด์,ระแนง สํา เร็ จ รูป scg,ระแนง สํา เร็ จ รูป scg ราคา,ระแนง หน้า บ้าน โม เดิ ร์ น,ระแนง หลัง บ้าน,ระแนง หลังคา บ้าน,ระแนง ห้องน้ำ,ระแนง อ ลู มิ เนียม ตัว ซี,ระแนง อ ลู มิ เนียม สี ขาว,ระแนง เชิงชาย,ระแนง เฌอ ร่า,ระแนง เปิด ปิด ได้,ระแนง เปิด ปิด ได้ ราคา,ระแนง เม ทั ล ชีท ไท วัสดุ,ระแนง แนว นอน,ระแนง แบบ เลื่อน,ระแนง ไม้ กันแดด หน้า บ้าน,ระแนง ไม้ ครัว,ระแนง ไม้ ปรับ ได้ ราคา,ระแนง ไม้ ฝา เฌอ ร่า,ระแนง ไม้ ฝา เฌอ ร่า ราคา,ระแนง ไม้ สำเร็จ,ระแนง ไม้ หลัง บ้าน,ระแนง ไม้ เทียม บังตา,ระแนง ไม้ เทียม ภายนอก scg,ระแนง ไม้ เทียม ไท วัสดุ,ระแนง ไม้ เพดาน,ระแนง ไว นิล amigo,ระแนง ไว นิล scg แค ต ตา ล็อก,ระแนง ไว นิล upvc,ระแนง ไว นิล ราคา,ระแนง ไว นิล สํา เร็ จ รูป,รับ ทำ ระแนง,รับ ทํา ระแนง บังตา,รั้ว บังตา ข้าง บ้าน,รั้ว บ้าน ไม้ ระแนง สวย ๆ,รั้ว บ้าน ไม้ ระแนง แบบ ต่างๆ,รั้ว บ้าน ไม้ เฌอ ร่า,รั้ว ระแนง ราคา,รั้ว ระแนง สำเร็จรูป,รั้ว ระแนง ไม้ เทียม,รั้ว ไม้ ระแนง สํา เร็ จ รูป ดู โฮม,รั้ว ไม้ สวย ๆ,รั้ว ไม้ สํา เร็ จ รูป ไท วัสดุ,รั้ว ไม้ เทียม,รั้ว ไม้ เทียม ไท วัสดุ,รั้ว ไว นิล,รั้ว ไว นิล สํา เร็ จ รูป,ราคา ทํา รั้ว บ้าน ไม้ ระแนง,ราคา ทํา รั้ว ระแนง,ราคา ทํา รั้ว ไม้ ระแนง,ราคา ฝ้า ระแนง ไม้ เทียม ต่อ ตาราง เมตร,ราคา ระแนง บังตา,ราคา ระแนง รั้ว,ราคา ระแนง อ ลู มิ เนียม,ราคา ระแนง ไม้ เทียม wpc,ราคา ระแนง ไว นิล,ราคา แผ่น ไม้ เฌอ ร่า,ราคา ไม่ ฝา เฌอ ร่า,ราคา ไม้ ฝา เฌอ ร่า 3 นิ้ว ยาว 4 เมตร ไท วัสดุ,ราคา ไม้ ฝา เฌอ ร่า 4 นิ้ว ยาว 4 เมตร ไท วัสดุ,ราคา ไม้ ฝา เฌอ ร่า 6 นิ้ว ยาว 4 เมตร ไท วัสดุ ราคา,ราคา ไม้ ระแนง 3 นิ้ว,ราคา ไม้ ระแนง สํา เร็ จ รูป,ราคา ไม้ ระแนง ไว นิล,ราคา ไม้ รั้ว เฌอ ร่า ไท วัสดุ,ราคา ไม้ เทียม,ราง ระแนง ปรับ ได้,ราว กัน ตก ไว นิล,ร้าน ไม้ ระแนง ใกล้ ฉัน,วัสดุ ทํา รั้ว น้ำหนัก เบา,วิธี ติด ตั้ง ระแนง ไม้ เทียม ภายนอก,วิธี ติด ตั้ง ไม้ ระแนง wpc,สี ไม้ ระแนง,หลังคา ระแนง,หลังคา ระแนง ไม้ กันแดด,หลังคา ระแนง ไม้ เทียม ราคา,หลังคา ไม้ ระแนง สวย ๆ,ออกแบบ ไม้ ระแนง,อุปกรณ์ ทำ ระแนง,อุปกรณ์ ทำ ระแนง ปรับ ได้,อุปกรณ์ ทํา ระแนง ปรับ ได้,เฌอ ร่า ระแนง ราคา,เม ทั ล ชีท รั้ว บ้าน,เม ทั ล ชีท ลอน รั้ว ราคา,เม ทั ล ชีท ลอน รั้ว ไท วัสดุ,เม ทั ล ชีท ลายไม้ ระแนง,แต่ง เสา บ้าน ด้วย ไม้ เฌอ ร่า,แบบ กันสาด ไม้ ระแนง,แบบ ระแนง กันแดด,แบบ ระแนง ข้าง บ้าน กัน ฝน,แบบ ระแนง ข้าง บ้าน สวย ๆ, ระแนง,ไม้,ราคา,รั้ว,บ้าน,เทียม,บังตา,จ,รูป,เร็,สํา,ร่า,เฌอ,ไว,นิล,วัสดุ,ไท,นิ้ว,ได้,กันแดด,ข้าง,ปรับ,แดด,บัง,แบบ,อ,มิ,3,ลู,โฮม,เนียม,โปร,ล,ชีท,ทั,เมตร,ภายนอก,เม,scg,ๆ,หน้า,สวย,ตั้ง,ฝ้า,ยาว,ติด,ฝน,ทํา,ผนัง,upvc,ขนาด,กัน,wpc,4,ตกแต่ง,แผ่น,แผง,การ,ฝา,กั้น,เพดาน,ลายไม้,ต่อ,2,อุปกรณ์,ครัว,แนว,ระเบียง,หลังคา,ตาราง,ทำ,กันสาด,ห้อง,ฉาก,หลัง,บานเกล็ด,ตะวันตก,ละ,ตี,ทิศ,ซาด,ชายคา,เติม,ฟา,น,โม,ร์,องศา,ด้วย,เดิ,สี,ไหร่,เท่า,6,ลอน,วิธี,ตัวอย่าง,เลื่อน,ตา,สำเร็จ,ห้องน้ำ,กล่อง,pvc,รับ,ขาว,ปิด,เปิด,มัด,ประตู,ริม,สาด,ด,ต,ใน,ต้นไม้,พราง,ต่างๆ,กี่,icon,สไลด์,ชุด,สายตา,ตก,เชิงชาย,พับ,ดู,คอน,ตัว,roof,amigo,วู,ค่าแรง,แต่ง,ล็อก,ที่,ราง,เกล็ด,นอน,โรงรถ,รั่ว,scg แค,กํา,สำเร็จรูป,ร้าน,ซี,เอง,แพง,ราว,เบา,ออกแบบ,ไม่,เสา,น้ำหนัก,ใกล้,กั้นบัง,ฉัน,บาน,กรุ,เเ,ก,sci wood,ค,ง,ม่าน,เชียงใหม่,บันได,โด,ท,ไทย,กำแพง,ร่อง,พ,alnex,เพิ่ม,10,พื้น,ส,มา,โรง,1,ทำครัว,มี,5,ร้อน,8,จริง,จัด,ยม,นั่งเล่น,เตียง,สวน,ฉลุ,น้ํา,homepro,ยำ,กา,รถ,2567,2566,2565,2564,งาน,วัน,shera,panel,เลื้อย,thaisun,c,set,one,ไอ,สำหรับ,เนื้อ,ระ,ปูน,รี,pantip,wallboard,ความ,ช่าง,เข้ม,แตน,diy,wood,อะลูมิเนียม,ดำ,ดี,ไหน,1x1,ลา,ไหม,สูง,คอม,dura,fameline,คํา,เหล็ก,ช่องลม,รอบ,ของ,สุราษฎร์ธานี,วณ,ทึบ,ประหยัด,wpc wall,เสริม,decor,น้ำ,fpc,windsor,ทน,เมี่,เส้น,home,วี,แข็ง,ขึ้น,ทีวี,วิน,ทา,ลักษณะ,ยกพื้น,กระเบื้อง,เพชร,facade,ซื้อ,เทา,โกลบอล,เรียบ,ล็อค,ลาย,แอร์,บอร์ด,แสง,จี,ภายใน,ใช้,ให้,ซีเมนต์,ขอบ,ยี่ห้อ,ตาข่าย,ถูก,ที่ไหน,ลิ๊,ช้าง,upvcdecor,เช็ค,มอบ,เขียว,เกรด,ส์,บ้าง,พลาสติก,หน้าต่าง,ไฟเบอร์,ปลูก,ตรา,โครง,รับแขก" />
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
      <meta name="twitter:image" content="https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/asset/og-img.jpg" />
      <meta name="twitter:image:alt" content="iconroof ระแนง" />
      <meta property="og:site_name" content="Iconroof" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/asset/og-img.jpg" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:alt" content="iconroof ระแนง" />
      <meta property="og:locale" content="th_TH" />
      <meta property="og:locale:alternate" content="en_US" />      
      <meta property="og:title" content="จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof" />
      <meta property="og:description" content="บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO รุ่นระแนงชิด รุ่นระแนงเว้นร่อง รุ่นระแนงบานเกล็ด โดยไอคอนรูฟ" />
      <meta property="og:type" content="website" />      
      <meta property="og:url" content="https://iconroof.co.th/" /> */}
      <body
        className={`${notoSans.variable} ${SarabunRegular.variable} ${SarabunMedium.variable} antialiased`}>             
        {header}          
        {children}
        <Analytics />
        <NewFooter />
      </body>
    </html>
  );
}

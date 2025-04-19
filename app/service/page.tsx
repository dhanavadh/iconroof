import React from 'react'
import Alert from '../components/Alert'
import ProductSlider from '../components/ProductSlider'
import Link from 'next/link'
import ProductsList from '../components/ProductList'
import ScgProduct from '../components/scg/ScgProduct'
import AmigoProduct from '../components/Amigo/AmigoProduct'
import GreenwoodProduct from '../components/Greenwood/GreenwoodProduct'
import Products from '../components/Products'
import Head from 'next/head'
import type { Metadata } from 'next'
import Image from 'next/image'
import InstallationList from '../components/Install'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  title: 'บริการ – ช่างทำระแนง | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof',
  description: 'บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ ขายปลีก-ส่ง ราคาโรงงาน ทันสมัย แข็งแรง สวยงาม ระแนงบังตาไวนิล รับประกัน 10 ปี อบสีด้วย พาวเดอร์ โค้ท ตั้งแต่ 08.00-17.30 น. เปิดบริการวันจันทร์-เสาร์ บริการ: รับติดตั้งระแนงไวนิล, เปิดบริการ จันทร์-ศุกร์, ตั้งแต่ 08.00-17.30 น.',
  keywords: 'ช่าง, ช่างทำ, ช่างระแนง, ช่างไอคอน, โอ, ช่างโอ, ช่างฝ้า, ช่างติดตั้ง, บริการติดตั้ง, ช่ าง, ช่า ง,ระแนงบังตา, ระแนงบังตาไวนิล, ระแนงบังตาไวนิล AMIGO, ระแนงชิด, ระแนงเว้นร่อง, ระแนงบานเกล็ด, ระแนงบังแดด, ระแนงตกแต่งบ้าน, ระแนงระเบียง, ระแนงกันแดด, ระแนงบังสายตา, ระแนงหน้าบ้าน, ระแนงข้างบ้าน, ระแนงแต่งบ้าน, ระแนงแต่งสวน, ไวนิลบังตา, แผ่นไวนิล, ไวนิลตกแต่ง, ไวนิลภายนอก, ไวนิลภายใน, วัสดุตกแต่งบ้าน, วัสดุก่อสร้าง, หลังคาไวนิล, หลังคาไวนิล AMIGO, ไวนิลคุณภาพสูง, ไวนิลราคาถูก, วัสดุตกแต่งภายนอก, แผ่นไวนิลทนแดด, แผ่นไวนิลทนน้ำ, ไวนิลตกแต่งผนัง, ผนังไวนิล, ไวนิลตกแต่งภายนอก, ติดตั้งระแนง, ช่างติดตั้งระแนง, ระแนงบังตา, ระแนงบังตาไวนิล, ระแนงบังตาไวนิล AMIGO, ระแนงชิด, ระแนงเว้นร่อง, ระแนงบานเกล็ด, ระแนงบังแดด, ระแนงตกแต่งบ้าน, ระแนงระเบียง, ระแนงกันแดด, ระแนงบังสายตา, ระแนงหน้าบ้าน, ระแนงข้างบ้าน, ระแนงแต่งบ้าน, ระแนงแต่งสวน, ไวนิลบังตา, แผ่นไวนิล, ไวนิลตกแต่ง, ไวนิลภายนอก, ไวนิลภายใน, วัสดุตกแต่งบ้าน, วัสดุก่อสร้าง, หลังคาไวนิล, หลังคาไวนิล AMIGO, ไวนิลคุณภาพสูง, ไวนิลราคาถูก, วัสดุตกแต่งภายนอก, แผ่นไวนิลทนแดด, แผ่นไวนิลทนน้ำ, ไวนิลตกแต่งผนัง, ผนังไวนิล, ไวนิลตกแต่งภายนอก, ติดตั้งระแนง, ช่างติดตั้งระแนง, ระแนงสำเร็จรูป, ผลิตภัณฑ์ไวนิล, ไวนิลกันน้ำ, ไวนิลกันปลวก, วัสดุกันความร้อน, ไวนิลทนฝน, วัสดุก่อสร้างบ้าน, สร้างบ้าน, รีโนเวทบ้าน, บ้านสวยด้วยไวนิล, ไอคอนรูฟ, Iconroof, Amigo, ไวนิล Amigo, ระแนง, ระ แนง, ระแน ง, บังตา, ฝ้า, ไอคอนรุฟ, ไอคอนรูฟ',
  openGraph: {
    title: 'สินค้า – ระแนงบังตา',
    description: 'บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ ขายปลีก-ส่ง ราคาโรงงาน ทันสมัย แข็งแรง สวยงาม ระแนงบังตาไวนิล รับประกัน 10 ปี อบสีด้วย พาวเดอร์ โค้ท ตั้งแต่ 08.00-17.30 น. เปิดบริการวันจันทร์-เสาร์ บริการ: รับติดตั้งระแนงไวนิล, เปิดบริการ จันทร์-ศุกร์, ตั้งแต่ 08.00-17.30 น.',
    url: 'https://iconroof.co.th/products',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://iconroof.co.th/asset/OG1.png', // Must be an absolute URL
        width: 800,
        height: 600,
        alt: 'iconroof ระแนง',
      },
      {
        url: 'https://iconroof.co.th/asset/OG1.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'iconroof ระแนง',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
}

const ServicePage = () => {
  return (
    <>    
    <div className="flex flex-col min-h-screen items-start mx-6 lg:mx-20 font-[family-name:var(--font-noto-sans)]">      
      <div className="flex flex-col items-start pt-24 mb-4 w-full">
        <p className="h1">บริการติดตั้งระแนง</p>    
      </div>
      <div className='flex flex-col lg:grid lg:grid-cols-4 items-start justify-between w-full lg:gap-8 relative'>
        <div className='hidden lg:grid lg:col-span-3 lg:sticky self-start transition-[top] top-20'
          id='big-content'
        >
          <div>
          
            {/* <video
              className='w-full h-full object-cover'
              autoPlay
              loop
              muted
              playsInline
              src='/asset/video/test1.mp4'
              // src='https://cdn.openai.com/ctf-cdn/o3o4mini_16x9(1080).mp4'
            ></video> */}
            <Image
              src='/asset/amigo-2.png'
              alt='Iconroof'
              width={1920}
              height={1080}
              className='h-[500px] w-full object-cover rounded-lg'
              >

              </Image>
          </div>
          <p className="text-2xl mt-4 font-semibold">ติดตั้งระแนงโดยช่างมืออาชีพ</p>
          <p className="text-base mt-1">ไอคอนรูฟมีบริการติดตั้งระแนงโดยช่างมืออาชีพ</p>
          <p className="text-base mb-4">สามารถติดต่อเพื่อสอบถามข้อมูลเพิ่มเติมได้ผ่านทาง Line@PLK2013</p>
          <Link href='https://www.youtube.com/@iconroof3391' target='_blank' className='flex items-center mb-8 link'>
            <p className="text-base">ดูผลงานการติดตั้ง</p>
            <Image
              src='/icon/link.svg'
              alt='Iconroof'
              width={20}
              height={20}
              className='ml-2'
              >
              </Image>
          </Link>
        </div>
        <div className='grid lg:col-span-1 overflow-y-auto w-full' id='small-content'>
          <div className='lg:hidden'>
            <Image
              src='/asset/amigo-2.png'
              alt='Iconroof'
              width={1920}
              height={1080}
              className='h-64 w-full object-cover rounded-lg'
            />                    
            <div>
              <p className="text-2xl mt-4 font-semibold">ติดตั้งระแนงโดยช่างมืออาชีพ</p>
              <p className="text-base mt-1 mb-4">ไอคอนรูฟมีบริการติดตั้งระแนงโดยช่างมืออาชีพ สามารถติดต่อเพื่อสอบถามข้อมูลเพิ่มเติมได้ผ่านทาง Line@PLK2014</p>
              <Link href='https://www.youtube.com/@iconroof3391' target='_blank' className='flex items-center mb-8 link'>
                <p className="text-base">ดูผลงานการติดตั้ง</p>
                <Image
                  src='/icon/link.svg'
                  alt='Iconroof'
                  width={20}
                  height={20}
                  className='ml-2'
                  >
                  </Image>
              </Link>
            </div>
          </div>
          <div>
            <Image
              src='/asset/amigo.png'
              alt='Iconroof'
              width={1920}
              height={1080}
              className='h-64 w-full object-cover rounded-lg'
            />                    
            <div>
              <p className="text-2xl mt-4 font-semibold">ต่อเติมระแนงสูง ไม่ยึดรั้วโครงการ</p>
              <p className="text-base mt-1 mb-4">งานต่อเติมระแนงสูง ไม่ยึดรั้วโครงการ โดยช่างโอไอคอนรูฟ</p>
              <Link href='https://www.youtube.com/watch?v=1HI_yjBgzgc' target='_blank' className='flex items-center mb-8 link'>
                <p className="text-base">ดูผลงานการติดตั้ง</p>
                <Image
                  src='/icon/link.svg'
                  alt='Iconroof'
                  width={20}
                  height={20}
                  className='ml-2'
                  >
                  </Image>
              </Link>
            </div>
          </div>
          <div>
            <Image
              src='/asset/roof-1.jpg'
              alt='Iconroof'
              width={1920}
              height={1080}
              className='h-64 w-full object-cover rounded-lg'
            />                    
            <div>
              <p className="text-2xl mt-4 font-semibold">รั้วระแนงบังตา ติดตั้งเสร็จภายใน 1 วัน</p>
              <p className="text-base mt-1 mb-4">งานต่อเติมระแนงสูง ไม่ยึดรั้วโครงการ โดยช่างโอไอคอนรูฟ</p>
              <Link href='https://www.youtube.com/watch?v=1HI_yjBgzgc' target='_blank' className='flex items-center mb-8 link'>
                <p className="text-base">ดูผลงานการติดตั้ง</p>
                <Image
                  src='/icon/link.svg'
                  alt='Iconroof'
                  width={20}
                  height={20}
                  className='ml-2'
                  >
                  </Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start w-full">
        <p className="h1">ขั้นตอนติดตั้งระแนง</p>    
      </div>
      <InstallationList />   
      



    </div>    
    </>    
  )
}


export default ServicePage
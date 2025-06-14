import React from 'react'
import Alert from '../components/Alert'
import Head from 'next/head'
import PreviewSlider from '../components/PreviewSlider'
import Link from 'next/link'
import Image from 'next/image'
import BlogSlider from '../components/BlogSlider'
import BlogSlider1 from '../components/BlogSlider'
import type { Metadata } from 'next'
import InstallationList from '../components/Install'


export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  title: 'บทความ – จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof',
  description: 'บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ ขายปลีก-ส่ง ราคาโรงงาน ทันสมัย แข็งแรง สวยงาม ระแนงบังตาไวนิล รับประกัน 10 ปี อบสีด้วย พาวเดอร์ โค้ท ตั้งแต่ 08.00-17.30 น. เปิดบริการวันจันทร์-เสาร์ บริการ: รับติดตั้งระแนงไวนิล, เปิดบริการ จันทร์-ศุกร์, ตั้งแต่ 08.00-17.30 น.',
  keywords: 'ระแนงบังตา, ระแนงบังตาไวนิล, ระแนงบังตาไวนิล AMIGO, ระแนงชิด, ระแนงเว้นร่อง, ระแนงบานเกล็ด, ระแนงบังแดด, ระแนงตกแต่งบ้าน, ระแนงระเบียง, ระแนงกันแดด, ระแนงบังสายตา, ระแนงหน้าบ้าน, ระแนงข้างบ้าน, ระแนงแต่งบ้าน, ระแนงแต่งสวน, ไวนิลบังตา, แผ่นไวนิล, ไวนิลตกแต่ง, ไวนิลภายนอก, ไวนิลภายใน, วัสดุตกแต่งบ้าน, วัสดุก่อสร้าง, หลังคาไวนิล, หลังคาไวนิล AMIGO, ไวนิลคุณภาพสูง, ไวนิลราคาถูก, วัสดุตกแต่งภายนอก, แผ่นไวนิลทนแดด, แผ่นไวนิลทนน้ำ, ไวนิลตกแต่งผนัง, ผนังไวนิล, ไวนิลตกแต่งภายนอก, ติดตั้งระแนง, ช่างติดตั้งระแนง, ระแนงบังตา, ระแนงบังตาไวนิล, ระแนงบังตาไวนิล AMIGO, ระแนงชิด, ระแนงเว้นร่อง, ระแนงบานเกล็ด, ระแนงบังแดด, ระแนงตกแต่งบ้าน, ระแนงระเบียง, ระแนงกันแดด, ระแนงบังสายตา, ระแนงหน้าบ้าน, ระแนงข้างบ้าน, ระแนงแต่งบ้าน, ระแนงแต่งสวน, ไวนิลบังตา, แผ่นไวนิล, ไวนิลตกแต่ง, ไวนิลภายนอก, ไวนิลภายใน, วัสดุตกแต่งบ้าน, วัสดุก่อสร้าง, หลังคาไวนิล, หลังคาไวนิล AMIGO, ไวนิลคุณภาพสูง, ไวนิลราคาถูก, วัสดุตกแต่งภายนอก, แผ่นไวนิลทนแดด, แผ่นไวนิลทนน้ำ, ไวนิลตกแต่งผนัง, ผนังไวนิล, ไวนิลตกแต่งภายนอก, ติดตั้งระแนง, ช่างติดตั้งระแนง, ระแนงสำเร็จรูป, ผลิตภัณฑ์ไวนิล, ไวนิลกันน้ำ, ไวนิลกันปลวก, วัสดุกันความร้อน, ไวนิลทนฝน, วัสดุก่อสร้างบ้าน, สร้างบ้าน, รีโนเวทบ้าน, บ้านสวยด้วยไวนิล, ไอคอนรูฟ, Iconroof, Amigo, ไวนิล Amigo, ระแนง, ระ แนง, ระแน ง, บังตา, ฝ้า, ไอคอนรุฟ, ไอคอนรูฟ',
  openGraph: {
    title: 'บทความ – ระแนงบังตา',
    description: 'บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ ขายปลีก-ส่ง ราคาโรงงาน ทันสมัย แข็งแรง สวยงาม ระแนงบังตาไวนิล รับประกัน 10 ปี อบสีด้วย พาวเดอร์ โค้ท ตั้งแต่ 08.00-17.30 น. เปิดบริการวันจันทร์-เสาร์ บริการ: รับติดตั้งระแนงไวนิล, เปิดบริการ จันทร์-ศุกร์, ตั้งแต่ 08.00-17.30 น.',
    url: 'https://iconroof.co.th/products',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://iconroof.co.th/asset/blog/blog-1.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
        alt: 'iconroof ระแนง',
      },
      {
        url: 'https://iconroof.co.th/asset/blog/blog-1.jpg', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'iconroof ระแนง',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
}

const BlogPage = () => {
  return (
    <>
    <BlogSlider1 />
    <div className="flex flex-col min-h-screen items-start mx-6 lg:mx-20 font-[family-name:var(--font-noto-sans)]">      
      <div className="flex flex-col items-start pt-8 mb-4 w-full">
        <p className="h1">บทความ</p>    
      </div>
      <div className='flex flex-col lg:grid lg:grid-cols-4 items-start justify-between w-full lg:gap-8 relative'>
        <div className='hidden lg:grid lg:col-span-3 lg:sticky self-start transition-[top] top-20'
          id='big-content'
        >
          <Link href='/blogs/article-4'>
            <Image
              src='https://tvss01.iconroof.co.th/public/asset/blog/USrLCJB7BUY-HD.jpg'
              alt='Iconroof'
              width={1920}
              height={1080}
              className='h-[500px] w-full object-cover rounded-lg'
              >

              </Image>
          </Link>
          <p className="text-2xl mt-4 font-medium hover:underline hover:underline-offset-2">รีโนเวทบ้านสวย ด้วยระแนงไวนิล By ช่างโอ | ICONROOF</p>
          <p className="text-base mt-1 mb-4">เปลี่ยนบ้านเก่าให้สวยใหม่ด้วยระแนงไวนิล: ทั้งบังแดด บังตา กันนก และเพิ่มสไตล์ให้บ้านคุณ</p>
          <Link href='/blogs/article-4' className='flex items-center mb-8 link'>
            <p className="text-base">อ่านต่อ</p>
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
          <Link href='/blogs/article-4' className='lg:hidden'>
            <Image
              src='https://tvss01.iconroof.co.th/public/asset/blog/USrLCJB7BUY-HD.jpg'
              alt='Iconroof'
              width={1920}
              height={1080}
              className='h-64 w-full object-cover rounded-lg'
            />                    
            <div>
            <p className="text-2xl mt-4 font-medium hover:underline hover:underline-offset-2">รีโนเวทบ้านสวย ด้วยระแนงไวนิล By ช่างโอ | ICONROOF</p>
            <p className="text-base mt-1 mb-4">เปลี่ยนบ้านเก่าให้สวยใหม่ด้วยระแนงไวนิล: ทั้งบังแดด บังตา กันนก และเพิ่มสไตล์ให้บ้านคุณ</p>
            <Link href='/blogs/article-4' className='flex items-center mb-8 link'>
              <p className="text-base">อ่านต่อ</p>
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
          </Link>
          <Link href='/blogs/article-1'>
            <Image
              src='/asset/blog/blog-1.jpg'
              alt='Iconroof'
              width={1920}
              height={1080}
              className='h-64 w-full object-cover rounded-lg'
            />                    
            <div>
            <p className="text-2xl mt-4 font-medium hover:underline hover:underline-offset-2">วัสดุมุงหลังคายอดนิยม ที่ใช้กันในปัจจุบัน</p>
            <p className="text-base mt-1 mb-4">การเลือกวัสดุที่ใช้มุง หลังคา ถือว่าเป็นอย่างแรกๆ ที่เรามักต้องเลือกกันก่อน ด้วยวัสดุมีหลากหลายแบบและชนิด ซึ่งมันอาจจะไม่เหมาะกับทรงหลังคาบ้านและความต้องการของเราก็เป็นได้</p>
            <Link href='/blogs/article-1' className='flex items-center mb-8 link'>
              <p className="text-base">อ่านต่อ</p>
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
          </Link>
          <Link href='/blogs/article-2'>
            <Image
              src='/asset/blog/blog-2.png'
              alt='Iconroof'
              width={1920}
              height={1080}
              className='h-64 w-full object-cover rounded-lg'
            />                    
            <div>
              <p className="text-2xl mt-4 font-medium">ระแนงไวนิล ต่างจาก ไม้ระแนงเฌอร่า อย่างไร..?</p>
              <p className="text-base mt-1 mb-4">หลายคนอาจสงสัยว่าระแนงแต่ละชนิดต่างกันอย่างไร มีคุณสมบัติอย่างไร</p>
              <Link href='/blogs/article-2' target='_blank' className='flex items-center mb-8 link'>
                <p className="text-base">อ่านต่อ</p>
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
          </Link>
          <Link href='/blogs/article-3'>
            <Image
              src='/asset/blog/blog-3.png'
              alt='Iconroof'
              width={1920}
              height={1080}
              className='h-64 w-full object-cover rounded-lg'
            />                    
            <div>
              <p className="text-2xl mt-4 font-medium">ระแนงไวนิล ต่างจาก ไม้ระแนงเฌอร่า อย่างไร..?</p>
              <p className="text-base mt-1 mb-4">หลายคนอาจสงสัยว่าระแนงแต่ละชนิดต่างกันอย่างไร มีคุณสมบัติอย่างไร</p>
              <Link href='/blogs/article-3' target='_blank' className='flex items-center mb-8 link'>
                <p className="text-base">อ่านต่อ</p>
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
          </Link>
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

export default BlogPage
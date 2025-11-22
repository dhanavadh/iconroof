import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BlogSlider from '../components/BlogSlider'
import type { Metadata } from 'next'
import InstallationList from '../components/Install'

export const metadata: Metadata = {
  title: 'บทความ – จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof',
  description: 'รวมบทความเกี่ยวกับระแนงไวนิล AMIGO ระแนงบังตา การติดตั้ง และไอเดียตกแต่งบ้าน',
  openGraph: {
    title: 'บทความ – ระแนงบังตา',
    description: 'รวมบทความเกี่ยวกับระแนงไวนิล AMIGO ระแนงบังตา การติดตั้ง และไอเดียตกแต่งบ้าน',
    url: 'https://iconroof.co.th/blogs',
    siteName: 'Iconroof',
    images: [
      {
        url: 'https://iconroof.co.th/asset/blog/blog-1.jpg',
        width: 800,
        height: 600,
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
    <BlogSlider />
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

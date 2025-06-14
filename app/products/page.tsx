import React from 'react'
import Link from 'next/link'
import ScgProduct from '../components/scg/ScgProduct'
import AmigoProduct from '../components/Amigo/AmigoProduct'
import GreenwoodProduct from '../components/Greenwood/GreenwoodProduct'
import Products from '../components/Products'
import Head from 'next/head'
import type { Metadata } from 'next'
import AmigoRefGallerry from '../components/Amigo/AmigoRefGallerry'
import AdsSlider from '../components/AdsSlider'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  title: 'สินค้า – จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof',
  description: 'บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ ขายปลีก-ส่ง ราคาโรงงาน ทันสมัย แข็งแรง สวยงาม ระแนงบังตาไวนิล รับประกัน 10 ปี อบสีด้วย พาวเดอร์ โค้ท ตั้งแต่ 08.00-17.30 น. เปิดบริการวันจันทร์-เสาร์ บริการ: รับติดตั้งระแนงไวนิล, เปิดบริการ จันทร์-ศุกร์, ตั้งแต่ 08.00-17.30 น.',
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
    title: 'สินค้า – ระแนงบังตา',
    description: 'บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ ขายปลีก-ส่ง ราคาโรงงาน ทันสมัย แข็งแรง สวยงาม ระแนงบังตาไวนิล รับประกัน 10 ปี อบสีด้วย พาวเดอร์ โค้ท ตั้งแต่ 08.00-17.30 น. เปิดบริการวันจันทร์-เสาร์ บริการ: รับติดตั้งระแนงไวนิล, เปิดบริการ จันทร์-ศุกร์, ตั้งแต่ 08.00-17.30 น.',
    url: 'https://iconroof.co.th/products',
    siteName: 'Next.js',
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

const ProductPage = () => {
  return (
    <>
    <Head>
        <title>สินค้า – ระแนงบังตา</title>
        <meta name="description" content="ขายปลีก-ส่ง ราคาโรงงาน ทันสมัย แข็งแรง สวยงาม ระแนงบังตาไวนิล รับประกัน 10 ปี อบสีด้วย พาวเดอร์ โค้ท ตั้งแต่ 08.00-17.30 น. เปิดบริการวันจันทร์-เสาร์ บริการ: รับติดตั้งระแนงไวนิล, เปิดบริการ จันทร์-ศุกร์, ตั้งแต่ 08.00-17.30 น." />
        <meta name="keywords" content="ระแนงบังตา, ระแนงบังตาไวนิล, ระแนงบังตาไวนิล AMIGO, ระแนงชิด, ระแนงเว้นร่อง, ระแนงบานเกล็ด, ระแนงบังแดด, ระแนงตกแต่งบ้าน, ระแนงระเบียง, ระแนงกันแดด, ระแนงบังสายตา, ระแนงหน้าบ้าน, ระแนงข้างบ้าน, ระแนงแต่งบ้าน, ระแนงแต่งสวน, ไวนิลบังตา, แผ่นไวนิล, ไวนิลตกแต่ง, ไวนิลภายนอก, ไวนิลภายใน, วัสดุตกแต่งบ้าน, วัสดุก่อสร้าง, หลังคาไวนิล, หลังคาไวนิล AMIGO, ไวนิลคุณภาพสูง, ไวนิลราคาถูก, วัสดุตกแต่งภายนอก, แผ่นไวนิลทนแดด, แผ่นไวนิลทนน้ำ, ไวนิลตกแต่งผนัง, ผนังไวนิล, ไวนิลตกแต่งภายนอก, ติดตั้งระแนง, ช่างติดตั้งระแนง, ระแนงสำเร็จรูป, ผลิตภัณฑ์ไวนิล, ไวนิลกันน้ำ, ไวนิลกันปลวก, วัสดุกันความร้อน, ไวนิลทนฝน, วัสดุก่อสร้างบ้าน, สร้างบ้าน, รีโนเวทบ้าน, บ้านสวยด้วยไวนิล, ไอคอนรูฟ, Iconroof, Amigo, ไวนิล Amigo, ระแนง, ระ แนง, ระแน ง, บังตา, ฝ้า, ไอคอนรุฟ, ไอคอนรูฟ" />
    </Head>
    <div className="flex flex-col min-h-screen items-start mx-6 md:mx-20 font-[family-name:var(--font-noto-sans)]">      
      <div className="flex flex-col items-start pt-24 mb-4 w-full border-b-2  border-neutral-200">
        <p className="h1">เลือกดูผลิตภัณฑ์ระแนง</p>
        <div className='flex flex-col lg:flex-row gap-4 font-medium py-4'>
          <Link className='link' href='#scg'>ระแนงไวนิล SCG BOX SET</Link>
          <Link className='link' href='#amigo'>ระแนงไวนิล AMIGO</Link>
          <Link className='link' href='#greenwood'>ระแนงไวนิล GREENWOOD</Link>
          <Link className='link' href='#items'>ชิ้นส่วนระแนง</Link>          
        </div>
      </div>   
      <AdsSlider />      
      {/* <div className='flex flex-col lg:flex-row bg-green-700 rounded-2xl'>
        <div className='lg:hidden flex w-full h-64'>
          <img src='asset/amigo.png' className='w-full h-full object-cover rounded-t-2xl'></img>
        </div>
        <div className='flex w-full lg:w-2/6 row-span-4 py-4 lg:py-8 flex-col items-start px-8 lg:px-12 gap-6 justify-between  text-white'>
          <div>
            <p className='text-2xl font-medium lg:text-5xl lg:leading-normal leading-normal'>สร้างความเป็นส่วนตัวให้กับบ้านของคุณ</p>
            <p className='text-lg mt-2 font-medium'>เลือกดูผลิตภัณฑ์ระแนงที่สนใจได้แล้วที่นี่</p>
          </div>
          <Link href='#amigo' className='btn-primary-static-1 mb-4 lg:mb-0'>เลือกระแนง</Link>
        </div>
        <div className='hidden lg:flex w-full lg:w-4/6'>
          <img src='asset/amigo.png' className='w-full h-full object-cover rounded-r-2xl'></img>
        </div>
      </div> */}
      
      <div className='pb-4 border-b-2 border-neutral-200 w-full' id='amigo'>
        <div className="flex flex-col items-start pt-6 lg:pt-12 mb-4">
          <p className="h1">ระแนงไวนิล AMIGO</p>
          <p className="p">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>        
        </div>     

        <div className='flex flex-col lg:flex-row bg-neutral-200/45 rounded-2xl'>
          <div className='lg:hidden flex w-full'>
            <img src='asset/amigo-1.png' className='w-full h-full object-cover rounded-t-2xl'></img>
          </div>
          <div className='flex w-full lg:w-2/6 row-span-4 py-4 lg:py-8 flex-col items-start px-8 lg:px-12 gap-6 justify-between'>
            <div>
              <p className='text-2xl lg:text-5xl font-medium lg:leading-normal leading-normal text-blue-600'>ระแนงไวนิล AMIGO</p>
              <p className='text-lg mt-2 font-medium text-blue-600'>หมดปัญหาเรื่องปลวกและเชื้อรา ไม่ปิดตัว ไม่บวมน้ำ ทนต่อแสงแดด มีอายุการใช้งานที่ยาวนาน</p>
            </div>
            <div className='flex gap-2 flex-row lg:flex-col text-center xl:flex-row'>
              <Link href='https://line.me/ti/p/@plk2013' target='_blank' className='px-4 py-2 rounded-full border-2 border-blue-600 bg-blue-600 text-white font-medium hover:bg-blue-700 hover:border-blue-700 cursor-pointer transition-colors duration-300 mb-4 lg:mb-0'>สั่งซื้อสินค้า</Link>
              <Link href='/products/amigo' className='px-4 py-2 rounded-full border-2 border-neutral-100 bg-neutral-100 text-black font-medium hover:bg-neutral-200 hover:border-neutral-200 cursor-pointer transition-colors duration-300 mb-4 lg:mb-0'>ดูรายละเอียด</Link>
            </div>
          </div>
          <div className='hidden lg:flex w-full lg:w-4/6'>
            <img src='asset/amigo-1.png' className='w-full h-full object-cover rounded-r-2xl'></img>                    
          </div>
        </div>

        <div className="flex flex-col items-start pt-4">
          <p className="h2">ตัวอย่างงานติดตั้ง</p>
          <p className="p">ตัวอย่างงานติดตั้งระแนงไวนิล AMIGO</p>        
        </div>   
        <AmigoProduct />
      </div>      

      <div className='pb-4 border-b-2 border-neutral-200 w-full' id='scg'>
        <div className="flex flex-col items-start pt-6 lg:pt-12 mb-4">
          <p className="h1">ระแนงไวนิล SCG BOX SET</p>
          <p className="p">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>        
        </div>     

        <div className='flex flex-col lg:flex-row bg-neutral-200/45 rounded-2xl'>
          <div className='lg:hidden flex w-full h-64'>
            <img src='asset/scg.png' className='w-full h-full object-cover rounded-t-2xl'></img>
          </div>
          <div className='flex w-full lg:w-2/6 row-span-4 py-4 lg:py-8 flex-col items-start px-8 lg:px-12 gap-6 justify-between'>
            <div>
              <p className='text-2xl font-medium lg:text-5xl lg:leading-normal leading-normal text-[#ED1C24]'>ระแนงไวนิล SCG BOX SET</p>
              <p className='text-lg mt-2 font-medium text-[#ED1C24]'>สร้างสรรค์ความงามได้หลากหลาย ภายใต้คุณภาพที่เป็นมาตรฐาน</p>
            </div>
            <div className='flex gap-2 flex-row lg:flex-col text-center xl:flex-row'>
              <Link href='https://line.me/ti/p/@plk2013' target='_blank' className='px-4 py-2 rounded-full border-2 border-[#ED1C24] bg-[#ED1C24] text-white font-medium hover:bg-[#C61017] hover:border-[#C61017] cursor-pointer transition-colors duration-300 mb-4 lg:mb-0'>สั่งซื้อสินค้า</Link>
              <Link href='/products' className='px-4 py-2 rounded-full border-2 border-neutral-100 bg-neutral-100 text-black font-medium hover:bg-neutral-200 hover:border-neutral-200 cursor-pointer transition-colors duration-300 mb-4 lg:mb-0'>ดูรายละเอียด</Link>
            </div>
          </div>
          <div className='hidden lg:flex w-full lg:w-4/6'>
            <img src='asset/scg.png' className='w-full h-full object-cover rounded-r-2xl'></img>                    
          </div>
        </div>
        <div className="flex flex-col items-start pt-4">
          <p className="h2">ตัวอย่างงานติดตั้ง</p>
          <p className="p">ตัวอย่างงานติดตั้งระแนงไวนิล SCG BOX SET และ SCG VALUE SET</p>        
        </div>   
        <ScgProduct />
      </div>

      <div className='pb-4 w-full border-b-2 border-neutral-200' id='greenwood'>
        <div className="flex flex-col items-start pt-6 lg:pt-12 mb-4">
          <p className="h1">ระแนงไวนิล GREENWOOD</p>
          <p className="p">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>        
        </div>     

        <div className='flex flex-col lg:flex-row bg-neutral-200/45 rounded-2xl'>
          <div className='lg:hidden flex w-full'>
            <img src='asset/greenwood1.png' className='w-full h-full object-cover rounded-t-2xl'></img>
          </div>
          <div className='flex w-full lg:w-2/6 row-span-4 py-4 lg:py-8 flex-col items-start px-8 lg:px-12 gap-6 justify-between'>
            <div>
              <p className='text-2xl lg:text-5xl font-medium lg:leading-normal leading-normal text-[#F5951D]'>ระแนงไวนิล GREENWOOD</p>
              <p className='text-lg mt-2 font-medium text-[#F5951D]'>ผลิตภัณฑ์ไม้สังเคราะห์ที่มีส่วนผสมของไม้ธรรมชาติ จึงให้ผิวสัมผัสและภาพลักษณ์เสมือนไม้จริง</p>
            </div>
            <div className='flex gap-2 flex-row lg:flex-col text-center xl:flex-row'>
              <Link href='https://line.me/ti/p/@plk2013' target='_blank' className='px-4 py-2 rounded-full border-2 border-[#F5951D] bg-[#F5951D] text-white font-medium hover:bg-[#D77C0A] hover:border-[#D77C0A] cursor-pointer transition-colors duration-300 mb-4 lg:mb-0'>สั่งซื้อสินค้า</Link>
              <Link href='/products' className='px-4 py-2 rounded-full border-2 border-neutral-100 bg-neutral-100 text-black font-medium hover:bg-neutral-200 hover:border-neutral-200 cursor-pointer transition-colors duration-300 mb-4 lg:mb-0'>ดูรายละเอียด</Link>
            </div>
          </div>
          <div className='hidden lg:flex w-full lg:w-4/6'>
            <img src='asset/greenwood1.png' className='w-full h-full object-cover rounded-r-2xl'></img>                    
          </div>
        </div>
        <div className="flex flex-col items-start pt-4">
          <p className="h2">ตัวอย่างงานติดตั้ง</p>
          <p className="p">ตัวอย่างงานติดตั้งระแนงไวนิล GREENWOOD</p>        
        </div>   
        <GreenwoodProduct />
      </div>

      <div className='pb-4 w-full' id='items'>
        <div className="flex flex-col items-start pt-6 lg:pt-12 mb-4">
          <p className="h1">ชิ้นส่วนระแนง</p>
          <p className="p">ไอคอนรูฟมีชิ้นส่วนระแนงขายปลีก ไม่ว่าจะเป็นเส้นระแนงไวนิล กระทงแบบต่าง ๆ หรือ บัวเก็บรอยต่อ</p>        
        </div>     
        <Products />
      </div>

      
      



    </div>
    </>    
  )
}


export default ProductPage
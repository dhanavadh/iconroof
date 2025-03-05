import React from 'react'
import Alert from '../components/Alert'
import ProductSlider from '../components/ProductSlider'
import Link from 'next/link'
import ProductsList from '../components/ProductList'
import ScgProduct from '../components/scg/ScgProduct'
import AmigoProduct from '../components/Amigo/AmigoProduct'
import GreenwoodProduct from '../components/Greenwood/GreenwoodProduct'
import Products from '../components/Products'

const ProductPage = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen items-start mx-6 md:mx-20 font-[family-name:var(--font-noto-sans)]">      
      <div className="flex flex-col items-start pt-24 mb-4 w-full border-b-2  border-neutral-200">
        <p className="h1">เลือกดูผลิตภัณฑ์ระแนง</p>
        <div className='flex flex-col lg:flex-row gap-4 font-medium py-4'>
          <Link className='link' href='#scg'>ระแนงไวนิล SCG BOX SET</Link>
          <Link className='link' href='#amigo'>ระแนงไวนิล AMIGO</Link>
          <Link className='link' href='#greenwood'>ระแนงไวนิล GREENWOOD</Link>
          <Link className='link' href='#items'>ชิ้นส่วนระแนง</Link>          
          <p className='link'>ฝ้าระแนง</p>
        </div>
      </div>   
      <div className='flex flex-col lg:flex-row bg-green-700'>
        <div className='lg:hidden flex w-full'>
          <img src='asset/amigo.png' className='w-full h-full object-cover'></img>
        </div>
        <div className='flex w-full lg:w-2/6 row-span-4 py-8 lg:py-12 flex-col items-start px-8 lg:px-12 gap-12 justify-between  text-white'>
          <div>
            <p className='text-3xl lg:text-5xl font-semibold lg:leading-normal leading-normal'>สร้างความเป็นส่วนตัวให้กับบ้านของคุณ</p>
            <p className='text-lg mt-2 font-medium'>เลือกดูผลิตภัณฑ์ระแนงที่สนใจได้แล้วที่นี่</p>
          </div>
          <Link href='#scg' className='btn-primary-static-1'>เลือกระแนง</Link>
        </div>
        <div className='hidden lg:flex w-full lg:w-4/6'>
          <img src='asset/amigo.png' className='w-full h-full object-cover'></img>
        </div>
      </div>

      <div className='pb-4 border-b-2 border-neutral-200 w-full' id='scg'>
        <div className="flex flex-col items-start pt-12 mb-4">
          <p className="h1">ระแนงไวนิล SCG BOX SET</p>
          <p className="p">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>        
        </div>     

        <div className='flex flex-col lg:flex-row bg-neutral-100'>
          <div className='lg:hidden flex w-full'>
            <img src='asset/amigo.png' className='w-full h-full object-cover'></img>
          </div>
          <div className='flex w-full lg:w-2/6 row-span-4 py-8 lg:py-12 flex-col items-start px-8 lg:px-12 gap-12 justify-between'>
            <div>
              <p className='text-3xl lg:text-5xl font-semibold lg:leading-normal leading-normal text-[#ED1C24]'>ระแนงไวนิล SCG BOX SET</p>
              <p className='text-lg mt-2 font-medium text-[#ED1C24]'>สร้างสรรค์ความงามได้หลากหลาย ภายใต้คุณภาพที่เป็นมาตรฐาน</p>
            </div>
            <div className='flex gap-2 flex-row lg:flex-col text-center xl:flex-row'>
              <Link href='/products' className='px-4 py-2 rounded-full border-2 border-[#ED1C24] bg-[#ED1C24] text-white font-medium hover:bg-[#C61017] hover:border-[#C61017] cursor-pointer transition-colors duration-300'>สั่งซื้อสินค้า</Link>
              <Link href='/products' className='px-4 py-2 rounded-full border-2 border-neutral-100 bg-neutral-100 text-black font-medium hover:bg-neutral-200 hover:border-neutral-200 cursor-pointer transition-colors duration-300'>ดูรายละเอียด</Link>
            </div>
          </div>
          <div className='hidden lg:flex w-full lg:w-4/6'>
            <img src='asset/scg.png' className='w-full h-full object-cover'></img>                    
          </div>
        </div>
        <div className="flex flex-col items-start pt-4">
          <p className="h2">ตัวอย่างงานติดตั้ง</p>
          <p className="p">ตัวอย่างงานติดตั้งระแนงไวนิล SCG BOX SET และ SCG VALUE SET</p>        
        </div>   
        <ScgProduct />
      </div>
      
      <div className='pb-4 border-b-2 border-neutral-200 w-full' id='amigo'>
        <div className="flex flex-col items-start pt-12 mb-4">
          <p className="h1">ระแนงไวนิล AMIGO</p>
          <p className="p">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>        
        </div>     

        <div className='flex flex-col lg:flex-row bg-neutral-100'>
          <div className='lg:hidden flex w-full'>
            <img src='asset/amigo-1.png' className='w-full h-full object-cover'></img>
          </div>
          <div className='flex w-full lg:w-2/6 row-span-4 py-8 lg:py-12 flex-col items-start px-8 lg:px-12 gap-12 justify-between'>
            <div>
              <p className='text-3xl lg:text-5xl font-semibold lg:leading-normal leading-normal text-blue-600'>ระแนงไวนิล AMIGO</p>
              <p className='text-lg mt-2 font-medium text-blue-600'>หมดปัญหาเรื่องปลวกและเชื้อรา ไม่ปิดตัว ไม่บวมน้ำ ทนต่อแสงแดด มีอายุการใช้งานที่ยาวนาน</p>
            </div>
            <div className='flex gap-2 flex-row lg:flex-col text-center xl:flex-row'>
              <Link href='/products' className='px-4 py-2 rounded-full border-2 border-blue-600 bg-blue-600 text-white font-medium hover:bg-blue-700 hover:border-blue-700 cursor-pointer transition-colors duration-300'>สั่งซื้อสินค้า</Link>
              <Link href='/products' className='px-4 py-2 rounded-full border-2 border-neutral-100 bg-neutral-100 text-black font-medium hover:bg-neutral-200 hover:border-neutral-200 cursor-pointer transition-colors duration-300'>ดูรายละเอียด</Link>
            </div>
          </div>
          <div className='hidden lg:flex w-full lg:w-4/6'>
            <img src='asset/amigo-1.png' className='w-full h-full object-cover'></img>                    
          </div>
        </div>
        <div className="flex flex-col items-start pt-4">
          <p className="h2">ตัวอย่างงานติดตั้ง</p>
          <p className="p">ตัวอย่างงานติดตั้งระแนงไวนิล SCG BOX SET และ SCG VALUE SET</p>        
        </div>   
        <AmigoProduct />
      </div>      

      <div className='pb-4 w-full border-b-2 border-neutral-200' id='greenwood'>
        <div className="flex flex-col items-start pt-12 mb-4">
          <p className="h1">ระแนงไวนิล GREENWOOD</p>
          <p className="p">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>        
        </div>     

        <div className='flex flex-col lg:flex-row bg-neutral-100'>
          <div className='lg:hidden flex w-full'>
            <img src='asset/greenwood1.png' className='w-full h-full object-cover'></img>
          </div>
          <div className='flex w-full lg:w-2/6 row-span-4 py-8 lg:py-12 flex-col items-start px-8 lg:px-12 gap-12 justify-between'>
            <div>
              <p className='text-3xl lg:text-5xl font-semibold lg:leading-normal leading-normal text-[#F5951D]'>ระแนงไวนิล GREENWOOD</p>
              <p className='text-lg mt-2 font-medium text-[#F5951D]'>ผลิตภัณฑ์ไม้สังเคราะห์ที่มีส่วนผสมของไม้ธรรมชาติ จึงให้ผิวสัมผัสและภาพลักษณ์เสมือนไม้จริง</p>
            </div>
            <div className='flex gap-2 flex-row lg:flex-col text-center xl:flex-row'>
              <Link href='/products' className='px-4 py-2 rounded-full border-2 border-[#F5951D] bg-[#F5951D] text-white font-medium hover:bg-[#D77C0A] hover:border-[#D77C0A] cursor-pointer transition-colors duration-300'>สั่งซื้อสินค้า</Link>
              <Link href='/products' className='px-4 py-2 rounded-full border-2 border-neutral-100 bg-neutral-100 text-black font-medium hover:bg-neutral-200 hover:border-neutral-200 cursor-pointer transition-colors duration-300'>ดูรายละเอียด</Link>
            </div>
          </div>
          <div className='hidden lg:flex w-full lg:w-4/6'>
            <img src='asset/greenwood1.png' className='w-full h-full object-cover'></img>                    
          </div>
        </div>
        <div className="flex flex-col items-start pt-4">
          <p className="h2">ตัวอย่างงานติดตั้ง</p>
          <p className="p">ตัวอย่างงานติดตั้งระแนงไวนิล SCG BOX SET และ SCG VALUE SET</p>        
        </div>   
        <GreenwoodProduct />
      </div>

      <div className='pb-4 w-full' id='items'>
        <div className="flex flex-col items-start pt-12 mb-4">
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
"use client"
import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import Link from 'next/link'
import AmigoSlider from '../../components/Amigo/AmigoSlider'
import AmigoProduct from '@/app/components/Amigo/AmigoProduct'
import ScgProduct from '@/app/components/scg/ScgProduct'
import Products from '@/app/components/Products'

const ProductListPage = () => {
  return (
    <div className='flex flex-col items-center sm:items-start justify-center w-full mt-2 mb-6'>
      <TabGroup as={Fragment}>
      <TabList className="flex space-x-1.5 bg-white px-1.5 py-1.5 rounded-full shadow-md sm:text-base text-sm">
        <Tab as={Fragment}>
          {({ hover, selected }) => (
            <button className={clsx('px-3 py-1 rounded-full outline-transparent',hover && 'bg-neutral-200 duration-300', selected && 'bg-neutral-100 text-black')}>โปรโมชั่น</button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ hover, selected }) => (
            <button className={clsx('px-3 py-1 rounded-full outline-transparent',hover && 'bg-neutral-200 duration-300', selected && 'bg-neutral-100 text-black')}>Amigo</button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ hover, selected }) => (
            <button className={clsx('px-3 py-1 rounded-full outline-transparent',hover && 'bg-neutral-200 duration-300', selected && 'bg-neutral-100 text-black')}>SCG</button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ hover, selected }) => (
            <button className={clsx('px-3 py-1 rounded-full outline-transparent',hover && 'bg-neutral-200 duration-300', selected && 'bg-neutral-100 text-black')}>ชิ้นส่วนระแนง</button>
          )}
        </Tab>
      </TabList>
      <TabPanels className="w-full mt-4">
        <TabPanel>
          <AmigoSlider />
        </TabPanel>        
        <TabPanel>
          <div className='pb-4 w-full' id='amigo'>
            <div className="flex flex-col items-start mb-4">
              <p className="h2">ระแนงไวนิล AMIGO</p>
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
        </TabPanel>
        <TabPanel>

          <div className='pb-4 w-full' id='scg'>
        <div className="flex flex-col items-start mb-4">
          <p className="h2">ระแนงไวนิล SCG BOX SET</p>
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
          
        </TabPanel>
        <TabPanel>
          <div className='pb-4 w-full' id='items'>
            <div className="flex flex-col items-start mb-4">
              <p className="h2">ชิ้นส่วนระแนง</p>
              <p className="p">ไอคอนรูฟมีชิ้นส่วนระแนงขายปลีก ไม่ว่าจะเป็นเส้นระแนงไวนิล กระทงแบบต่าง ๆ หรือ บัวเก็บรอยต่อ</p>        
            </div>     
            <Products />
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>  
    </div>
  )
}

export default ProductListPage
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
import AmigoSliderPrev from '../amigo/AmigoSliderPrev'
import ScgSliderPrev from '../scg/ScgSliderPrev'
import AmigoCompare from '@/app/components/Amigo/AmigoCompare'
import AmigoGallerry from '@/app/components/Amigo/AmigoGallerry'
import AmigoA60Product from '@/app/components/Amigo/AmigoA60'

const ProductListPage = () => {
  return (
    <div className='flex flex-col items-center sm:items-start justify-center w-full mt-2'>
      <TabGroup as={Fragment}>
      <TabList className="flex space-x-1.5 bg-white px-1.5 py-1.5 rounded-full shadow-md sm:text-base text-sm mb-6">
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
              <p className="text-2xl font-medium lg:text-3xl">ระแนงไวนิล AMIGO</p>
              <p className="text-base mt-2 lg:font-medium">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>        
            </div>     

            <AmigoSliderPrev />

            

            <div className="flex flex-col items-start pt-6 pb-4" id='compare'>
              <p className="text-xl font-medium lg:text-2xl">เปรียบเทียบคุณสมบัติระแนง</p>
              <p className="text-base mt-2 lg:font-medium">เปรียบเทียบข้อดี–ข้อเสียระหว่างระแนง AMIGO และ ระแนงไม้</p>        
            </div>   
            <AmigoCompare />

            <div className="flex flex-col items-start pt-6 pb-4" id='a60'>
              <p className="text-xl font-medium lg:text-2xl">ระแนงไวนิล A60 , A40</p>
              <p className="text-base mt-2 lg:font-medium">Iconroof จัดจำหน้าย ระแนงไวนิล A60 , A40</p>        
            </div>   
            <AmigoA60Product />

            <div className="flex flex-col items-start pt-6 pb-4" id='preview'>
              <p className="text-xl font-medium lg:text-2xl">ตัวอย่างงานติดตั้ง</p>
              <p className="text-base mt-2 lg:font-medium">ตัวอย่างงานติดตั้งระแนงไวนิล Amigo</p>        
            </div>   
            <AmigoGallerry />
          </div>  
        </TabPanel>
        <TabPanel>

          <div className='pb-4 w-full' id='scg'>
        <div className="flex flex-col items-start mb-4">
          <p className="text-2xl font-medium lg:text-3xl">ระแนงไวนิล SCG BOX SET</p>
          <p className="text-base mt-2 lg:font-medium">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>        
        </div>     

        <ScgSliderPrev />

        
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
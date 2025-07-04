'use client';
import Link from 'next/link';
import React from 'react'
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';


const services = [
    { id:'1', name: 'ระแนงไวนิล AMIGO', des: 'ไม้สังเคราะห์ทำจากโพลิเมอร์ชนิดพิเศษทนทานจึงหมดปัญหาเรื่องปลวกและเชื้อราไม่ปิดตัว ไม่บวมน้ำ ทนต่อแสงแดด', image: '/asset/image.png', link: '/products/amigo' },
    { id:'2', name: 'ระแนงไวนิล SCG BOX SET', des: 'สร้างสรรค์ความงามได้หลากหลาย ภายใต้คุณภาพที่เป็นมาตรฐาน', image: '/asset/scg-ref.png', link: '/products' },
    { id:'3', name: 'ระแนง GREENWOOD', des: 'ผลิตภัณฑ์ไม้สังเคราะห์ที่มีส่วนผสมของไม้ธรรมชาติ จึงให้ผิวสัมผัสและภาพลักษณ์เสมือนไม้จริง มากกว่าวัสดุทดแทนไม้ชนิดอื่นๆ', image: '/asset/greenwood.png', link: '/products' },
    { id:'4', name: 'ชิ้นส่วนระแนง', des: 'ไอคอนรูฟมีชิ้นส่วนระแนงขายปลีก ไม่ว่าจะเป็นเส้นระแนงไวนิล กระทงแบบต่าง ๆ หรือ บัวเก็บรอยต่อ', image: '/products/เส้นระแนงA60_400x400_1.jpg', link: '/products' },    
    { id:'5', name: 'ฝ้าระแนง', des: 'ฝ้าระแนงลายไม้ wpc ไฟเบอร์ซีเมนต์ ไวนิล Amigo หรือ อะลูมิเนียมลายไม้ก็มีพร้อมให้เลือกสรร', image: '/asset/roof-1.png', link: '/products' },    
    
]

const ProductsList = () => {
    
  return (
    <>
        <div className="w-full overflow-x-auto bg-red scrollbar-hide">
            <div className="whitespace-nowrap">
                <ul className='flex'>
                    {services.map((item) => (
                        <li key={item.id}>
                            <Link href={item.link} className='grid w-72 md:w-96 items-center mx-2 mt-4 mb-10 bg-gray-50 shadow-md rounded-lg duration-300 hover:shadow-xl '>
                                <div className='relative h-64'>
                                    <Image width={384} height={256} src={item.image} className='w-full h-full object-cover absolute rounded-t-lg' alt={item.name}></Image>
                                </div>
                                <div className='flex flex-col p-6 whitespace-normal'>
                                    <div>
                                        <p className='text-lg lg:text-xl font-medium'>{item.name}</p>
                                        <p className='p line-clamp-2'>{item.des}</p>
                                    </div>                                        
                                    <p className="text-end mt-4 link">ดูสินค้า →</p>                              
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div> 
    </>
  );
};

export default ProductsList
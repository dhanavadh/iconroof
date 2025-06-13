'use client';
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import Image from 'next/image';

const services = [
    { id:'1', name: 'ระแนงไวนิล AMIGO', des: 'ไม้สังเคราะห์ทำจากโพลิเมอร์ชนิดพิเศษทนทานจึงหมดปัญหาเรื่องปลวกและเชื้อราไม่ปิดตัว ไม่บวมน้ำ ทนต่อแสงแดด', image: '/asset/image.png', link: '/products/amigo' },
    { id:'2', name: 'ระแนงไวนิล SCG BOX SET', des: 'สร้างสรรค์ความงามได้หลากหลาย ภายใต้คุณภาพที่เป็นมาตรฐาน', image: '/asset/scg-ref.png', link: '/products' },
    { id:'3', name: 'ระแนง GREENWOOD', des: 'ผลิตภัณฑ์ไม้สังเคราะห์ที่มีส่วนผสมของไม้ธรรมชาติ จึงให้ผิวสัมผัสและภาพลักษณ์เสมือนไม้จริง มากกว่าวัสดุทดแทนไม้ชนิดอื่นๆ', image: '/asset/greenwood.png', link: '/products' },
    { id:'4', name: 'ชิ้นส่วนระแนง', des: 'ไอคอนรูฟมีชิ้นส่วนระแนงขายปลีก ไม่ว่าจะเป็นเส้นระแนงไวนิล กระทงแบบต่าง ๆ หรือ บัวเก็บรอยต่อ', image: '/products/เส้นระแนงA60_400x400_1.jpg', link: '/products' },    
    { id:'5', name: 'ฝ้าระแนง', des: 'ฝ้าระแนงลายไม้ wpc ไฟเบอร์ซีเมนต์ ไวนิล Amigo หรือ อะลูมิเนียมลายไม้ก็มีพร้อมให้เลือกสรร', image: '/asset/roof-1.png', link: '/products' },    
    
]

const ProductsList = () => {
    const [isOpen, setIsOpen] = useState(true)    
  return (
    <>
        <div className="w-full overflow-x-auto bg-red scrollbar-hide">
            <div className="whitespace-nowrap">
                <ul className='flex'>
                    {services.map((item) => (
                        <li key={item.id}>
                            <Link href={item.link} className='grid w-72 md:w-96 items-center mx-2 mt-4 mb-10 bg-gray-50 shadow-md rounded-lg duration-300 hover:shadow-xl '>
                                <div className='relative h-64'>
                                    <img src={item.image} className='w-full h-full object-cover absolute rounded-t-lg' alt={item.name}></img>
                                </div>
                                <div className='flex flex-col p-6 whitespace-normal'>
                                    <div>
                                        <p className='text-lg lg:text-xl font-semibold'>{item.name}</p>
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

        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
              <div className="fixed inset-0 flex w-screen items-center justify-center backdrop-blur-sm font-[family-name:var(--font-noto-sans)]">
              <DialogPanel className="flex flex-col w-screen px-5 lg:px-20">
                  <div className="flex gap-4 flex-col items-center py-4 ">           
                      <Image
                          src="https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/Ads/promo-june-25.png"
                          alt="Iconroof"
                          width={1024}
                          height={1024}
                          className="h-80 w-80 md:h-[500px] md:w-[500px] rounded-md"
                      />          
                      <div className="flex flex-col lg:flex-row items-center gap-2">
                          <Link href='https://line.me/ti/p/@plk2013' target='_blank' className='px-4 py-2 rounded-full border-2 border-neutral-800 bg-neutral-800 text-white font-medium hover:bg-neutral-600 hover:border-neutral-600 cursor-pointer transition-colors duration-300 '>สั่งซื้อสินค้า</Link>                            
                          <button onClick={() => setIsOpen(false)} className='px-4 py-2 rounded-full border-2 border-neutral-100 bg-neutral-100 text-black font-medium hover:bg-neutral-200 hover:border-neutral-200 cursor-pointer transition-colors duration-300 mb-4 lg:mb-0'>เข้าเว็บไซต์</button>
                      </div>                                          
                  </div>
                                
              </DialogPanel>
              </div>
          </Dialog>
    </>
  );
};

export default ProductsList
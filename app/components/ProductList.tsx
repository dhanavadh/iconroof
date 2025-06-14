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
    const [isOpen, setIsOpen] = useState(true)
        
            function closeModal() {
                setIsOpen(false)
            }
        
            function openModal() {
                setIsOpen(true)
            } 
    
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

        <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 font-[family-name:var(--font-noto-sans)]" onClose={closeModal}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black/25" />
                  </Transition.Child>
        
                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 mx-2 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-neutral-100 p-6 text-center align-middle shadow-xl transition-all">
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                          >
                            โปรโมชั่นเดือนมิถุนายน
                          </Dialog.Title>
                          <div className="flex flex-col items-center gap-4 mt-2">                    
                            <Image
                              src="https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/Ads/promo-june-25.png"
                              alt="เพิ่มเพื่อนในไลน์"
                              width={512}
                              height={512}
                              className="mt-4 rounded-lg flex items-center justify-center"
                            />
                            <p className="text-sm text-gray-500">
                              ติดตั้งระแนงไวนิลเว้นร่อง <a className='font-medium underline underline-offset-4'>ตั้งแต่วันนี้ – 30 มิ.ย. 2568</a> จาก 1,900 ลดเหลือ 1,750 บาท/ตร.ม. *เงื่อนไขเป็นไปตามบริษัทกำหนด
                            </p>
                          </div>
        
                          <div className="flex justify-center gap-2 mt-4">
                            <Link
                              href="https://line.me/ti/p/@plk2013"
                              target="_blank"
                              rel="noopener noreferrer"
                              type="button"
                              className="btn-primary-line"
                              onClick={closeModal}
                            >
                              เพิ่มเพื่อนในไลน์
                            </Link>
                            <button
                              type="button"
                              className="btn-primary-static"
                              onClick={closeModal}
                            >
                              ปิด
                            </button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>    
    </>
  );
};

export default ProductsList
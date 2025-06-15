"use client";
import React, { useRef, useState, Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react'

const ScgSliderPrev = () => {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

  return (
    <>
        <Swiper    
        cssMode={true}    
        // navigation={true}
        pagination={{
            clickable: true,
          }}    
        mousewheel={true}
        keyboard={true}    
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper font-[family-name:var(--font-noto-sans)] rounded-2xl space-x-2"
      >
        <SwiperSlide className='max-w-72 mr-4 bg-orange-500 rounded-2xl max-h-lg'>         
          <Image alt='amigo' width={512} height={512} src='https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/Ads/promo-june-1.svg' className='flex w-full h-full object-cover rounded-t-2xl'></Image> 
                <div className='flex h-80 flex-col items-start justify-between text-white px-8 py-6'>
                    <div>                    
                        <p className='text-2xl font-medium lg:text-3xl leading-normal'>ติดตั้งระแนงไวนิลเหลือ 1,750 บาท/ตร.ม.*</p>
                        <p className='text-base mt-2 lg:font-medium overflow-hidden'>ติดตั้งระแนงไวนิลเว้นร่อง <a className='font-medium underline underline-offset-4'>ตั้งแต่วันนี้ – 30 มิ.ย. 2568</a> จาก 1,900 ลดเหลือ 1,750 บาท/ตร.ม. *เงื่อนไขเป็นไปตามบริษัทกำหนด</p>
                    </div>
                    <button onClick={openModal} className='btn-primary-static mb-3'>สั่งซื้อสินค้า</button>
                    
                </div>
        </SwiperSlide>
        <SwiperSlide className='bg-red-600 rounded-2xl max-w-72 md:max-w-4xl mr-4 max-h-lg'>  
            <div className='flex flex-col md:flex-row'>
                <div className='md:hidden flex w-[288px] h-[288px]'>
                <Image width={1920} height={1080} alt='ระแนงไวนิล amigo' src='https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/asset/scg.png' className='w-full h-full object-cover rounded-t-2xl'></Image>
                </div>
                <div className='flex w-full md:w-2/6 px-8 py-6 flex-col items-start justify-between gap-6 h-80 md:h-[608px]'>
                    <div className='text-white'>
                    <p className='text-2xl font-medium lg:text-3xl leading-normal'>ระแนงไวนิล SCG BOX SET</p>
                    <p className='text-base mt-2 lg:font-medium overflow-hidden'>สร้างสรรค์ความงามได้หลากหลาย ภายใต้คุณภาพที่เป็นมาตรฐาน</p>
                    </div>
                    <div className='flex items-end gap-2 flex-col text-center'>
                    <Link href='https://line.me/ti/p/@plk2013' target='_blank' className='btn-primary-static mb-3'>สั่งซื้อสินค้า</Link>                  
                    </div>
            </div>
            <div className='hidden md:flex w-4/6 h-[608px]'>
                <Image width={1920} height={1080} alt='ระแนงไวนิล amigo' src='https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/asset/scg.png' className='w-full h-full object-cover rounded-r-2xl'></Image>
            </div>
            </div>                     
        </SwiperSlide>
        

        

        
      </Swiper>

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
                    เพิ่มเพื่อนในไลน์
                  </Dialog.Title>
                  <div className="flex flex-col items-center gap-4 mt-2">                    
                    <Image
                      src="https://tvss01.iconroof.co.th/public/qr-line.svg"
                      alt="เพิ่มเพื่อนในไลน์"
                      width={128}
                      height={128}
                      className="mt-4 rounded-lg flex items-center justify-center"
                    />
                    <p className="text-sm text-gray-500">
                      สามารถแสกน QR Code เพื่อเพิ่มเพื่อนในไลน์ ยินดีให้คำปรึกษาฟรี
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
  )
}

export default ScgSliderPrev
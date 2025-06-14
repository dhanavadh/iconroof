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

const AdsSlider = () => {
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
        className="mySwiper font-[family-name:var(--font-noto-sans)] rounded-2xl"
      >

        {/* Parent Please Clone From This */}
        
        
        
        {/* <SwiperSlide>
            <Link href='/products/amigo' className='slider-core'>             
                <Image alt='amigo' width={1920} height={1080} src='/asset/amigo.png' className='hidden lg:flex absolute z-[-1] w-full h-full object-cover brightness-50'></Image>
                <Image alt='amigo' width={1920} height={1080} src='/asset/amigo.png' className='flex lg:hidden absolute z-[-1] w-full h-full object-cover brightness-50'></Image>
                <div className='text-area-padding'>
                    <p className='title-section link'>ระแนงไวนิล AMIGO</p>
                    <p className='subtitle-section'>ไม้สังเคราะห์ทำจากโพลิเมอร์ชนิดพิเศษทนทานจึงหมดปัญหาเรื่องปลวกและเชื้อราไม่ปิดตัว ไม่บวมน้ำ ทนต่อแสงแดด</p>
                </div>
            </Link>
        </SwiperSlide>  */}

        {/* <SwiperSlide>
            <div className='flex flex-col lg:flex-row bg-green-700 rounded-2xl'>
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
            </div>
        </SwiperSlide>  */}
        <SwiperSlide>
            <div className='flex flex-col md:flex-row bg-orange-500 h-full xl:h-[400px]'>
                {/* Mobile Size */}
                <div className='md:hidden flex w-full h-2/3'>
                    <Image src='https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/Ads/promo-img.png' height={930} width={1239} alt='promo-june' className='w-full h-64 md:h-full object-cover'></Image>
                </div>
                <div className='flex w-full md:w-2/6 row-span-4 py-6 lg:py-8 flex-col items-start px-8 lg:px-12 gap-6 justify-between text-white h-64 sm:h-72 md:h-full'>
                    <div>                    
                        <p className='text-2xl font-medium lg:text-4xl lg:leading-normal leading-normal'>ติดตั้งระแนงไวนิลเหลือ 1,750 บาท/ตร.ม.*</p>
                        <p className='text-base lg:text-lg mt-2 lg:font-medium overflow-hidden line-clamp-2 md:line-clamp-5'>ติดตั้งระแนงไวนิลเว้นร่อง <a className='font-medium underline underline-offset-4'>ตั้งแต่วันนี้ – 30 มิ.ย. 2568</a> จาก 1,900 ลดเหลือ 1,750 บาท/ตร.ม. *เงื่อนไขเป็นไปตามบริษัทกำหนด</p>
                    </div>
                    <button onClick={openModal} className='btn-primary-static '>สั่งซื้อสินค้า</button>
                    
                </div>
                <div className='hidden md:flex md:w-5/6'>
                    <Image src='https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/Ads/promo-img.png' height={930} width={1239} alt='promo-june' className='w-full h-64 md:h-full object-cover'></Image>
                </div>
            </div>
        </SwiperSlide> 

        <SwiperSlide>
            <div className='flex flex-col md:flex-row bg-green-700 h-full xl:h-[400px]'>
                {/* Mobile Size */}
                <div className='md:hidden flex w-full h-2/3'>
                    <Image src='https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/Ads/amigo-ads.png' height={930} width={1239} alt='promo-june' className='w-full h-64 md:h-full object-cover'></Image>
                </div>
                <div className='flex w-full md:w-2/6 row-span-4 py-6 lg:py-8 flex-col items-start px-8 lg:px-12 gap-6 justify-between text-white h-64 sm:h-72 md:h-full'>
                    <div>                    
                        <p className='text-2xl font-medium lg:text-4xl lg:leading-normal leading-normal'>สร้างความเป็นส่วนตัวให้กับบ้านของคุณด้วยระแนง Amigo</p>
                        <p className='text-base lg:text-lg mt-2 lg:font-medium overflow-hidden md:line-clamp-5'>เลือกดูผลิตภัณฑ์ระแนงที่สนใจได้แล้วที่นี่</p>
                    </div>
                    <button onClick={openModal} className='btn-primary-static '>สั่งซื้อสินค้า</button>
                    
                </div>
                <div className='hidden md:flex md:w-5/6'>
                    <Image src='https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/Ads/amigo-ads.png' height={930} width={1239} alt='promo-june' className='w-full h-64 md:h-full object-cover'></Image>
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

export default AdsSlider
"use client";
import React, { useState, Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react'

const services = [
    { id:'1', name: 'ระแนงไวนิล Amigo', des: 'ระแนงไวนิล Amigo ระบบ Clip Lock', image: 'https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/A60/หน้าแรกระแนงamigo.jpg', link: '/product' },    
    { id:'2', name: 'ระแนงไวนิล A40 เว้นร่อง', des: 'ระแนงไวนิล A40 เว้นร่อง 1cm. หน้ากว้าง 4cm.', image: 'https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/A60/A40เว้น.jpg', link: '/product' },
    { id:'3', name: 'ระแนงไวนิล A40 ร่องชิด', des: 'ระแนงไวนิล A40 ร่องชิด หน้ากว้าง 4cm.', image: 'https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/A60/A40ชิด.jpg', link: '/product' },
    { id:'4', name: 'ระแนงไวนิล A60 เว้นร่อง', des: 'ระแนงไวนิล A60 เว้นร่อง 1cm. หน้ากว้าง 6cm.', image: 'https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/A60/A60เว้น.jpg', link: '/product' },
    { id:'5', name: 'ระแนงไวนิล A60 ร่องชิด', des: 'ระแนงไวนิล A60 ร่องชิด หน้ากว้าง 6cm.', image: 'https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/A60/A60ชิด.jpg', link: '/product' },    
    { id:'6', name: 'ระแนงไวนิล A60 บานเกล็ด', des: 'ระแนงไวนิล A60 บานเกล็ด หน้ากว้าง 6cm.', image: 'https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/A60/A60บานเกล็ดแก้.jpg', link: '/product' },    
    
]

const AmigoA60Product = () => {
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


        {services.map((item) => (
            <SwiperSlide className='max-w-72 mr-4 bg-white rounded-2xl max-h-lg hover:cursor-pointer mb-2 shadow-md' key={item.id} onClick={openModal}>         
                <div className='flex h-[288px]'>
                  <Image width={512} height={512} alt='ระแนงไวนิล amigo' src={item.image} className='w-full h-full object-cover rounded-t-2xl'></Image>
                </div>
                <div className='flex h-32 flex-col items-start justify-center  px-8 py-6'>
                    <div>                    
                        <p className='text-lg font-medium lg:text-xl leading-normal text-black'>{item.name}</p>
                        <p className='text-base mt-2 lg:font-medium overflow-hidden text-black/60'>{item.des}</p>
                    </div>                    
                </div>
        </SwiperSlide>
        ))}
        


        
        

        

        
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
  );
};

export default AmigoA60Product
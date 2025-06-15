'use client';
import Link from 'next/link';
import React from 'react'
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';

const HeadAds = () => {
    const [isOpen, setIsOpen] = useState(false)
    
        function closeModal() {
            setIsOpen(false)
        }
    
        function openModal() {
            setIsOpen(true)
        } 
  return (
    <>
    <div className='flex flex-row items-center justify-between font-[family-name:var(--font-noto-sans)] px-8 h-12 bg-amber-100 text-amber-600 font-medium w-full top-0 left-0 right-0 z-50 gap-4 border-l-8 border-amber-500'>                    
        <div className='hidden lg:flex'>
            <button onClick={openModal} className='font-medium underline underline-offset-4 lg:mr-4'>โปรโมชั่น</button>              
        </div>
        <div className="hidden lg:flex max-w-[800px] overflow-hidden whitespace-nowrap">
                <div className="inline-block animate-marquee">
                    <p>🎉 ติดตั้งระแนงไวนิลเว้นร่อง ตั้งแต่วันนี้ – 30 มิ.ย. 2568 จาก 1,900 ลดเหลือ 1,750 บาท/ตร.ม.* 🎊</p>
                </div>
            </div>
        <div className="lg:hidden max-w-screen-lg overflow-hidden whitespace-nowrap">
                <div className="inline-block animate-marquee">
                    <p>🎉 ติดตั้งระแนงไวนิลเว้นร่อง ตั้งแต่วันนี้ – 30 มิ.ย. 2568 จาก 1,900 ลดเหลือ 1,750 บาท/ตร.ม.* 🎊</p>
                </div>
        </div>  
        
        <p className='hidden lg:flex'>* เงื่อนไขเป็นไปตามบริษัทกำหนด</p>
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
    
  )
}

export default HeadAds
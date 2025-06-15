'use client';
import Link from 'next/link';
import { useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';

const JuneAds = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const popupShown = localStorage.getItem('popupShown');
        if (!popupShown) {
            setShowPopup(true);
            localStorage.setItem('popupShown', 'true');
        }
    }, []);
    
    const handleClosePopup = () => {
        setShowPopup(false);
    };

  return (
    <>
    {showPopup && (
        <Transition appear show={showPopup} as={Fragment}>
                <Dialog as="div" className="relative z-50 font-[family-name:var(--font-noto-sans)]" onClose={handleClosePopup}>
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
                              onClick={handleClosePopup}
                            >
                              เพิ่มเพื่อนในไลน์
                            </Link>
                            <button
                              type="button"
                              className="btn-primary-static"
                              onClick={handleClosePopup}
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

    )}
    
    
    </>
    
  )
}

export default JuneAds
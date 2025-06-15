'use client';
import Link from 'next/link';
import { useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';

const CookieAlert = () => {
    const [showPopupCookie, setShowPopupCookie] = useState(false);

    useEffect(() => {
        const cookiePopupShown = localStorage.getItem('cookiePopupShown');
        if (!cookiePopupShown) {
            setShowPopupCookie(true);
            localStorage.setItem('cookiePopupShown', 'true');
        }
    }, []);
    
    const handleClosePopupCookie = () => {
        setShowPopupCookie(false);
    };

  return (
    <>
    {showPopupCookie && (
        <Transition appear show={showPopupCookie} as={Fragment}>
                <Dialog as="div" className="relative z-50 font-[family-name:var(--font-noto-sans)]" onClose={handleClosePopupCookie}>
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
                    <div className="flex min-h-full place-items-end justify-start p-4 mx-2 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-neutral-100 p-6 text-start align-middle shadow-xl transition-all">
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                          >
                            เว็บไซต์นี้ใช้คุกกี้
                          </Dialog.Title>
                          <div className="flex flex-col items-start gap-4 mt-2">                    
                            <p className="text-sm text-gray-500">
                              การเข้าใช้งานเว็บไซต์นี้แสดงว่าคุณยินยอมให้เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งานของคุณ
                            </p>
                          </div>
        
                          <div className="flex justify-start gap-2 mt-4">                            
                            <button
                              type="button"
                              className="btn-primary-static"
                              onClick={handleClosePopupCookie}
                            >
                              รับทราบ
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

export default CookieAlert
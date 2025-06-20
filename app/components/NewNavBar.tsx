'use client'
import Link from 'next/link';
import { useState, useEffect, useRef, Fragment } from 'react';
import { Button, Dialog, DialogPanel, Transition } from '@headlessui/react'
import Image from 'next/image';
import HeadAds from './topAds';
import clsx from 'clsx';

  const logo = [
    '/icon/new_iconroof.svg',
    '/icon/new_iconroof_orange.svg',
    '/icon/iconroof.svg',
    '/icon/iconroof-black.svg',
  ]
  const btnDec = [
    `btn-primary`,
    `btn-primary-static-rounded`,
  ]
  const navtext = [
    `flex font-medium text-white`,
    `flex font-medium text-black`
  ]

  const NavLink = [
    {name: 'สินค้า', href: '/products', target: `_self`},
    {name: 'ผลงาน', href: '/preview', target: `_self`}, 
    {name: 'ช่างทำระแนง', href: '/service', target: `_self`}, 
    {name: 'บทความ', href: '/blogs', target: `_self`},
    {name: 'แผ่นหลังคา', href: 'https://www.xn--42cf7cl0c9a5bk1kzc.com/', target: `_blank`}
]


function NewNavbar() {    
    //NavCo
    const [color, setColor ] = useState(true);
    const [isOpen, setIsOpen] = useState(false)    
    const lastScrollY = useRef(0);

    const changeColor = () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY <= 24) {
            // At the top of the page
            setColor(true);
        } else if (currentScrollY < lastScrollY.current) {
            // Scrolling up            
            setColor(true);
        } else if (currentScrollY > lastScrollY.current) {
            // Scrolling down
            setColor(false);
        }
        
        lastScrollY.current = currentScrollY;
    }

    useEffect(() => {
        lastScrollY.current = window.scrollY;
        window.addEventListener('scroll', changeColor);
        
        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);
    
    return (
        <div>                 
            <div className="flex flex-col items-center justify-center font-[family-name:var(--font-ibm-plex-sans-thai)]">
            
            <div className="flex justify-between flex-col">                    
                <div className={color ? 'navbar top-0 duration-300' : 'navbar -top-20 duration-300'}>                    
                <div className="flex items-center transition-colors duration-300">
                    <Link className="cursor-pointer" href='/'>
                        <Image width={218} height={38} className="h-8 w-auto"
                        src={color ? logo[1] : logo[1]} alt="Iconroof Logo"/>
                    </Link>
                </div>       
                {/* Menu Item              */}
                <div className="items-center hidden lg:flex space-x-8 text-black font-medium">
                    {NavLink.map((index) => (
                    <Link
                    key={index.name}
                    href={index.href}
                    target={index.target}
                    className={`after:duration-600 ease-out after:block after:h-1 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-amber-500 after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100` }>
                    {index.name}
                    </Link>
                    ))}
                    
                </div>
                {/* LG Button */}
                <div className="hidden lg:flex items-center text-black font-medium">
                    <Link className="btn-primary-static" href='https://line.me/ti/p/@plk2013' target='_blank'>
                    สั่งซื้อสินค้า →
                    </Link>
                </div>
                <div className="lg:hidden flex items-center">
                    
                    <Button
                    type="button"
                    className={color ? btnDec[1] : btnDec[1]}   
                    onClick={() => setIsOpen(true)}                   
                    >
                    <Image width={32} height={32} className="h-8 w-8"
                    src="icon/notes_orange.svg" alt="Menu Icon"/>
                    </Button>
                </div>
                </div>
            </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 font-[family-name:var(--font-ibm-plex-sans-thai)]" onClose={() => setIsOpen(false)}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-500"
                    enterFrom="opacity-100"
                    enterTo="opacity-100"
                    leave="ease-in duration-500"
                    leaveFrom="opacity-0"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black/50 " />
                  </Transition.Child>
        
                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-start justify-between">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-500"
                        enterFrom="opacity-100 -translate-y-full"
                        enterTo="opacity-100"
                        leave="ease-in duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-100 -translate-y-full"
                      >
                        <Dialog.Panel className="flex flex-col w-full ">                            
                            <div className='flex w-full justify-between bg-[#E17100] h-[80px] p-4 border-b-2 border-[#C60]'>
                                <Image
                                  src={color ? logo[0] : logo[0]}
                                  alt="Iconroof Logo"
                                  width={172}
                                    height={30}
                                />
                                <button
                                    type="button"
                                    className='h-[48px] w-[48px] btn-primary-static-rounded'
                                    onClick={() => setIsOpen(false)}
                                    >
                                    <Image width={32} height={32} className="h-8 w-8"
                                    src="icon/close_orange.svg" alt="Menu Icon"/>                            
                                </button>                        
                            </div>  
                            <div className="flex flex-col">
                                {NavLink.map((index) => (
                                <Link
                                key={index.name}
                                href={index.href}
                                target={index.target}
                                className='flex items-center justify-between text-2xl bg-[#E17100] font-medium py-4 px-8 hover:bg-[#CC6600] text-white transition-colors duration-300 border-b-2 border-[#C60]'                        
                                onClick={() => setIsOpen(false)}>
                                {index.name}   
                                    <Image width={32} height={32} className="h-8 w-8"
                                    src="icon/arrow_right_alt.svg" alt="Menu Icon"/>                               
                                </Link>
                                ))}
                            </div>    
                            <div className='flex w-full py-4 px-8 justify-between items-center bg-[#fafafa]'>
                                <div>
                                    <Image
                                        src={color ? logo[2] : logo[2]}
                                        alt="Iconroof Logo"
                                        width={172}
                                            height={30}
                                        className='h-8 w-full'
                                    />                                    
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <Link href='tel:089-154-3355' target='_blank'>
                                        <Image width={32} height={32} className="h-6 sm:h-8 w-6 sm:w-8 hover:brightness-90 duration-300"
                                        src="icon/social/call.svg" alt="Call Icon"/>
                                    </Link>
                                    <Link href='https://line.me/ti/p/@plk2013' target='_blank'>
                                        <Image width={32} height={32} className="h-6 sm:h-8 w-6 sm:w-8 hover:brightness-90 duration-300"
                                        src="icon/social/line.svg" alt="Line Contact"/>
                                    </Link>
                                    <Link href='https://www.facebook.com/PLK2013/' target='_blank'>
                                        <Image width={32} height={32} className="h-6 sm:h-8 w-6 sm:w-8 hover:brightness-90 duration-300"
                                        src="icon/social/facebook.svg" alt="Facebook Icon"/>
                                    </Link>
                                    <Link href='https://www.youtube.com/@iconroof3391/videos' target='_blank'>
                                        <Image width={32} height={32} className="h-6 sm:h-8 w-6 sm:w-8 hover:brightness-90 duration-300"
                                        src="icon/social/youtube.svg" alt="YouTube Icon"/>
                                    </Link>
                                </div>
                            </div>    
                            <div className='flex flex-col items-start justify-center pt-2 pb-4 px-8 space-y-0 bg-[#fafafa] '>
                                <p className='text-lg font-medium text-neutral-800'>โชว์รูมไอคอนรูฟ</p>
                                <p className='text-base text-neutral-600 max-w-96'>หมู่บ้าน คนึงทิพย์ ถนน บางกรวย-ไทรน้อย กาญจนาภิเษก ตำบล บางบัวทอง อำเภอบางบัวทอง นนทบุรี 11110 เปิดทำการ จันทร์ - เสาร์ 8.00-18.00 น.</p>
                            </div>           
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>

            
        </div>
    );
}

export default NewNavbar;
'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react'
import ProductSlider from './ProductSlider';
import HeadAds from './topAds';

  const logo = [
    '/icon/iconroof-shadow-white.svg',
    '/icon/iconroof-shadow.svg',
    '/icon/iconroof-black.svg',
  ]
  const btnDec = [
    `btn-primary`,
    `btn-primary-static`
  ]
  const navtext = [
    `flex font-medium text-white link`,
    `flex font-medium text-black link`
  ]

  const NavLink = [
    {name: 'หน้าแรก', href: '/', target: `_self`}, 
    {name: 'สินค้า', href: '/products', target: `_self`},
    {name: 'ผลงาน', href: '/preview', target: `_self`}, 
    {name: 'ช่างทำระแนง', href: '/service', target: `_self`}, 
    {name: 'บทความ', href: '/blogs', target: `_self`},
    {name: 'แผ่นหลังคา', href: 'https://www.xn--42cf7cl0c9a5bk1kzc.com/', target: `_blank`}
]


function NavBarNormal() {    
    //NavCo
    const [color, setColor ] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 500){
            setColor(true)
        }else {
            setColor(false)
        }        

    }
    useEffect(() => {
      window.addEventListener('scroll', changeColor);
    }) 
    
    return (
        <div>    
            <HeadAds />        
            <div className="flex flex-col items-center justify-center font-[family-name:var(--font-noto-sans)] text-white">
                <div className="flex justify-between flex-col">                    
                    <div className='flex justify-between px-5 lg:px-20 py-3 w-full fixed top-12 left-0 right-0 z-50'>                    
                        <div className="flex items-center transition-colors duration-300">
                            <Link className="cursor-pointer" href='/'>
                                    <img className="h-8 object-cover"
                                        src={color ? logo[1] : logo[1]} alt="Iconroof">
                                    </img>
                            </Link>
                        </div>                    
                        <div className="items-center hidden lg:flex space-x-2 bg-white px-1.5 py-0.5 rounded-full shadow-md text-black font-medium">
                            {NavLink.map((index) => (
                            <Link
                            key={index.name}
                            href={index.href}
                            target={index.target}
                            className={`color ? navtext[1] : navtext[1] px-3 py-0.5 rounded-full outline-transparent hover:bg-neutral-200 duration-300` }>
                            {index.name}
                            </Link>
                            ))}
                            
                        </div>

                        <div className="hidden lg:flex items-center">
                            <a className='btn-primary-static' href='https://line.me/ti/p/@plk2013' target='_blank'>
                                สั่งซื้อสินค้า →
                            </a>
                        </div>
                        <div className="lg:hidden flex items-center">
                            
                                <a
                                type="button"
                                className={color ? btnDec[1] : btnDec[1]}   
                                onClick={() => setIsOpen(true)}                   
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                </svg>
                                </a>
                        </div>
                    </div>
                </div>
            </div>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-start justify-center backdrop-blur-3xl bg-neutral-200/80 font-[family-name:var(--font-noto-sans)] top-12">
            <DialogPanel className="flex flex-col w-screen">
                <div className="flex justify-between items-center py-4 px-5">                
                    <Link className="cursor-pointer" onClick={() => setIsOpen(false)} href='/'>
                        <img className="h-8 object-cover"
                        src={color ? logo[1] : logo[1]} alt="Iconroof">
                        </img>
                    </Link>
                    
                    <button onClick={() => setIsOpen(false)} className='btn-primary-static'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col mt-2 px-5">
                {NavLink.map((index) => (
                <Link
                key={index.name}
                href={index.href}
                className='h1 link py-2 px-4'                        
                onClick={() => setIsOpen(false)}>
                {index.name}
                </Link>
                ))}
                </div>                
            </DialogPanel>
            </div>
            </Dialog>
        </div>
    );
}

export default NavBarNormal;
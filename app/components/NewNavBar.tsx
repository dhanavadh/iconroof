'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react'

  const logo = [
    '/icon/iconroof-white.svg',
    '/icon/iconroof.svg',
    '/icon/iconroof-black.svg',
  ]
  const btnDec = [
    `btn-primary`,
    `btn-primary-dark`
  ]
  const navtext = [
    `flex font-medium text-white link`,
    `flex font-medium text-black link`
  ]

  const NavLink = [
    {name: 'หน้าแรก', href: '/'}, 
    {name: 'สินค้า', href: '/products'},
    {name: 'ผลงาน', href: '/preview'}, 
    {name: 'ช่างทำระแนง', href: '/staff'}, 
    {name: 'บทความ', href: '/blogs'}
]


function NewNavbar() {    
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
            <div className="flex flex-col items-center justify-center font-[family-name:var(--font-noto-sans)] text-white">
                <div className="flex flex-col">                    
                    <div className={color ? 'navbar-active' : 'navbar'}>                    
                        <div className="flex items-center transition-colors duration-300">
                            <Link className="cursor-pointer" href='/'>
                                    <img className="h-8 object-cover"
                                        src={color ? logo[1] : logo[0]} alt="Iconroof">
                                    </img>
                            </Link>
                        </div>                    
                        <div className="items-center hidden space-x-8 lg:flex">
                            {NavLink.map((index) => (
                                <Link
                                key={index.name}
                                href={index.href}
                                className={color ? navtext[1] : navtext[0]}>
                                {index.name}
                                </Link>
                            ))}
                            
                        </div>

                        <div className="hidden lg:flex items-center">
                            <a className={color ? btnDec[1] : btnDec[0]} href='https://line.me/ti/p/@plk2013' target='_blank'>
                                สั่งซื้อสินค้า →
                            </a>
                        </div>
                        <div className="lg:hidden flex items-center">
                            
                                <a
                                type="button"
                                className={color ? btnDec[1] : btnDec[0]}   
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
                <div className="fixed inset-0 flex w-screen items-start justify-center backdrop-blur-3xl bg-neutral-200/80 font-[family-name:var(--font-noto-sans)]">
                <DialogPanel className="flex flex-col w-screen px-10 lg:px-20">
                    <div className="flex justify-between items-center py-4">                
                        <Link className="cursor-pointer" onClick={() => setIsOpen(false)} href='/'>
                            <img className="h-8 object-cover"
                                src={color ? logo[1] : logo[1]} alt="Iconroof">
                            </img>
                        </Link>
                        <button onClick={() => setIsOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col mt-2">
                    {NavLink.map((index) => (
                        <Link
                        key={index.name}
                        href={index.href}
                        className='h4 link'                        
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

export default NewNavbar;
'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';

  const logo = [
    '/icon/iconroof-white.svg',
    '/icon/iconroof.svg',
  ]
  const btnDec = [
    `btn-primary`,
    `btn-primary-dark`
  ]
  const navtext = [
    `flex font-medium text-white link`,
    `flex font-medium text-black link`
  ]

function NewNavbar() {    
    //NavCo
    const [color, setColor ] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 150){
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
                                    {/* <div className={color ? navtext[1] : navtext[0]}>
                                        <p className="text-3xl">ไอคอน</p>
                                        <p className='text-3xl text-[#F5951D]'>รูฟ</p>
                                    </div> */}
                            </Link>
                        </div>                    
                        <div className="items-center hidden space-x-8 lg:flex">
                            <Link className={color ? navtext[1] : navtext[0]} href='/'>
                                หน้าแรก
                            </Link>
                            <Link className={color ? navtext[1] : navtext[0]} href='/products'>
                                สินค้า
                            </Link>
                            <Link className={color ? navtext[1] : navtext[0]} href='/preview'>
                                ผลงาน
                            </Link>
                            <Link className={color ? navtext[1] : navtext[0]} href='/staff'>
                                ช่างทำระแนง
                            </Link>
                            <Link className={color ? navtext[1] : navtext[0]} href='/blogs'>
                                บทความ
                            </Link>
                        </div>

                        <div className="items-center hidden space-x-5 lg:flex">

                            <a className={color ? btnDec[1] : btnDec[0]} href='https://line.me/ti/p/@plk2013' target='_blank'>
                                สั่งซื้อสินค้า →
                            </a>
                        </div>
                        <div className="lg:hidden flex items-center space-x-5">
                                <a
                                type="button"
                                className={color ? btnDec[1] : btnDec[0]}   
                                href='https://line.me/ti/p/@plk2013' target='_blank'                                      
                                >
                                สั่งซื้อสินค้า →                        
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewNavbar;
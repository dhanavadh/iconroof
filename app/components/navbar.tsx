'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';

  const logo = [
    'https://xn--72ca6bng5c5ell7l.com/wp-content/uploads/2024/12/icon-b.svg',
    'https://xn--72ca6bng5c5ell7l.com/wp-content/uploads/2024/12/icon-c.svg',
    'https://xn--72ca6bng5c5ell7l.com/wp-content/uploads/2024/12/icon-c.svg'
  ]
  const btnDec = [
    `btn-primary`,
    `btn-primary-dark`
  ]
  const navtext = [
    `flex font-medium text-black link`,
    `flex font-medium text-black link`
  ]

function Navbar() {    
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
            <div className="flex flex-col items-center justify-center">
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
                            <Link className={color ? navtext[1] : navtext[1]} href='/'>
                                หน้าแรก
                            </Link>
                            <Link className={color ? navtext[1] : navtext[1]} href='#product'>
                                สินค้า
                            </Link>
                            <Link className={color ? navtext[1] : navtext[1]} href='https://www.facebook.com/PLK2013/' target='_blank'>
                                ผลงาน
                            </Link>
                            <Link className={color ? navtext[1] : navtext[1]} href='#staff'>
                                ช่างทำระแนง
                            </Link>
                            <Link className={color ? navtext[1] : navtext[1]} href='#install'>
                                บทความ
                            </Link>
                        </div>

                        <div className="items-center hidden space-x-5 lg:flex">

                            <a className={color ? btnDec[1] : btnDec[1]} href='https://line.me/ti/p/@plk2013' target='_blank'>
                                สั่งซื้อสินค้า →
                            </a>
                        </div>
                        <div className="lg:hidden flex items-center space-x-5">
                                <a
                                type="button"
                                className={color ? btnDec[1] : btnDec[1]}   
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

export default Navbar;
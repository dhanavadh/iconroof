'use client'
import { useState, useEffect} from 'react';

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
    `flex font-medium text-[#F2F2F2] underline-thickness-1 underline-offset-4 hover:underline 
    cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-21 focus:ring-offset-1 focus:ring-[#f2f2f2]`,
    `flex font-medium text-[#1F1F1F] underline-thickness-1 underline-offset-4 hover:underline 
    cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-21 focus:ring-offset-1 focus:ring-[#1f1f1f]`
  ]
  const popupP = [
    `group relative flex items-center gap-x-2 rounded p-2 text-sm leading-4`,
    `block font-semibold text-[#1f1f1f] underline-thickness-1 underline-offset-4 hover:underline cursor-pointer transition-colors duration-300`,
    `flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#1f1f1f] underline-thickness-1 underline-offset-4 hover:underline cursor-pointer transition-colors duration-300`,
  ]

const isBrowser = () => typeof window !== 'undefined';

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
                    <nav className={color ? 'navbar-active' : 'navbar'}>

                    
                        <div className="flex items-center transition-colors duration-300">
                            <a className="cursor-pointer" href='/'>
                                    <img className="h-8 object-cover"
                                        src={color ? logo[1] : logo[0]} alt="Iconroof">
                                    </img>
                            </a>
                        </div>

                    
                        <div className="items-center hidden space-x-8 lg:flex">
                            <a className={color ? navtext[1] : navtext[1]} href='/'>
                                หน้าแรก
                            </a>
                            <a className={color ? navtext[1] : navtext[1]} href='/'>
                                สินค้า
                            </a>
                            <a className={color ? navtext[1] : navtext[1]} href='/'>
                                ผลงาน
                            </a>
                            <a className={color ? navtext[1] : navtext[1]} href='/'>
                                ช่างทำระแนง
                            </a>
                            <a className={color ? navtext[1] : navtext[1]} href='/'>
                                บทความ
                            </a>
                        </div>

                        <div className="items-center hidden space-x-5 lg:flex">

                            <a className={color ? btnDec[1] : btnDec[1]} >
                                สั่งซื้อสินค้า →
                            </a>
                        </div>
                        <div className="lg:hidden flex items-center space-x-5">
                                <button
                                type="button"
                                className={color ? btnDec[1] : btnDec[1]}                                         
                                >
                                <span className="sr-only">Open menu</span>
                                {/* Heroicon name: outline/menu */}                                
                                </button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
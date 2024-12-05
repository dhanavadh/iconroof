'use client'
import { Fragment, useState, useEffect} from 'react';
import Link from 'next/link';

  const logo = [
    'https://github.com/dhanavadh/iconroof/blob/main/public/icon/icon-b.svg',
  ]
  const btnDec = [
    `flex px-2 py-1 border-2 btn underline-thickness-1 hover:underline hover:bg-[#F2F2F2] hover:text-[#1F1F1F]
    cursor-pointer transition-colors duration-300`,
    `flex px-2 py-1 border-2 btn-active underline-thickness-1 hover:underline hover:bg-[#1F1F1F] hover:text-[#F2F2F2]
    cursor-pointer transition-colors duration-300`
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
    let [isOpen, setIsOpen] = useState(false)
  
    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
    //MoNav
    let [isStart, setIsStart] = useState(false)
  
    function closeModal1() {
        setIsStart(false)
    }
  
    function openModal1() {
        setIsStart(true)
    }
    //MoError
    let [isError, setIsError] = useState(false)
  
    function closeError() {
        setIsError(false)
    }
  
    function openError() {
        setIsError(true)
    }
    //NavCo
    const [color, setColor ] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 300){
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
                    
                    {/* <div class="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5
                        bg-blue-500"></div> */}

                    
                    <nav className={color ? 'navbar-active' : 'navbar'}>

                    
                        <div className="flex items-center transition-colors duration-300">
                            <a className="cursor-pointer" href='/'>
                                    <img className="h-12 object-cover"
                                        src={color ? logo[1] : logo[0]} alt="Artsgoz">
                                    </img>
                            </a>
                        </div>

                    
                        <div className="items-center hidden space-x-8 lg:flex">
                            <a className={color ? navtext[1] : navtext[0]} href='/'>
                                หน้าแรก
                            </a>
                        </div>

                        <div className="items-center hidden space-x-5 lg:flex">

                            <a className={color ? btnDec[1] : btnDec[0]}>
                                เข้าสู่ระบบ
                            </a>
                        </div>
                        <div className="lg:hidden flex items-center space-x-5">
                                <button
                                type="button"
                                className={color ? btnDec[1] : btnDec[0]}                 
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
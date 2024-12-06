"use client"
import React from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

const howToInstall = [
    { id:'1', name: 'หาระดับ นำโครงเหล็ก ขึ้นติดตั้งบนกำแพง', des: '98.00 – 130.00 บาท', image: './install/66094_0.jpg' },
    { id:'2', name: 'ติดตั้งกระทง ( ขาคลิปล็อก)  บนโครงเหล็ก ระยะห่าง ไม่เกิน 50-60 cm.', des: '138.00 – 184.00 บาท', image: './install/68587_0.jpg' },
    { id:'3', name: 'ตบระแนง เข้ากับ ขาคลิปล็อค', des: '382.00 – 509.00 ยาท', image: './install/69304.jpg' },
    { id:'4', name: 'ติดตั้งบัวเก็บขอบ', des: '382.00 – 509.00 บาท', image: './install/69305.jpg' },
    { id:'5', name: 'เช็ดทำความสะอาด ให้เรียบร้อย', des: '496.00 – 661.00 บาท', image: './install/68586_0.jpg' },    
    
]

const Instal1 = () => {

    let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
      }
    
      function close() {
        setIsOpen(false)
      }

  return (
    <div>
        <div className='grid px-5 md:px-20 bg-white justify-items-center'>
            <img src='./tool.svg' className='h-64 mb-10'></img>
            <p className='h1 mb-4 text-center'>ขั้นตอนการติดตั้งระแนงไวนิล</p>            
            <p className='h4 mb-4 text-center'>
            เพิ่มความเป็นส่วนตัวและความสวยงามให้บ้าน ด้วยการติดตั้งระแนงบังตาไอคอนรูฟที่ทำได้ง่ายและรวดเร็ว
            </p>
            <button onClick={open} type='button' className='btn-primary-dark mb-20'>                                    
                ดูวิธีการติดตั้ง →
            </button>                
        </div>
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed grid items-center inset-0 z-10 w-full overflow-x-auto backdrop-blur-lg duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 scrollbar-hide">
          <div className='whitespace-nowarp'>   
                <p className='ml-20 h1 mt-4 md:mt-20 mb-5'>ขั้นตอนการติดตั้ง</p>       
                <ul className='flex ml-20'>
                    {howToInstall.map((item) => (
                        <li key={item.id}>                            
                        <DialogPanel
                        transition
                        className="rounded-2xl w-64 md:w-80 bg-white drop-shadow-2xl mx-2 overflow-x-auto duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <div className='h-1/2'>
                                <img src={item.image} className='object-fill'></img>
                            </div>
                                   
                        </DialogPanel>
                        <div className=''>
                            <DialogTitle as="h3" className="h3 md:h2 pt-8 px-6">
                            ขั้นตอนที่ {item.id}
                            </DialogTitle>
                            <p className="mt-2 h4 px-6 pb-10 h-32">
                            {item.name}
                            </p>                 
                            </div>    
                        </li>    
                    ))}                
                </ul>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default Instal1
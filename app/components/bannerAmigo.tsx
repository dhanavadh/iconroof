"use client"
import Link from 'next/link'
import React from 'react'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

const BannerAmigo = () => {
    let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
      }
    
      function close() {
        setIsOpen(false)
      }

  return (
    <div>
        <div>
                <div className='flex max-h-3/4 relative'>
                    <img src='./dummy/386553469_288753940603765_1568237681837738945_n.jpg' className='rounded-xl w-full h-full absolute object-cover -z-[1] brightness-50'></img>                        
                    <div className='grid grid-rows mx-10 mt-48 mb-12'>
                        <p className='grid h1 text-white'>ไม้ระแนงไวนิล AMIGO</p>
                        <div className='flex flex-row gap-3 items-end'>
                            <p className='basis-5/6 h4 text-white mt-2 mr-10'>เป็นไม้สังเคราะห์ทำจากโพลิเมอร์ชนิดพิเศษทนทานจึงหมดปัญหาเรื่องปลวกและเชื้อราไม่ปิดตัว ไม่บวมน้ำ ทนต่อแสงแดด</p>
                            {/* Btn */}
                            <div className='basis-1/6'>
                                <div className='hidden md:grid justify-items-end'>
                                    <div className='flex items-center'>
                                        <button onClick={open} type='button' className='hidden lg:flex btn-primary'>                                    
                                        ดูเพิ่มเติม →
                                        </button>
                                        <button onClick={open}  type='button' className='lg:hidden flex btn-primary'>                                    
                                            <b>→</b>
                                        </button>
                                    </div>
                                </div>                           
                            </div>
                        </div>
                        <div className='md:hidden mt-10'>
                        <button onClick={open} type='button' className='btn-primary'>                                    
                                    ดูเพิ่มเติม →
                            </button>
                        </div>
                    </div>                    
                </div>                                   
        </div>

        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto backdrop-blur-2xl">
          <div className="flex min-h-full items-center justify-center">
            <DialogPanel
              transition
              className="w-full max-w-4xl rounded-xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >                
                    <div className='flex max-h-5/6 min-w-screen relative'>
                    <img src='./dummy/amigo1.jpg' className='md:rounded-xl rounded-none w-full h-full absolute object-cover -z-[1] brightness-50'></img>                        
                    <div className='grid grid-rows mx-10 mt-96 mb-12'>
                        <p className='grid h1 text-white'>ไม้ระแนงไวนิล AMIGO</p>                    
                            <p className='basis-5/6 h4 text-white mt-2 mr-10'>เป็นไม้สังเคราะห์ทำจากโพลิเมอร์ชนิดพิเศษทนทานจึงหมดปัญหาเรื่องปลวกและเชื้อราไม่ปิดตัว ไม่บวมน้ำ ทนต่อแสงแดด มีอายุการใช้งานที่ยาวนานมีรูปลักษณ์เหมือนไม้ธรรมชาติ มีขนาดให้เลือกหลากหลายได้มาตรฐาน ขนาดเที่ยงตรงมีสีในตัว ไม่ต้องตกแต่ง หรือเก็บรายละเอียดเพิ่มเติม จึงประหยัดเวลา พร้อมทั้งได้สีที่เนียนเรียบสวมงามไม่มีผลกระทบต่อสิ่งแวดล้อม ไม่เบียดเบียนธรรมชาติช่วยให้การใช้ไม้ธรรมชาติลดลง</p>
                        <div className='md:hidden mt-10'>
                        <button onClick={close} type='button' className='btn-primary'>                                    
                                    ปิด
                            </button>
                        </div>
                    </div>                    
                </div> 
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default BannerAmigo
import Link from 'next/link'
import React from 'react'

const ChangO = () => {
  return (
    <div>
        <div>
                <div className='flex max-h-3/4 relative'>
                    <img src='./dummy/447287027_857973139700979_8565335524056404313_n.jpg' className='rounded-xl w-full h-full absolute object-cover -z-[1] brightness-50'></img>                        
                    <div className='grid grid-rows mx-10 mt-48 mb-12'>
                        <p className='grid h1'>บริการติดตั้ง</p>
                        <div className='flex flex-row gap-3 items-end'>
                            <p className='basis-5/6 subheading mt-2 mr-10'>เป็นไม้สังเคราะห์ทำจากโพลิเมอร์ชนิดพิเศษทนทานจึงหมดปัญหาเรื่องปลวกและเชื้อราไม่ปิดตัว </p>
                            <div className='basis-1/6'>
                            <div className='grid justify-items-end'>
                                <div className='flex items-center btn-primary'>
                                    <Link href='/' target='_blank' type='button' className=''>
                                    
                                    ดูเพิ่มเติม →

                                </Link>
                                </div>
                            </div>                            
                            </div>
                        </div>
                    </div>                    
                </div>                                   
            </div>
    </div>
  )
}

export default ChangO
import Link from 'next/link'
import React from 'react'

const BannerAmigo = () => {
  return (
    <div>
        <div>
                <div className='flex max-h-3/4 relative'>
                    <img src='./dummy/386553469_288753940603765_1568237681837738945_n.jpg' className='rounded-xl w-full h-full absolute object-cover -z-[1] brightness-50'></img>                        
                    <div className='grid grid-rows mx-10 mt-48 mb-12'>
                        <p className='grid h1 text-white'>ไม้ระแนงไวนิล AMIGO</p>
                        <div className='flex flex-row gap-3 items-end'>
                            <p className='basis-5/6 h4 text-white mt-2 mr-10'>เป็นไม้สังเคราะห์ทำจากโพลิเมอร์ชนิดพิเศษทนทานจึงหมดปัญหาเรื่องปลวกและเชื้อราไม่ปิดตัว ไม่บวมน้ำ ทนต่อแสงแดด</p>
                            <div className='basis-1/6'>
                            <div className='grid justify-items-end'>
                                <div className='flex items-center'>
                                    <Link href='/' target='_blank' type='button' className='hidden lg:flex btn-primary'>                                    
                                    ดูเพิ่มเติม →
                                    </Link>
                                    <Link href='/' target='_blank' type='button' className='lg:hidden flex btn-primary'>                                    
                                        <b>&gt;</b>
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

export default BannerAmigo
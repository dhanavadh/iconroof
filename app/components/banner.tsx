import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div>
        <div>
                <div className='flex max-h-3/4 relative'>
                    <img src='./dummy/386553469_288753940603765_1568237681837738945_n.jpg' className='rounded-xl w-full h-full absolute object-cover -z-[1] brightness-50'></img>                        
                    <div className='grid grid-rows mx-10 mt-48 mb-12'>
                        <p className='grid h1'>ไม้ระแนงไวนิล AMIGO</p>
                        <div className='flex flex-row gap-3 items-end'>
                            <p className='basis-5/6 subheading mt-2 mr-10'>เป็นไม้สังเคราะห์ทำจากโพลิเมอร์ชนิดพิเศษทนทานจึงหมดปัญหาเรื่องปลวกและเชื้อราไม่ปิดตัว ไม่บวมน้ำ ทนต่อแสงแดด มีอายุการใช้งานที่ยาวนานมีรูปลักษณ์เหมือนไม้ธรรมชาติ มีขนาดให้เลือกหลากหลายได้มาตรฐาน ขนาดเที่ยงตรงมีสีในตัว ไม่ต้องตกแต่ง หรือเก็บรายละเอียดเพิ่มเติม จึงประหยัดเวลา พร้อมทั้งได้สีที่เนียนเรียบสวมงามไม่มีผลกระทบต่อสิ่งแวดล้อม ไม่เบียดเบียนธรรมชาติช่วยให้การใช้ไม้ธรรมชาติลดลง</p>
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

export default Banner
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='grid px-6 md:px-20 py-5 font-[family-name:var(--font-noto-sans)]'>        
        <div className='grid lg:flex items-start justify-between mb-10'>
            <div className='flex flex-col items-start gap-2 '>
                <Image src='./icon/iconroof.svg' alt='iconroof' width={200} height={100} className='mb-4'></Image>
                <div>
                    <p className='h4 mb-2'>โชว์รูมไอคอนรูฟ</p>
                    <p>หมู่บ้าน คนึงทิพย์ (โกดัง) </p>
                    <p>ถนน บางกรวย-ไทรน้อย กาญจนาภิเษก ตำบล บางบัวทอง อำเภอบางบัวทอง นนทบุรี 11110 (ซ.โรงหมี่ จากปากทาง เพียง 900 ม.)</p>
                    <p>เปิดทำการ จันทร์ - เสาร์ 8.00-18.00 น.</p>
                </div>
            </div>
            <div className='flex justify-between gap-6 mt-5 lg:mt-0'>
                <div className='mr-4'>
                    <p className='h4 mb-2'>ช่องทางการติดต่อ</p>
                    <div className='grid ml-2'>
                        <div className='flex items-center gap-2 mb-2'>
                            <img src='./icon/fb.svg' className='w-8'></img> 
                            <Link href='https://www.facebook.com/PLK2013/' target='_blank' className='link'>แผ่นหลังคาการช่าง หลังคากันสาดทุกชนิด </Link>
                        </div>
                        <div className='flex items-center gap-2 mb-2'>
                            <img src='./icon/Line.svg' className='w-8'></img> 
                            <Link href='https://line.me/ti/p/@plk2013' target='_blank' className='link'>@PLK2013</Link>
                        </div>
                        <div className='flex items-center gap-2 mb-2'>
                            <img src='./icon/tt.svg' className='w-8'></img> 
                            <Link href='https://www.tiktok.com/@iconroof_official1' target='_blank' className='link'>Iconroof Tiktok</Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='h4 mb-2'>สั่งซื้อสินค้า</p>
                    <p className='mb-1'>LINE@PLK2013</p>
                    <img src='./qr-line.svg' className='w-20'></img>                
                </div>
            </div>
        </div>
        <div className='grid justify-items-center py-2'>
            <p>สงวนลิขสิทธิ์ – Iconroof 2025</p>
        </div>
    </footer>
  )
}

export default Footer
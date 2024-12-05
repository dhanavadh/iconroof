import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='grid mx-20 pt-10 font-[family-name:var(--font-noto-sans)]'>        
        <div className='grid lg:flex gap-8 justify-center mb-5'>
            <div>
                <p className='h4 mb-2'>Iconroof Showroom</p>
                <p>หมู่บ้าน คนึงทิพย์ (โกดัง) </p>
                <p>ถนน บางกรวย-ไทรน้อย กาญจนาภิเษก ตำบล บางบัวทอง อำเภอบางบัวทอง นนทบุรี 11110 (ซ.โรงหมี่ จากปากทาง เพียง 900 ม.)</p>
                <p>เปิดทำการ จันทร์ - เสาร์ 8.00-18.00 น.</p>
            </div>
            <div className='mr-4'>
                <p className='h4 mb-2'>ช่องทางการติดต่อ</p>
                <div className='grid ml-2'>
                    <div className='flex gap-2 mb-2'>
                        <img src='./icon/Facebook.svg' className='w-8'></img> 
                        <Link href='https://www.facebook.com/PLK2013/' target='_blank' className='link'>แผ่นหลังคาการช่าง หลังคากันสาดทุกชนิด </Link>
                    </div>
                    <div className='flex gap-2 mb-2'>
                        <img src='./icon/Line.svg' className='w-8'></img> 
                        <Link href='https://www.facebook.com/PLK2013/' target='_blank' className='link'>แผ่นหลังคาการช่าง</Link>
                    </div>
                    <div className='flex gap-2 mb-2'>
                        <img src='./icon/Tiktok.svg' className='w-8'></img> 
                        <Link href='https://www.facebook.com/PLK2013/' target='_blank' className='link'>แผ่นหลังคาการช่าง หลังคากันสาดทุกชนิด </Link>
                    </div>
                </div>
            </div>
            <div className='grid justify-items-center'>
                <p className='h4 mb-2'>ติดต่อสั่งสินค้า</p>
                <p className='mb-1'>LINE@PLK2013</p>
                <img src='./qr-line.svg' className='w-20'></img>                
            </div>
        </div>
        <div className='grid justify-items-center py-2'>
            <p>สงวนลิขสิทธิ์ – Iconroof 2024</p>
        </div>
    </footer>
  )
}

export default Footer
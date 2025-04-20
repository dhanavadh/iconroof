import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NewFooter = () => {
  return (
    <div className='grid px-6 md:px-20 py-5 font-[family-name:var(--font-noto-sans)]'>
        <div className='pb-2 border-b-2 mb-4 border-neutral-200'>
            <Image src='/icon/iconroof.svg' alt='iconroof' width={200} height={100} className='mb-4'></Image>
        </div>
        <div className='grid lg:flex items-start justify-between mb-10 space-x-0 lg:space-x-4 '>
            
            <div className='flex flex-col items-start gap-2'>                
                <div className=''>
                    <p className='h4 mb-2'>โชว์รูมไอคอนรูฟ</p>
                    <p>หมู่บ้าน คนึงทิพย์ (โกดัง) </p>
                    <p>ถนน บางกรวย-ไทรน้อย กาญจนาภิเษก ตำบล บางบัวทอง อำเภอบางบัวทอง นนทบุรี 11110 (ซ.โรงหมี่ จากปากทาง เพียง 900 ม.)</p>
                    <p>เปิดทำการ จันทร์ - เสาร์ 8.00-18.00 น.</p>
                </div>
            </div>
            <div className='flex justify-between gap-6 mt-5 lg:mt-0'>
                <div className='mr-4'>
                    <p className='h4 mb-2'>ช่องทางการติดต่อ</p>
                    <div className='grid ml-1'>
                        <div className='flex items-center gap-2 mb-2'>
                            <Link href='https://www.facebook.com/PLK2013/' target='_blank' className='flex items-center link'>
                                <p className="text-base">Facebook แผ่นหลังคาการช่าง</p>
                                <Image
                                src='/icon/link.svg'
                                alt='Iconroof'
                                width={20}
                                height={20}
                                className='ml-2'
                                >
                                </Image>
                            </Link>
                        </div>
                        <div className='flex items-center gap-2 mb-2'>                            
                            <Link href='https://line.me/ti/p/@plk2013' target='_blank' className='flex items-center link'>
                                <p className="text-base">Line @PLK2013</p>
                                <Image
                                src='/icon/link.svg'
                                alt='Iconroof'
                                width={20}
                                height={20}
                                className='ml-2'
                                >
                                </Image>
                            </Link>
                        </div>
                        <div className='flex items-center gap-2 mb-2'>
                            <Link href='https://www.tiktok.com/@iconroof_official1' target='_blank' className='flex items-center link'>
                                <p className="text-base">Tiktok Iconroof</p>
                                <Image
                                src='/icon/link.svg'
                                alt='Iconroof'
                                width={20}
                                height={20}
                                className='ml-2'
                                >
                                </Image>
                            </Link>
                        </div>
                        <div className='flex items-center gap-2 mb-2'>
                            <Link href='https://www.youtube.com/@iconroof3391/videos' target='_blank' className='flex items-center link'>
                                <p className="text-base">YouTube Iconroof</p>
                                <Image
                                src='/icon/link.svg'
                                alt='Iconroof'
                                width={20}
                                height={20}
                                className='ml-2'
                                >
                                </Image>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='h4'>สั่งซื้อสินค้า</p>  
                    <img src='/qr-line.svg' className='w-20'></img>             
                    <Link href='https://line.me/ti/p/@plk2013' target='_blank' className='link mt-2 bg-[#06C755] px-2 py-1 rounded-full text-white text-[12px] font-semibold'>LINE@PLK2013</Link>
                </div>
            </div>
        </div>
        <div className='grid justify-items-center py-2'>
            <p>สงวนลิขสิทธิ์ – Iconroof 2025</p>
        </div>
    </div>
  )
}

export default NewFooter
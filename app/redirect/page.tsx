import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RedirectPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <div className='flex flex-col justify-center items-center'>
            <h2 className='h1'>คุณกำลังออกจากเว็บไซต์</h2>
            <p className='h4'>คุณสามารถติดต่อเราได้ผ่านช่องทางด้านล่างนี้</p>
        </div>
        <div className='flex lg:flex-row flex-col gap-4 mt-4'>
            <Link href='https://line.me/ti/p/@plk2013' target='_blank' className='flex items-center gap-4 p-4 bg-white shadow-md rounded-2xl w-48 hover:shadow-xl duration-300'>
                <Image src='/icon/Line.svg' alt='line-logo' width={100} height={100} className='w-12 h-12'/>
                <div>                    
                    <p className='text-base lg:text-lg font-[family-name:var(--font-noto-sans)] font-semibold'>@PLK2013</p>
                </div>
            </Link>
            <Link href='https://www.facebook.com/PLK2013/' target='_blank' className='flex items-center gap-4 p-4 bg-white shadow-md rounded-2xl w-48 hover:shadow-xl duration-300'>
                <Image src='/icon/fb.svg' alt='line-logo' width={100} height={100} className='w-12 h-12'/>
                <div>
                    <p className='text-base lg:text-lg font-[family-name:var(--font-noto-sans)] font-semibold'>แผ่นหลังคาการช่าง</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default RedirectPage
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='max-w-container min-h-12 flex items-center justify-between top-0 sticky bg-gray-100 font-[family-name:var(--font-noto-sans)]'>
        <div className='mx-10 my-2'>
            <img src='/logo.svg' className='w-40' />            
        </div> 
        <div className='flex mx-10 gap-4 justify-center'>
          <Link className='link' href='/'>ระแนงบังตา</Link>
          <Link className='link' href='/'>สินค้า</Link>
          <Link className='link' href='/'>บทความ</Link>
          <Link className='link' href='/'>ติดต่อ</Link>
          <Link className='link' href='/'>ช่างทำระแนง</Link>        
               
        </div>
        <div className='mx-10'>
        <Link className='line-button' href='/'>@ แอดไลน์</Link>   
        </div>
        
    </div>
  )
}

export default Navbar
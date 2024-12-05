import React from 'react'

const Navbar = () => {
  return (
    <div className='flex h-14 w-full background-red gap-3 items-center shadow-lg'>
        <div className='w-3/5 mx-10 my-2 border-2'>
            <img src='/logo.svg' className='w-48' />
            <a href='/' className='link'>ระแนงบังตา</a>
            <a href='/' className='link'>ผลงานของเรา</a>
            <a href='/' className='link'>สินค้า</a>
            <a href='/' className='link'>บทความ</a>
            <a href='/' className='link'>ติดต่อ</a>
        </div> 
        
    </div>
  )
}

export default Navbar
import Link from 'next/link';
import React from 'react'

const services = [
    { id:'1', name: 'ติดตั้งโครงเหล็ก', des: 'ขั้นตอนแรกจะทำการหาระดับ นำโครงเหล็ก ขึ้นติดตั้งบนกำแพง', image: '/install/66094_0.jpg', link: '/product' },
    { id:'2', name: 'ติดตั้งกระทง', des: 'ติดตั้งกระทง (ขาคลิปล็อก) บนโครงเหล็ก ระยะห่าง ไม่เกิน 50-60 cm.', image: '/install/68587_0.jpg', link: '/product' },
    { id:'3', name: 'ตบระแนง', des: 'หลังจากติดตั้งกระทงบนโครงเหล็ก ให้ตบระแนง เข้ากับ ขาคลิปล็อค', image: '/install/69304.jpg', link: '/product' },
    { id:'4', name: 'ติดตั้งบัวเก็บขอบ', des: 'ในขั้นตอนที่ 4 หลังจากตบระแนง เข้ากับ ขาคลิปล็อคแล้ว จะทำการติดตั้งบัวเก็บขอบ', image: '/install/69305.jpg', link: '/product' },    
    { id:'5', name: 'เก็บงานให้เรียบร้อย', des: 'หลังจากติดตั้งบัวเก็บขอบเสร็จเรียบร้อย จะเช็ดทำความสะอาด และตรวจงานให้เรียบร้อย', image: '/install/68586_0.jpg', link: '/product' },    
    
]

const InstallationList = () => {
  return (
    <>
        <div className="w-full overflow-x-auto bg-red scrollbar-hide">
            <div className="whitespace-nowrap">
                <ul className='flex'>
                    {services.map((item) => (
                        <li key={item.id}>
                            <div className='grid w-72 md:w-96 items-center mx-2 my-10 bg-gray-50 shadow-md rounded-2xl duration-300'>
                                <div className='relative h-80'>
                                    <img src={item.image} className='w-full h-full object-cover absolute rounded-t-lg' alt={item.name}></img>
                                </div>
                                <div className='flex flex-col p-6 whitespace-normal'>
                                    <div>
                                        <p className='text-lg lg:text-xl font-semibold'>{item.name}</p>
                                        <p className='p line-clamp-2 mb-2'>{item.des}</p>
                                    </div>                                                                            
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
  );
};

export default InstallationList
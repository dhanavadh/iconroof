import Link from 'next/link';
import React from 'react'

const services = [
    { id:'1', name: 'ระแนงบังตาไวนิล SCG BOX SET', des: 'สร้างสรรค์ความงามได้หลากหลาย ภายใต้คุณภาพที่เป็นมาตรฐาน', image: '/asset/scg.png', link: '/product' },
    
]

const ProductsList = () => {
  return (
    <>
        <div className="w-full overflow-x-auto bg-red scrollbar-hide">
            <div className="whitespace-nowrap">
                <ul className='flex'>
                    {services.map((item) => (
                        <li key={item.id}>
                            <div className='grid w-96 items-center mx-3 my-10 bg-gray-50 rounded-lg shadow-xl duration-300'>
                                <div className='relative h-64'>
                                    <img src={item.image} className='w-full h-full object-cover absolute rounded-t-lg' alt={item.name}></img>
                                </div>
                                <div className='flex flex-col p-6 whitespace-normal'>
                                    <div>
                                        <p className='h3'>{item.name}</p>
                                        <p className='p'>{item.des}</p>
                                    </div>                                        
                                    <Link href={item.link} className="text-end mt-4 link">ดูสินค้า →</Link>                              
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

export default ProductsList
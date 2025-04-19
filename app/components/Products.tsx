import Link from 'next/link';
import React from 'react'

const services = [
    { id:'1', name: 'เส้นระแนงไวนิล A40', des: '98.00 – 130.00 บาท', image: './products/เส้นระแนง_400x400_1.jpg' },
    { id:'2', name: 'เส้นระแนงไวนิล A60', des: '138.00 – 184.00 บาท', image: './products/เส้นระแนงA60_400x400_1.jpg' },
    { id:'3', name: 'กระทงแบบเว้น', des: '382.00 – 509.00 ยาท', image: './products/กระทงแบบเว้น_400x400.jpg' },
    { id:'4', name: 'กระทงแบบชิด', des: '382.00 – 509.00 บาท', image: './products/กระทงแบชิด_400x400.jpg' },
    { id:'5', name: 'กระทงแบบบานเกล็ด', des: '496.00 – 661.00 บาท', image: './products/กระทงแบบบานเกล็ด_400x400.jpg' },
    { id:'6', name: 'บัวเก็บรอยต่อ', des: '128.00 – 170.00 ยาท', image: './products/บัวเก็บรอยต่อ_400x400.jpg' },    
]

const Products = () => {
    return (
      <>
          <div className="w-full overflow-x-auto bg-red scrollbar-hide">
              <div className="whitespace-nowrap">
                  <ul className='flex'>
                      {services.map((item) => (
                          <li key={item.id}>
                              <Link href='https://line.me/ti/p/@plk2013' target='_blank' className='grid w-64 md:w-80 items-center mx-2 mb-10 bg-gray-50 shadow-md rounded-2xl duration-300 hover:shadow-xl'>
                                  <div className='relative h-64'>
                                      <img src={item.image} className='w-full h-full object-cover absolute rounded-t-2xl' alt={item.name}></img>
                                  </div>
                                  <div className='flex flex-col p-6 whitespace-normal'>
                                      <div>
                                          <p className='text-lg lg:text-xl font-semibold'>{item.name}</p>
                                          <p className='p line-clamp-2'>{item.des}</p>
                                      </div>                                        
                                      <p className="text-end mt-4 link">สั่งซื้อสินค้า →</p>                              
                                  </div>
                              </Link>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      </>
    );
  };
  
  export default Products
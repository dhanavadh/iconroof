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
    <div className=''>
        <div className=''>
            <p className='mx-20 h1'>รายการสินค้า</p>
        </div>
        <div className="w-full overflow-x-auto bg-red">
            <div className="whitespace-nowrap">
                <ul className='flex ml-20'>
                    {services.map((item) => (
                        <li key={item.id}>
                            <div className='grid w-64 items-center mx-3 my-10 bg-gray-50 rounded-2xl shadow-xl hover:shadow-2xl duration-300'>
                                <img src={item.image} className='w-64 h-64 rounded-t-2xl' alt={item.name}></img>
                                <div className='grid justify-items-start mt-4 mb-6 ml-3 px-3'>
                                    <p className='h4'>{item.name}</p>
                                    <p className='p'>ราคา {item.des}</p>                                    
                                    <a href='https://line.me/ti/p/@plk2013' target='_blank' className='p-sm mb-1 mt-4 link text-white rounded-full bg-green-600 mx- px-2 py-1 '>ซื้อผ่านไลน์</a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Products
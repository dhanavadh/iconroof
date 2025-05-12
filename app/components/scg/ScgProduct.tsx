import Link from 'next/link';
import React from 'react'

const services = [
    { id:'1', name: 'ระแนงไวนิล SCG BOX SET', des: 'สร้างสรรค์ความงามได้หลากหลาย ภายใต้คุณภาพที่เป็นมาตรฐาน', image: '/asset/scg-item-4.png', link: '/product' },
    { id:'2', name: 'ระแนงไวนิล AMIGO', des: 'ไม้สังเคราะห์ทำจากโพลิเมอร์ชนิดพิเศษทนทานจึงหมดปัญหาเรื่องปลวกและเชื้อราไม่ปิดตัว ไม่บวมน้ำ ทนต่อแสงแดด', image: '/asset/scg-item.png', link: '/product' },
    { id:'3', name: 'ระแนง GREENWOOD', des: 'ผลิตภัณฑ์ไม้สังเคราะห์ที่มีส่วนผสมของไม้ธรรมชาติ จึงให้ผิวสัมผัสและภาพลักษณ์เสมือนไม้จริง มากกว่าวัสดุทดแทนไม้ชนิดอื่นๆ', image: '/asset/scg-item-1.png', link: '/product' },
    { id:'4', name: 'ชิ้นส่วนระแนง', des: 'ไอคอนรูฟมีชิ้นส่วนระแนงขายปลีก ไม่ว่าจะเป็นเส้นระแนงไวนิล กระทงแบบต่าง ๆ หรือ บัวเก็บรอยต่อ', image: '/asset/scg-item-2.png', link: '/product' },    
    { id:'5', name: 'ฝ้าระแนง', des: 'ฝ้าระแนงลายไม้ wpc ไฟเบอร์ซีเมนต์ ไวนิล Amigo หรือ อะลูมิเนียมลายไม้ก็มีพร้อมให้เลือกสรร', image: '/asset/scg-item-3.png', link: '/product' },    
    
]

const ScgProduct = () => {
  return (
    <>
        <div className="w-full overflow-x-auto bg-red scrollbar-hide">
            <div className="whitespace-nowrap">
                <ul className='flex'>
                    {services.map((item) => (
                        <li key={item.id}>
                            <div className='grid w-64 md:w-80 items-center mx-2 my-4 bg-gray-50 duration-300'>
                                <div className='relative h-96'>
                                    <img src={item.image} className='w-full h-full object-cover absolute z-0 rounded-lg' alt={item.name}></img>
                                    <p className='z-10'>สั่งซื้อสินค้า</p>
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

export default ScgProduct
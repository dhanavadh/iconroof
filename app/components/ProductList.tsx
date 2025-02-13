import Link from 'next/link';
import React from 'react'

const services = [
    { id:'1', name: 'ระแนงไวนิล SCG BOX SET', des: 'สร้างสรรค์ความงามได้หลากหลาย ภายใต้คุณภาพที่เป็นมาตรฐาน', image: '/asset/scg-ref.png', link: '/product' },
    { id:'2', name: 'ระแนงไวนิล AMIGO', des: 'ไม้สังเคราะห์ทำจากโพลิเมอร์ชนิดพิเศษทนทานจึงหมดปัญหาเรื่องปลวกและเชื้อราไม่ปิดตัว ไม่บวมน้ำ ทนต่อแสงแดด', image: '/asset/image.png', link: '/product' },
    { id:'3', name: 'ระแนง GREENWOOD', des: 'ผลิตภัณฑ์ไม้สังเคราะห์ที่มีส่วนผสมของไม้ธรรมชาติ จึงให้ผิวสัมผัสและภาพลักษณ์เสมือนไม้จริง มากกว่าวัสดุทดแทนไม้ชนิดอื่นๆ', image: '/asset/greenwood.png', link: '/product' },
    { id:'4', name: 'ชิ้นส่วนระแนง', des: 'ไอคอนรูฟมีชิ้นส่วนระแนงขายปลีก ไม่ว่าจะเป็นเส้นระแนงไวนิล กระทงแบบต่าง ๆ หรือ บัวเก็บรอยต่อ', image: '/products/เส้นระแนงA60_400x400_1.jpg', link: '/product' },    
    { id:'5', name: 'ฝ้าระแนง', des: 'ฝ้าระแนงลายไม้ wpc ไฟเบอร์ซีเมนต์ ไวนิล Amigo หรือ อะลูมิเนียมลายไม้ก็มีพร้อมให้เลือกสรร', image: '/asset/roof-1.png', link: '/product' },    
    
]

const ProductsList = () => {
  return (
    <>
        <div className="w-full overflow-x-auto bg-red scrollbar-hide">
            <div className="whitespace-nowrap">
                <ul className='flex'>
                    {services.map((item) => (
                        <li key={item.id}>
                            <div className='grid w-72 md:w-96 items-center mx-2 my-10 bg-gray-50 rounded-lg shadow-xl duration-300'>
                                <div className='relative h-64'>
                                    <img src={item.image} className='w-full h-full object-cover absolute rounded-t-lg' alt={item.name}></img>
                                </div>
                                <div className='flex flex-col p-6 whitespace-normal'>
                                    <div>
                                        <p className='h3'>{item.name}</p>
                                        <p className='p line-clamp-2'>{item.des}</p>
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
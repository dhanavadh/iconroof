import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const services = [
    { id:'1', name: 'รีโนเวทบ้านสวย ด้วยระแนงไวนิล By ช่างโอ | ICONROOF', des: 'ตัวอย่างการรีโนเวทบ้านโดยติดตั้งระแนงเพื่อเพิ่มความสวยงามโดยช่างโอ', image: 'https://www.youtube.com/embed/USrLCJB7BUY?si=jQIOJyukOuz89F8b', link: 'https://youtu.be/USrLCJB7BUY?si=-xbUt5B-u3sHP652' },
    { id:'2', name: 'ต่อเติมระแนงสูง ไม่ยึดรั้วโครงการทำอย่างไร | ICONROOF', des: 'ตัวอย่างการต่อเติมระแนงสูง ไม่ยึดรั้วโครงการโดยช่างโอ', image: 'https://www.youtube.com/embed/1HI_yjBgzgc?si=FLJqx53iRlXusPA2', link: 'https://youtu.be/1HI_yjBgzgc?si=FLJqx53iRlXusPA2' },
    { id:'3', name: 'ติดตั้งระแนงไวนิลแนวนอนในพื้นที่ขนาดใหญ่ | ICONROOF', des: 'ตัวอย่างการติดตั้งระแนงไวนิลแนวนอนในพื้นที่ขนาดใหญ่โดยช่างโอ', image: 'https://www.youtube.com/embed/XZZ7g6Bp3ww?si=dDY_ILMSGCVyVHAL', link: 'https://youtu.be/XZZ7g6Bp3ww?si=dDY_ILMSGCVyVHAL' },
    { id:'4', name: 'ติดตั้งระแนงไวนิลรอบบ้านขนาดใหญ่ | ICONROOF', des: 'ตัวอย่างการติดตั้งระแนงไวนิลรอบบ้านขนาดใหญ่โดยช่างโอ', image: 'https://www.youtube.com/embed/X6lqKstMjGk?si=x5VUbe4sPTsQwvd3', link: 'https://youtu.be/X6lqKstMjGk?si=x5VUbe4sPTsQwvd3' },
    
    
]

const YouTubeList = () => {
  return (
    <>
        <div className="w-full overflow-x-auto bg-red scrollbar-hide">
            <div className="whitespace-nowrap">
                <ul className='flex'>
                    {services.map((item) => (
                        <li key={item.id}>
                            <div className='grid w-72 md:w-[560px] items-center mx-2 mt-4 mb-10 bg-gray-50 shadow-md rounded-lg duration-300'>
                                <div className='relative h-[315px] rounded-t-lg overflow-hidden'>
                                    <iframe width="560" height='315' src={item.image} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='object-cover absolute rounded-t-lg h-[315px] w-72 md:w-[560px]'></iframe>
                                </div>
                                <div className='flex flex-col p-6 whitespace-normal'>
                                    <div>
                                        <p className='text-lg lg:text-xl font-semibold'>{item.name}</p>
                                        <p className='p line-clamp-2 mb-2'>{item.des}</p>
                                        <Link href={item.link} target='_blank' className='flex items-center link'>
                                            <p className="text-base">ดูผลงานการติดตั้ง</p>
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
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
  );
};

export default YouTubeList
"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

const ProductSlider = () => {
  return (
    <>
        <Swiper    
        cssMode={true}    
        // navigation={true}
        pagination={{
            clickable: true,
          }}    
        mousewheel={true}
        keyboard={true}    
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper font-[family-name:var(--font-noto-sans)]"
      >

        {/* Parent Please Clone From This */}
        <SwiperSlide>
            <div className='slider-core-min'>             
                <Image src='/asset/scg.png' className='hidden lg:flex absolute z-[-1] w-full h-full object-cover brightness-50' width={1920} height={1080} alt='iconroof-scg'></Image>
                <Image src='/asset/scg-vertical.png' className='flex lg:hidden absolute z-[-1] w-full h-full object-cover brightness-50' width={1920} height={1080} alt='iconroof-scg'></Image>
                <div className='text-area-padding'>
                    <Link href='/products' className='title-section link'>ระแนงบังตาไวนิล SCG BOX SET</Link>
                    <p className='subtitle-section'>สร้างสรรค์ความงามได้หลากหลาย ภายใต้คุณภาพที่เป็นมาตรฐาน</p>
                </div>
            </div>
        </SwiperSlide> 
        
        
        <SwiperSlide>
            <div className='slider-core-min'>             
                <img src='/asset/amigo.png' className='hidden lg:flex absolute z-[-1] w-full h-full object-cover brightness-50'></img>
                <img src='/asset/amigo.png' className='flex lg:hidden absolute z-[-1] w-full h-full object-cover brightness-50'></img>
                <div className='text-area-padding'>
                    <Link href='/products' className='title-section link'>ระแนงไวนิล AMIGO</Link>
                    <p className='subtitle-section'>ไม้สังเคราะห์ทำจากโพลิเมอร์ชนิดพิเศษทนทานจึงหมดปัญหาเรื่องปลวกและเชื้อราไม่ปิดตัว ไม่บวมน้ำ ทนต่อแสงแดด</p>
                </div>
            </div>
        </SwiperSlide> 

        <SwiperSlide>
            <div className='slider-core-min'>             
                <img src='/asset/greenwood1.png' className='flex absolute z-[-1] w-full h-full object-cover brightness-50'></img>                
                <div className='text-area-padding'>
                    <Link href='/products' className='title-section link'>ระแนง GREENWOOD</Link>
                    <p className='subtitle-section'>ผลิตภัณฑ์ไม้สังเคราะห์ที่มีส่วนผสมของไม้ธรรมชาติ จึงให้ผิวสัมผัสและภาพลักษณ์เสมือนไม้จริง มากกว่าวัสดุทดแทนไม้ชนิดอื่นๆ</p>
                </div>
            </div>
        </SwiperSlide> 
        
        <SwiperSlide>
            <div className='slider-core-min'>             
                <img src='/asset/roof-1.png' className='flex absolute z-[-1] w-full h-full object-cover brightness-50'></img>                
                <div className='text-area-padding'>
                    <Link href='/products' className='title-section link'>ฝ้าระแนง</Link>
                    <p className='subtitle-section'>ฝ้าระแนงลายไม้ wpc ไฟเบอร์ซีเมนต์ ไวนิล Amigo หรือ อะลูมิเนียมลายไม้ก็มีพร้อมให้เลือกสรร</p>
                </div>
            </div>
        </SwiperSlide> 

        <SwiperSlide>
            <div className='slider-core-min'>             
                <img src='/asset/project.png' className='flex absolute z-[-1] w-full h-full object-cover brightness-50'></img>                
                <div className='text-area-padding'>
                    <Link href='/products' className='title-section link'>ผลงานการติดตั้ง</Link>
                    <p className='subtitle-section'>ฝ้าระแนงลายไม้ wpc ไฟเบอร์ซีเมนต์ ไวนิล Amigo หรือ อะลูมิเนียมลายไม้ก็มีพร้อมให้เลือกสรร</p>
                </div>
            </div>
        </SwiperSlide>         
      </Swiper>
    </>
  )
}

export default ProductSlider
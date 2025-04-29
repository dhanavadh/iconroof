"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

const ServiceSlider = () => {
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
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper font-[family-name:var(--font-noto-sans)]"
      >

        {/* Parent Please Clone From This */}
        
        
        
        <SwiperSlide>
            <Link href='/redirect' className='slider-core'>             
                <img src='/asset/15959.jpg' className='hidden lg:flex absolute z-[-1] w-full h-full object-cover brightness-50' alt='AmigoRoof'></img>
                <img src='/asset/15959.jpg' className='flex lg:hidden absolute z-[-1] w-full h-full object-cover brightness-50' alt='AmigoRoof'></img>
                <div className='text-area-padding'>
                    <p className='title-section'>ให้คำปรึกษาฟรี</p>
                    <p className='subtitle-section'>หากสนใจแต่ไม่รู้จะเริ่มอย่างไรดี ไอคอนรูฟพร้อมให้คำปรึกษา</p>
                </div>
            </Link>
        </SwiperSlide> 

        <SwiperSlide>
            <Link href='/redirect' className='slider-core'>             
                <img src='/install/68589_0.jpg' className='hidden lg:flex absolute z-[-1] w-full h-full object-cover brightness-50' alt='AmigoRoof'></img>
                <img src='/install/68589_0.jpg' className='flex lg:hidden absolute z-[-1] w-full h-full object-cover brightness-50' alt='AmigoRoof'></img>
                <div className='text-area-padding'>
                    <p className='title-section'>ติดตั้งโดยช่างมืออาชีพ</p>
                    <p className='subtitle-section'>ไอคอนรูฟมีบริการติดตั้งระแนงโดยช่างมืออาชีพ</p>
                </div>
            </Link>
        </SwiperSlide> 
     
      </Swiper>
    </>
  )
}

export default ServiceSlider
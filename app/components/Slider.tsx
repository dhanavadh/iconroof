"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
  return (
    <>
        <Swiper        
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper font-[family-name:var(--font-noto-sans)]"
      >
        <SwiperSlide>
            <div className='min-h-screen flex items-end text-white'>
                <img src='https://www.marketingmaterials.info/wp-content/uploads/2022/08/Artboard-10@2x-100-1-scaled.jpg' className='absolute z-[-1] w-full h-full object-cover brightness-50'></img>
                <div className='p-10'>
                    <p className='text-3xl'>ระแนง Amigo</p>
                    <p>รายละเอียด</p>
                </div>
            </div>
        </SwiperSlide>            
        <SwiperSlide>
            <div className='min-h-screen flex items-end text-white'>
                <img src='https://www.marketingmaterials.info/wp-content/uploads/2022/08/Artboard-3@2x-100-1-scaled.jpg' className='absolute z-[-1] w-full h-full object-cover brightness-50'></img>
                <div className='p-10'>
                    <p className='text-3xl'>ระแนง Amigo</p>
                    <p>รายละเอียด</p>
                </div>
            </div>
        </SwiperSlide>            
      </Swiper>
    </>
  )
}

export default Slider
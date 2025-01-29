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
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper font-[family-name:var(--font-noto-sans)]"
      >
        <SwiperSlide>
            <div className='min-h-screen flex items-end text-white'>
                <img src='https://dhanav.me/banner/buddhism.svg' className='absolute z-[-1] w-full h-full object-cover brightness-50'></img>
                <div className='p-10'>
                    <p className='text-3xl'>ระแนง Amigo</p>
                    <p>รายละเอียด</p>
                </div>
            </div>
        </SwiperSlide>            
        <SwiperSlide>
            <div className='min-h-screen flex items-end text-white'>
                <img src='https://dhanav.me/banner/blog-2.svg' className='absolute z-[-1] w-full h-full object-cover brightness-50'></img>
                <div className='p-10'>
                    <p className='text-3xl'>ระแนง Amigo</p>
                    <p>รายละเอียด</p>
                </div>
            </div>
        </SwiperSlide>            
        <SwiperSlide>
            <div className='min-h-screen flex items-end text-white'>            
                <img src='https://dhanav.me/banner/blog-1.svg' className='absolute z-[-1] w-full h-full object-cover brightness-50'></img>
                <div className='p-10'>
                    <p className='text-3xl'>ระแนง Amigo</p>
                    <p>รายละเอียด</p>
                </div>
            </div>
        </SwiperSlide>            
        <SwiperSlide>
            <div className='min-h-screen flex items-end text-white'> 
            <video width="full" autoPlay loop muted preload='auto' playsInline className='absolute z-[-1] w-full h-full object-cover brightness-50'>
              <source src="https://dhanav.me/content/port-redesign/navbar.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
                {/* <img src='https://dhanav.me/banner/blog-1.svg' className='absolute z-[-1] w-full h-full object-cover brightness-50'></img> */}
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
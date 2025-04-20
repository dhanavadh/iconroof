"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

const BlogSlider1 = () => {
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
            <Link href='/blog/article1' className='slider-core'>             
                <img src='/asset/blog/blog-1.jpg' className='hidden lg:flex absolute z-[-1] w-full h-full object-cover brightness-50' alt='AmigoRoof'></img>
                <img src='/asset/blog/blog-1.jpg' className='flex lg:hidden absolute z-[-1] w-full h-full object-cover brightness-50' alt='AmigoRoof'></img>
                <div className='text-area-padding'>
                    <Link href='/blogs/article1' className='title-section link'>วัสดุมุงหลังคายอดนิยม ที่ใช้กันในปัจจุบัน</Link>
                    <p className='subtitle-section'>ตัวอย่างงานติดตั้งระแนง Amigo</p>
                </div>
            </Link>
        </SwiperSlide> 

        <SwiperSlide>
            <div className='slider-core'>             
                <img src='/asset/roof-fac.JPG' className='hidden lg:flex absolute z-[-1] w-full h-full object-cover brightness-50' alt='AmigoRoof'></img>
                <img src='/asset/roof-fac.JPG' className='flex lg:hidden absolute z-[-1] w-full h-full object-cover brightness-50' alt='AmigoRoof'></img>
                <div className='text-area-padding'>
                    <p className='title-section'>รั้วเมทัลชีท</p>
                    <p className='subtitle-section'>ตัวอย่างงานติดตั้งรั้วเมทัลชีท</p>
                </div>
            </div>
        </SwiperSlide> 

        <SwiperSlide>
            <div className='slider-core'>             
                <img src='/asset/amigo-1.png' className='hidden lg:flex absolute z-[-1] w-full h-full object-cover brightness-50' alt='AmigoRoof'></img>
                <img src='/asset/amigo-1.png' className='flex lg:hidden absolute z-[-1] w-full h-full object-cover brightness-50' alt='AmigoRoof'></img>
                <div className='text-area-padding'>
                    <p className='title-section'>บริทาเนีย บางนา</p>
                    <p className='subtitle-section'>ตัวอย่างงานติดตั้งระแนง Amigo</p>
                </div>
            </div>
        </SwiperSlide> 

        <SwiperSlide>
            <div className='slider-core'>             
                <video width="full" autoPlay loop muted preload='auto' playsInline className='absolute z-[-1] w-full h-full object-cover brightness-50'>
                    <source src="/asset/video/preview-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='text-area-padding'>
                    <p className='title-section'>นันทวัน</p>
                    <p className='subtitle-section'>ตัวอย่างงานติดตั้งระแนงโดยช่างไอคอนรูฟ</p>
                </div>
            </div>
        </SwiperSlide>         
      </Swiper>
    </>
  )
}

export default BlogSlider1
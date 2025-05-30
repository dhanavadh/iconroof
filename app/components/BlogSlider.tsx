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
            <Link href='/blogs/article-4' className='slider-core'>             
                <img src='https://tvss01.iconroof.co.th/public/asset/blog/USrLCJB7BUY-HD.jpg' className='hidden lg:flex absolute z-[-1] w-full h-full object-cover brightness-50' alt='AmigoRoof'></img>
                <img src='https://tvss01.iconroof.co.th/public/asset/blog/USrLCJB7BUY-HD.jpg' className='flex lg:hidden absolute z-[-1] w-full h-full object-cover brightness-50' alt='AmigoRoof'></img>
                <div className='text-area-padding'>
                    <p className='title-section link'>รีโนเวทบ้านสวย ด้วยระแนงไวนิล By ช่างโอ | ICONROOF</p>
                    <p className='subtitle-section'>เปลี่ยนบ้านเก่าให้สวยใหม่ด้วยระแนงไวนิล: ทั้งบังแดด บังตา กันนก และเพิ่มสไตล์ให้บ้านคุณ</p>
                </div>
            </Link>
        </SwiperSlide> 

        <SwiperSlide>
            <Link href='/blogs/article-1' className='slider-core'>             
                <img src='/asset/blog/blog-1.jpg' className='hidden lg:flex absolute z-[-1] w-full h-full object-cover brightness-50' alt='AmigoRoof'></img>
                <img src='/asset/blog/blog-1.jpg' className='flex lg:hidden absolute z-[-1] w-full h-full object-cover brightness-50' alt='AmigoRoof'></img>
                <div className='text-area-padding'>
                    <p className='title-section link'>วัสดุมุงหลังคายอดนิยม ที่ใช้กันในปัจจุบัน</p>
                    <p className='subtitle-section'>การเลือกวัสดุที่ใช้มุง หลังคา ถือว่าเป็นอย่างแรกๆ ที่เรามักต้องเลือกกันก่อน</p>
                </div>
            </Link>
        </SwiperSlide> 

        <SwiperSlide>
            <Link href='/blogs/article-2' className='slider-core'>             
                <img src='/asset/blog/blog-2.png' className='hidden lg:flex absolute z-[-1] w-full h-full object-cover brightness-50' alt='AmigoRoof'></img>
                <img src='/asset/blog/blog-2.png' className='flex lg:hidden absolute z-[-1] w-full h-full object-cover brightness-50' alt='AmigoRoof'></img>
                <div className='text-area-padding'>
                    <p className='title-section link'>สาเหตุหรือปัญหาที่ต้องระวัง เวลาติดตั้งระแนงไม้</p>
                    <p className='subtitle-section'>“ระแนง” กับคุณสมบัติที่สามารถเพิ่มความสวยงามให้กับบ้านได้ไม่ยาก แต่ระแนงไม่ใช่แค่การตีไม้ยึดติดผนังเป็นอันว่าจบ</p>
                </div>
            </Link>
        </SwiperSlide>  

        <SwiperSlide>
            <Link href='/blogs/article-3' className='slider-core'>             
                <img src='/asset/blog/blog-3.png' className='hidden lg:flex absolute z-[-1] w-full h-full object-cover brightness-50' alt='AmigoRoof'></img>
                <img src='/asset/blog/blog-3.png' className='flex lg:hidden absolute z-[-1] w-full h-full object-cover brightness-50' alt='AmigoRoof'></img>
                <div className='text-area-padding'>
                    <p className='title-section link'>ระแนงไวนิล ต่างจาก ไม้ระแนงเฌอร่า อย่างไร..?</p>
                    <p className='subtitle-section'>หลายคนอาจสงสัยว่าระแนงแต่ละชนิดต่างกันอย่างไร มีคุณสมบัติอย่างไร</p>
                </div>
            </Link>
        </SwiperSlide>  
      </Swiper>
    </>
  )
}

export default BlogSlider1
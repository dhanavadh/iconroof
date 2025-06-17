"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

const Slider = () => {
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
        className="mySwiper font-[family-name:var(--font-noto-sans)] rounded-2xl"
      >

        {/* Parent Please Clone From This */}
        
        
        
        <SwiperSlide>
            <Link href='/products' className='slider-core'>             
                <Image alt='amigo' width={1920} height={1080} src='https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/Ads/promo-img.png' className='hidden lg:flex absolute z-[-1] w-full h-full object-cover brightness-50'></Image>
                <Image alt='amigo' width={1920} height={1080} src='https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/Ads/promo-img.png' className='flex lg:hidden absolute z-[-1] w-full h-full object-cover brightness-50'></Image>
                <div className='text-area-padding'>
                    <p className='title-section link'>โปรโมชั่นติดตั้งระแนงไวนิล</p>
                    <p className='subtitle-section'>ติดตั้งระแนงไวนิลเว้นร่อง <a className='font-medium underline underline-offset-4'>ตั้งแต่วันนี้ – 30 มิ.ย. 2568</a> จาก 1,900 ลดเหลือ 1,750 บาท/ตร.ม. *เงื่อนไขเป็นไปตามบริษัทกำหนด</p>
                </div>
            </Link>
        </SwiperSlide> 
        
        <SwiperSlide>
            <Link href='/products/amigo' className='slider-core'>             
                <Image alt='amigo' width={1920} height={1080} src='/asset/amigo.png' className='hidden lg:flex absolute z-[-1] w-full h-full object-cover brightness-50'></Image>
                <Image alt='amigo' width={1920} height={1080} src='/asset/amigo.png' className='flex lg:hidden absolute z-[-1] w-full h-full object-cover brightness-50'></Image>
                <div className='text-area-padding'>
                    <p className='title-section link'>ระแนงไวนิล AMIGO</p>
                    <p className='subtitle-section'>ไม้สังเคราะห์ทำจากโพลิเมอร์ชนิดพิเศษทนทานจึงหมดปัญหาเรื่องปลวกและเชื้อราไม่ปิดตัว ไม่บวมน้ำ ทนต่อแสงแดด</p>
                </div>
            </Link>
        </SwiperSlide> 

        <SwiperSlide>
            <Link href='/service' className='slider-core'>             
                <video width="full" autoPlay loop muted preload='auto' playsInline className='absolute z-[-1] w-full h-full object-cover brightness-50'>
                    <source src="/asset/video/install.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='text-area-padding'>
                    <p className='title-section link'>งานติดตั้งระแนง</p>
                    <p className='subtitle-section'>Iconroof มีบริการติดตั้งระแนงโดยช่างชำนาญการ</p>
                </div>
            </Link>
        </SwiperSlide> 

        <SwiperSlide>
            <div className='slider-core'>             
                <Image alt='scg' width={1920} height={1080} src='/asset/scg.png' className='hidden lg:flex absolute z-[-1] w-full h-full object-cover brightness-50'></Image>
                <Image alt='scg' width={1920} height={1080} src='/asset/scg-vertical.png' className='flex lg:hidden absolute z-[-1] w-full h-full object-cover brightness-50'></Image>
                <div className='text-area-padding'>
                    <Link href='/products' className='title-section link'>ระแนงบังตาไวนิล SCG BOX SET</Link>
                    <p className='subtitle-section'>สร้างสรรค์ความงามได้หลากหลาย ภายใต้คุณภาพที่เป็นมาตรฐาน</p>
                </div>
            </div>
        </SwiperSlide> 

        <SwiperSlide>
            <Link href='/products' className='slider-core'>             
                <Image alt='greenwood' width={1920} height={1080} src='/asset/greenwood1.png' className='flex absolute z-[-1] w-full h-full object-cover brightness-50'></Image>                
                <div className='text-area-padding'>
                    <p className='title-section link'>ระแนง GREENWOOD</p>
                    <p className='subtitle-section'>ผลิตภัณฑ์ไม้สังเคราะห์ที่มีส่วนผสมของไม้ธรรมชาติ จึงให้ผิวสัมผัสและภาพลักษณ์เสมือนไม้จริง มากกว่าวัสดุทดแทนไม้ชนิดอื่นๆ</p>
                </div>
            </Link>
        </SwiperSlide> 
        
        <SwiperSlide>
            <Link href='/products' className='slider-core'>             
                <Image alt='roof' width={1920} height={1080} src='/asset/roof-1.png' className='flex absolute z-[-1] w-full h-full object-cover brightness-50'></Image>                
                <div className='text-area-padding'>
                    <p className='title-section link'>ฝ้าระแนง</p>
                    <p className='subtitle-section'>ฝ้าระแนงลายไม้ wpc ไฟเบอร์ซีเมนต์ ไวนิล Amigo หรือ อะลูมิเนียมลายไม้ก็มีพร้อมให้เลือกสรร</p>
                </div>
            </Link>
        </SwiperSlide> 

        <SwiperSlide>
            <Link href='/products' className='slider-core'>             
                <Image alt='service' width={1920} height={1080} src='/asset/project.png' className='flex absolute z-[-1] w-full h-full object-cover brightness-50'></Image>                
                <div className='text-area-padding'>
                    <p className='title-section link'>ผลงานการติดตั้ง</p>
                    <p className='subtitle-section'>ฝ้าระแนงลายไม้ wpc ไฟเบอร์ซีเมนต์ ไวนิล Amigo หรือ อะลูมิเนียมลายไม้ก็มีพร้อมให้เลือกสรร</p>
                </div>
            </Link>
        </SwiperSlide> 

        <SwiperSlide>
            <Link href='/products' className='slider-core'>             
                <video width="full" autoPlay loop muted preload='auto' playsInline className='absolute z-[-1] w-full h-full object-cover brightness-50'>
                    <source src="/asset/video/icon-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='text-area-padding'>
                    <p className='title-section link'>วัสดุระแนง</p>
                    <p className='subtitle-section'>ไอคอนรูฟมีวัสดุระแนงพร้อมจำหน่าย</p>
                </div>
            </Link>
        </SwiperSlide> 

        

        

        
      </Swiper>
    </>
  )
}

export default Slider
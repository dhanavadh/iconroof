import React from 'react'
import Alert from '../components/Alert'
import Head from 'next/head'
import PreviewSlider from '../components/PreviewSlider'
import Link from 'next/link'
import Image from 'next/image'
import PreviewSlider1 from '../components/BlogSlider'

const PreviewPage = () => {
  return (
    <>
    <PreviewSlider1 />
    <div className="flex flex-col min-h-screen items-start mx-6 lg:mx-20 font-[family-name:var(--font-noto-sans)]">      
      <div className="flex flex-col items-start pt-8 mb-4 w-full">
        <p className="h1">ผลงานการติดตั้ง</p>    
      </div>
      <div className='flex flex-col lg:grid lg:grid-cols-4 items-start justify-between w-full lg:gap-8 relative'>
        <div className='hidden lg:grid lg:col-span-3 lg:sticky self-start transition-[top] top-20'
          id='big-content'
        >
          <div>
          
            {/* <video
              className='w-full h-full object-cover'
              autoPlay
              loop
              muted
              playsInline
              src='/asset/video/test1.mp4'
              // src='https://cdn.openai.com/ctf-cdn/o3o4mini_16x9(1080).mp4'
            ></video> */}
            <Image
              src='/asset/amigo-2.png'
              alt='Iconroof'
              width={1920}
              height={1080}
              className='h-[500px] w-full object-cover rounded-lg'
              >

              </Image>
          </div>
          <p className="text-2xl mt-4 font-semibold">ติดตั้งระแนงโดยช่างมืออาชีพ</p>
          <p className="text-base mt-1">ไอคอนรูฟมีบริการติดตั้งระแนงโดยช่างมืออาชีพ</p>
          <p className="text-base mb-4">สามารถติดต่อเพื่อสอบถามข้อมูลเพิ่มเติมได้ผ่านทาง Line@PLK2013</p>
          <Link href='https://www.youtube.com/@iconroof3391' target='_blank' className='flex items-center mb-8 link'>
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
        <div className='grid lg:col-span-1 overflow-y-auto w-full' id='small-content'>
          <div className='lg:hidden'>
            <Image
              src='/asset/amigo-2.png'
              alt='Iconroof'
              width={1920}
              height={1080}
              className='h-64 w-full object-cover rounded-lg'
            />                    
            <div>
              <p className="text-2xl mt-4 font-semibold">ติดตั้งระแนงโดยช่างมืออาชีพ</p>
              <p className="text-base mt-1 mb-4">ไอคอนรูฟมีบริการติดตั้งระแนงโดยช่างมืออาชีพ สามารถติดต่อเพื่อสอบถามข้อมูลเพิ่มเติมได้ผ่านทาง Line@PLK2014</p>
              <Link href='https://www.youtube.com/@iconroof3391' target='_blank' className='flex items-center mb-8 link'>
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
          <div>
            <Image
              src='/asset/amigo.png'
              alt='Iconroof'
              width={1920}
              height={1080}
              className='h-64 w-full object-cover rounded-lg'
            />                    
            <div>
              <p className="text-2xl mt-4 font-semibold">ต่อเติมระแนงสูง ไม่ยึดรั้วโครงการ</p>
              <p className="text-base mt-1 mb-4">งานต่อเติมระแนงสูง ไม่ยึดรั้วโครงการ โดยช่างโอไอคอนรูฟ</p>
              <Link href='https://www.youtube.com/watch?v=1HI_yjBgzgc' target='_blank' className='flex items-center mb-8 link'>
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
          <div>
            <Image
              src='/asset/roof-1.jpg'
              alt='Iconroof'
              width={1920}
              height={1080}
              className='h-64 w-full object-cover rounded-lg'
            />                    
            <div>
              <p className="text-2xl mt-4 font-semibold">รั้วระแนงบังตา ติดตั้งเสร็จภายใน 1 วัน</p>
              <p className="text-base mt-1 mb-4">งานต่อเติมระแนงสูง ไม่ยึดรั้วโครงการ โดยช่างโอไอคอนรูฟ</p>
              <Link href='https://www.youtube.com/watch?v=1HI_yjBgzgc' target='_blank' className='flex items-center mb-8 link'>
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
      </div>
      <div className="flex flex-col items-start w-full">
        <p className="h1">ขั้นตอนติดตั้งระแนง</p>    
      </div>
      



    </div>   
    </>
    
  )
}

export default PreviewPage
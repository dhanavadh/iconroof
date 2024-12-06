import BannerAmigo from '../components/bannerAmigo'
import ChangO from './ChangO'
import React from 'react'

const Details = () => {
  return (
    <div className=''>
        <div className="">   
    
    <div id="heading" className="grid justify-items-center mx-20 my-20">
      <p className="heading">
        ระแนงบังตาไอคอนรูฟ
      </p>
      <p className=" h4 mt-5">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>        
    </div> 

    {/* แบนเนอร์หลังคาอะมิโก้ */}
    <div className="mx-20">
      <BannerAmigo />
    </div>

    {/* ตัวคั่น gradient */}
    <div className='bg-gradient-to-t from-white to-transparent'>
        <div className='pt-20'>　</div>
    </div>

    {/* ช่างทำระแนง */}
    <div className="flex pb-20 bg-white">
      <div className='mx-20'>
        
        <div className='grid xl:flex justify-items-center'>
            <div className="mr-5">
                <p className="heading h1 mb-5">ช่างทำระแนง</p>   
                <p className='h4'>ไอคอนรูฟ ผู้นำด้านแผ่นหลังคา มีบริการติดตั้งระแนงไวนิล ระแนงบังตา โดยช่างชำนาญการ สามารถดูผลงานผลงานติดตั้งระแนงบังตา </p>
            </div>   
            <video width="700" height="450" preload="auto" autoPlay loop muted playsInline className='rounded-2xl mt-5 xl:mt-0'>
                <source src="./videoplayback.mp4" type="video/mp4" />                
            Your browser does not support the video tag.
            </video>
        </div>               

      </div>
    </div>
    
  </div>
    </div>
  )
}

export default Details
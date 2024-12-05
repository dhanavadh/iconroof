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
      <p className="mx-20 h4 mt-5">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>        
    </div> 
    <div className="mx-20">
      <BannerAmigo />
    </div>
    <div className='bg-gradient-to-t from-white to-transparent'>
        <div className='pt-20'>　</div>
    </div>
    <div className="flex pb-20 bg-white">
      <div className='mx-20'>
        
      <div className='grid xl:flex justify-items-center'>
            <div className="mr-5">
                <p className="heading mb-5">ช่างทำระแนง</p>   
                <p className='h4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, accusantium? Et totam maxime minus quia esse doloremque ex neque quasi vel?    Mollitia, sit quisquam. Ipsa inventore adipisci aperiam temporibus quod!</p>
            </div>   
                <video width="700" height="450" preload="auto" autoPlay loop muted className='rounded-2xl mt-5 xl:mt-0'>
                    <source src="./videoplayback.mp4" type="video/mp4" />                
                Your browser does not support the video tag.
                </video>
        </div> 
      <div className="w-1/2">
            <div className="col mr-10">                    
                 
            </div>
        </div>
        <div className="1/2">        
            
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/zGDJvG7EdH8?si=Ww213SN21WHgeFdg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        </div>
      </div>
    </div>
    
  </div>
    </div>
  )
}

export default Details
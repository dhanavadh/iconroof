import Banner from '../components/banner'
import ChangO from './ChangO'
import React from 'react'

const Details = () => {
  return (
    <div className=''>
        <div className="mx-20">   
    
    <div id="heading" className="grid justify-items-center my-20">
      <p className="heading">
        ระแนงบังตาไอคอนรูฟ
      </p>
      <p className="mx-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores maxime animi dolores. Iusto perferendis cumque deleniti quis totam quia labore fugiat ex, doloremque illum eum debitis repellendus placeat dolorum. Iure.</p>        
    </div> 
    <div className="">
      <Banner />
    </div>
    
    <div className="flex mt-14 mb-20">
      <div className="w-1/2">
        <div className="col mr-10">        
          <p className="heading mb-5">ช่างทำระแนง</p>      
          <div className="">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, accusantium? Et totam maxime minus quia esse doloremque ex neque quasi vel? Mollitia, sit quisquam. Ipsa inventore adipisci aperiam temporibus quod!</p>
          </div>        
        </div>
      </div>
      <div className="1/2">
        {/* <img src="./tool.svg" className="rounded-full w-96 bg-blend-multiply drop-shadow-2xl"></img> */}
        <ChangO />
      </div>
    </div>
    
  </div>
    </div>
  )
}

export default Details
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AmigoCompare = () => {
  return (
    <div>
        <div className="lg:hidden flex w-full overflow-x-auto bg-red scrollbar-hide">
            <div className="whitespace-nowrap">
                <ul className='flex'>                    
                        <li className="mb-2">
                          {/* In HTML, <a> cannot be a descendant of <a>.This will cause a hydration error. */}
                            <Link href='/products/amigo' className='grid w-80 items-center bg-gray-50 shadow-md rounded-2xl duration-300 hover:shadow-xl '>
                                <div className='flex flex-col p-6 whitespace-normal'>
                                    <div>
                                    <div className="px-4 py-2 lg:px-8 lg:py-4">            
                                      <div className="flex">
                                        <div className='flex justify-start items-center gap-0.5 bg-[#F5951D]/15 px-[3px] py-[3px] rounded-full w-20'>
                                            <div className='relative flex items-center justify-center h-[24px]'>
                                                <span className='absolute inline-flex h-4 w-4 bg-[#F5951D] rounded-full animate-ping z-0'></span>
                                                <img src="/icon/star_shine_w.svg" className="inline-flex relative h-[24px] bg-[#F5951D] rounded-full p-0.5 flex-shrink-0 z-10"></img>                                    
                                            </div>  
                                            <p className='text-[14px] tracking-tight leading-[12px] px-1 py-[1.5px] text-[#F5951D] rounded-[3px] font-medium'>แนะนำ</p>                                
                                        </div> 
                                      </div>    
                                        <p className="text-lg lg:text-xl font-medium pb-4 pt-2 text-start">ระบบฝ้าระแนง AMIGO</p>
                                        <div className="text-base gap-4 flex flex-col items-start">
                                          <div className="flex items-center gap-4">
                                            <Image
                                              src="/icon/timer.svg"
                                              alt="AMIGO"
                                              width={36}
                                              height={36}    
                                              className="w-8 h-8"            
                                            />
                                            <p className="">ระบบอุปกรณ์ติดตั้งครบชุด พร้อมขั้นตอน<a className="font-medium text-[#F5951D]">ทำงานง่ายและรวดเร็ว</a></p>
                                          </div>            
                                          <div className="flex items-center gap-4">
                                            <Image
                                              src="/icon/verified.svg"
                                              alt="AMIGO"
                                              width={36}
                                              height={36}    
                                              className="w-8 h-8"            
                                            />
                                            <p className=""><a className="font-medium text-[#F5951D]">งานเรียบร้อยได้มาตรฐาน</a> เว้นร่องเท่ากันเป็นระเบียบสวยงาม</p>
                                          </div>            
                                          <div className="flex items-center gap-4">
                                            <Image
                                              src="/icon/health_and_safety.svg"
                                              alt="AMIGO"
                                              width={36}
                                              height={36}    
                                              className="w-8 h-8"            
                                            />
                                            <p className="">ไม่มีปัญหาเรื่องปลวก <a className="font-medium text-[#F5951D]">ไม่ชวมน้ำ ไม่ผุกร่อน</a> ไม่บิดโก่งงอ ไม่ขึ้นรา</p>
                                          </div>            
                                          <div className="flex items-center gap-4">
                                            <Image
                                              src="/icon/package.svg"
                                              alt="AMIGO"
                                              width={36}
                                              height={36}    
                                              className="w-8 h-8"            
                                            />
                                            <p className=""><a className="font-medium text-[#F5951D]">ระบบติดตั้งทันสมัย</a> ใช้อุปกรณ์โครงสร้างคร่าวเหล็กชุบกัลวาไนซ์</p>
                                          </div>                                
                                          <div className="flex items-center gap-4">
                                            <Image
                                              src="/icon/star_shine.svg"
                                              alt="AMIGO"
                                              width={36}
                                              height={36}    
                                              className="w-8 h-8"            
                                            />
                                            <p className="">ผลิตจากไวนิลสูตรพิเศษ มีสีในตัว <a className="font-medium text-[#F5951D]">สวยงามยาวนาน</a></p>
                                          </div>                                                            
                                        </div>
                                      </div>
                                    </div>                                        
                                </div>
                            </Link>
                        </li>
                        <li >
                            <div className='grid w-80 items-center mx-2 bg-gray-50 shadow-md rounded-2xl'>
                                <div className='flex flex-col p-6 whitespace-normal'>
                                    <div>
                                    <div className="px-4 py-2 lg:px-8 lg:py-4">    
                                      <div className="flex">
                                        <div className='flex justify-start items-center gap-0.5 bg-neutral-700/15 px-[3px] py-[3px] rounded-full w-25'>
                                            <div className='relative flex items-center justify-center h-[24px]'>
                                                <span className='absolute inline-flex h-4 w-4 bg-neutral-700 rounded-full animate-ping z-0'></span>
                                                <img src="/icon/warning.svg" className="inline-flex relative h-[24px] bg-neutral-700 rounded-full p-0.5 flex-shrink-0 z-10"></img>                                    
                                            </div>  
                                            <p className='text-[14px] tracking-tight leading-[12px] px-1 py-[1.5px] text-neutral-700 rounded-[3px] font-medium'>ไม่แนะนำ</p>                                
                                        </div> 
                                      </div>          
                                        <p className="text-lg lg:text-xl font-medium pb-4 pt-2 text-start">ระบบฝ้าระแนงไม้ธรรมดา</p>
                                        <div className="text-base gap-4 flex flex-col items-start">
                                          <div className="flex items-center gap-4">
                                            <Image
                                              src="/icon/timer.svg"
                                              alt="AMIGO"
                                              width={36}
                                              height={36}    
                                              className="w-8 h-8"            
                                            />
                                            <p className="">การติดตั้งใช้เวลานาน และต้องทาสี</p>
                                          </div>            
                                          <div className="flex items-center gap-4">
                                            <Image
                                              src="/icon/verified_off.svg"
                                              alt="AMIGO"
                                              width={36}
                                              height={36}    
                                              className="w-8 h-8"            
                                            />
                                            <p className="">ร่องอาจไม่เท่ากัน มีการทด โก่ง งอ ตามคุณภาพไม้ และรอยตะปู</p>
                                          </div>            
                                          <div className="flex items-center gap-4">
                                            <Image
                                              src="/icon/hourglass_arrow_down.svg"
                                              alt="AMIGO"
                                              width={36}
                                              height={36}    
                                              className="w-8 h-8"            
                                            />
                                            <p className="">คุณภาพของไม้เปลี่ยนไปตามการเวลา</p>
                                          </div>            
                                          <div className="flex items-center gap-4">
                                            <Image
                                              src="/icon/bug.svg"
                                              alt="AMIGO"
                                              width={36}
                                              height={36}    
                                              className="w-8 h-8"            
                                            />
                                            <p className="">โครงคร่าวเป็นไม้ ยังมีปัญหาต่างๆ ของไม้อยู่</p>
                                          </div>                                
                                          <div className="flex items-center gap-4">
                                            <Image
                                              src="/icon/paint.svg"
                                              alt="AMIGO"
                                              width={36}
                                              height={36}    
                                              className="w-8 h-8"            
                                            />
                                            <p className="">เพื่อความสวยงาม ต้องทาสีใหม่ทุกๆ 2-3 ปี</p>
                                          </div>                                                            
                                        </div>
                                      </div>
                                    </div>                                        
                                </div>
                            </div>
                        </li>
                </ul>
            </div>
        </div>
      {/* Main Size */}
      <div className="hidden lg:flex flex-row gap-4 w-full">
        {/* ระแนงอมิโก */}
        <Link href='/products/amigo' className="flex flex-row justify-start items-start shadow-md rounded-2xl duration-300 hover:shadow-xl bg-gray-50 lg:w-4/6 w-64">
          <div className="w-1/2 h-full flex">
            <Image
              src="https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/asset/amigo-1.png"
              alt="AMIGO"
              width={1000}
              height={1000}    
              className="w-full h-full object-cover lg:rounded-tl-2xl lg:rounded-bl-2xl"
            />
          </div>
          <div className="px-4 py-2 lg:px-8 lg:py-4">
            
          <div className="hidden lg:flex">
            <div className='flex justify-start items-center gap-0.5 bg-[#F5951D]/15 px-[3px] py-[3px] rounded-full w-20'>
                <div className='relative flex items-center justify-center h-[24px]'>
                    <span className='absolute inline-flex h-4 w-4 bg-[#F5951D] rounded-full animate-ping z-0'></span>
                    <img src="/icon/star_shine_w.svg" className="inline-flex relative h-[24px] bg-[#F5951D] rounded-full p-0.5 flex-shrink-0 z-10"></img>                                    
                </div>  
                <p className='text-[14px] tracking-tight leading-[12px] px-1 py-[1.5px] text-[#F5951D] rounded-[3px] font-medium'>แนะนำ</p>                                
            </div> 
          </div>    
            <p className="text-lg lg:text-xl font-medium pb-4 pt-2 text-center lg:text-start">ระบบฝ้าระแนง AMIGO</p>
            <div className="text-base gap-4 flex flex-col items-start">
              <div className="flex items-center gap-4">
                <Image
                  src="/icon/timer.svg"
                  alt="AMIGO"
                  width={36}
                  height={36}    
                  className="w-8 h-8"            
                />
                <p className="">ระบบอุปกรณ์ติดตั้งครบชุด พร้อมขั้นตอนทำงานง่ายและรวดเร็ว</p>
              </div>            
              <div className="flex items-center gap-4">
                <Image
                  src="/icon/verified.svg"
                  alt="AMIGO"
                  width={36}
                  height={36}    
                  className="w-8 h-8"            
                />
                <p className="">งานเรียบร้อยได้มาตรฐาน เว้นร่องเท่ากันเป็นระเบียบสวยงาม</p>
              </div>            
              <div className="flex items-center gap-4">
                <Image
                  src="/icon/health_and_safety.svg"
                  alt="AMIGO"
                  width={36}
                  height={36}    
                  className="w-8 h-8"            
                />
                <p className="">ไม่มีปัญหาเรื่องปลวก ไม่ชวมน้ำ ไม่ผุกร่อน ไม่บิดโก่งงอ ไม่ขึ้นรา</p>
              </div>            
              <div className="flex items-center gap-4">
                <Image
                  src="/icon/package.svg"
                  alt="AMIGO"
                  width={36}
                  height={36}    
                  className="w-8 h-8"            
                />
                <p className="">ระบบติดตั้งทันสมัย ใช้อุปกรณ์โครงสร้างคร่าวเหล็กชุบกัลวาไนซ์</p>
              </div>                                
              <div className="flex items-center gap-4">
                <Image
                  src="/icon/star_shine.svg"
                  alt="AMIGO"
                  width={36}
                  height={36}    
                  className="w-8 h-8"            
                />
                <p className="">ผลิตจากไวนิลสูตรพิเศษ มีสีในตัว สวยงามยาวนาน</p>
              </div>                                                            
            </div>
          </div>
        </Link>
        {/* ระแนงธรรมดา */}
        <div className="flex flex-col lg:flex-row justify-start items-start shadow-md rounded-2xl bg-gray-50 lg:w-2/6">                 
          <div className="px-4 py-2 lg:px-8 lg:py-4">
            <div className="flex">
              <div className='flex justify-start items-center gap-0.5 bg-neutral-700/15 px-[3px] py-[3px] rounded-full w-25'>
                  <div className='relative flex items-center justify-center h-[24px]'>
                      <span className='absolute inline-flex h-4 w-4 bg-neutral-700 rounded-full animate-ping z-0'></span>
                      <img src="/icon/warning.svg" className="inline-flex relative h-[24px] bg-neutral-700 rounded-full p-0.5 flex-shrink-0 z-10"></img>                                    
                  </div>  
                  <p className='text-[14px] tracking-tight leading-[12px] px-1 py-[1.5px] text-neutral-700 rounded-[3px] font-medium'>ไม่แนะนำ</p>                                
              </div> 
            </div>   
            <p className="text-lg lg:text-xl font-medium pb-4 pt-2 text-center lg:text-start">ระบบฝ้าระแนงไม้ธรรมดา</p>
            <div className="text-base gap-4 flex flex-col items-start">
              <div className="flex items-center gap-4">
                <Image
                  src="/icon/timer.svg"
                  alt="AMIGO"
                  width={36}
                  height={36}    
                  className="w-8 h-8"            
                />
                <p className="">การติดตั้งใช้เวลานาน และต้องทาสี</p>
              </div>            
              <div className="flex items-center gap-4">
                <Image
                  src="/icon/verified_off.svg"
                  alt="AMIGO"
                  width={36}
                  height={36}    
                  className="w-8 h-8"            
                />
                <p className="">ร่องอาจไม่เท่ากัน มีการทด โก่ง งอ ตามคุณภาพไม้ และรอยตะปู</p>
              </div>            
              <div className="flex items-center gap-4">
                <Image
                  src="/icon/hourglass_arrow_down.svg"
                  alt="AMIGO"
                  width={36}
                  height={36}    
                  className="w-8 h-8"            
                />
                <p className="">คุณภาพของไม้เปลี่ยนไปตามการเวลา</p>
              </div>            
              <div className="flex items-center gap-4">
                <Image
                  src="/icon/bug.svg"
                  alt="AMIGO"
                  width={36}
                  height={36}    
                  className="w-8 h-8"            
                />
                <p className="">โครงคร่าวเป็นไม้ ยังมีปัญหาต่างๆ ของไม้อยู่</p>
              </div>                                
              <div className="flex items-center gap-4">
                <Image
                  src="/icon/paint.svg"
                  alt="AMIGO"
                  width={36}
                  height={36}    
                  className="w-8 h-8"            
                />
                <p className="">เพื่อความสวยงาม ต้องทาสีใหม่ทุกๆ 2-3 ปี</p>
              </div>                                                            
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default AmigoCompare
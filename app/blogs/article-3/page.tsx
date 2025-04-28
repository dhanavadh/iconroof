import React from 'react'
import Image from 'next/image'

const ArticlePage3 = () => {
  return (
    <div className='blog-panel'>
            {/* Banner */}
            <div className='flex max-h-3/4 min-w-full relative -z-[1]'>
              <Image src='/asset/blog/blog-3.png' width={1920} height={1080} alt='article banner' className='blog-banner'></Image>                        
              <div className='blog-banner-object'>            
              </div>
            </div>
    
            {/* Heading */}
            <div className='blog-heading'>
                <p className='blog-reading'>2 minutes Reading</p>
              <p className='h1'>ระแนงไวนิล ต่างจาก ไม้ระแนงเฌอร่า อย่างไร..?</p>
              <p className='sub-title-article mt-2'>หลายคนอาจสงสัยว่าระแนงแต่ละชนิดต่างกันอย่างไร มีคุณสมบัติอย่างไร</p>          
            </div>                                     
            {/* Paragraph */}
            <div className='max-w-[1000px]'>
              <div className='h1-blog'>
                <p>ระแนงคือ?</p>
              </div>   
              <div className='paragraph'>
                <p>ระแนง คือ วัสดุที่มีลักษณะเป็นเส้น หรือ แท่งขนาดยาว โดยจะเป็นรูปทรงสี่เหลี่ยม หรือ รูปร่างกลมก็ได้ มาเรียงต่อกันบนโครง ซึ่งโดยทั่วๆไปนั้น ระแนง สามารถทำได้จากวัสดุที่แตกต่างกันออกไป ทั้ง ไม้ โลหะ หรือวัสดุสังเคราะห์ต่างๆ เช่น ไวนิล หรือ ไม้ไฟเบอร์ซีเมนต์ ซึ่งข้อดีของระแนงคือ ช่วยเพิ่มความโปร่งสบาย
                </p>
              </div>   

              <div className='blog-image-div'>
                    <img src='/asset/blog/blog-3.png' className='blog-image-object h-[500px]' alt='ตัวอย่างระแนงไม้'></img>
                    <p className='image-description'>ตัวอย่างระแนงไม้</p>
              </div>
    
              <div className='h1-blog'>
                <p>ไม้เฌอร่าคือ?</p>
              </div>   
              <div className='paragraph'>
                <p>ไม้เฌอร่า คือ “ไม้เฌอร่า” เป็นไม้สังเคราะห์ประเภทหนึ่งที่ทำจากวัสดุไฟเบอร์ซีเมนต์ พัฒนามาจากการนำกระเบื้องแผ่นเรียบมาตัดให้เป็นชิ้นเล็กลงขนาดเท่ากับไม้ มีส่วนผสมของปูนซีเมนต์ และเยื่อเซลลูโลสจึงทำให้มีทั้งความแข็งแรง และมีความยืดหยุ่นอยู่ในเนื้อวัสดุ                </p>
              </div>   
              <div className='paragraph'>
                <p>สรุปได้ว่า "ระแนงไวนิล" นั้น มีน้ำหนักที่เบา มีความทนทาน การติดตั้งง่าย ซึ่งตรงกันข้าม "ไม้เฌอร่า" ที่เป็นไม้มีน้ำหนักมาก การติดตั้งค่อนข้างยุ่งยาก แต่ไม้ เฌอร่านั้น มีความโดดเด่นอยู่ที่ว่า สีไม้นั้นมีความเป็นธรรมชาติ เมื่อเวลาติดตั้งให้ความรู้สึกถึงธรรมชาติ แต่ระแนงไวนิล ให้ความรู้สึกที่ปลอดโปร่งสบาย ด้วยสีไวนิลที่เป็นสีขาว</p>
              </div>   
            </div>
              
        </div>
  )
}

export default ArticlePage3
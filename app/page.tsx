import Details from "./pages/Details";
import Products from "./components/Products";
import MainPage from "./pages/Main";
import Instal1 from "./components/installation";
import Slider from "./components/Slider";
import Alert from "./components/Alert";
import Link from "next/link";
import ProductsList from "./components/ProductList";
import InstallationList from "./components/Install";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    
    <>
    <Head>
        <title>จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof</title>
    </Head>
    <Slider />
    <div className="flex flex-col min-h-screen items-start ml-6 md:ml-20 mr-6 md:mr-20 font-[family-name:var(--font-noto-sans)]">      
      <div className="flex flex-col items-start pt-8 ">
        <p className="h1">เลือกดูผลิตภัณฑ์ระแนง</p>
        <p className="p">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>        
      </div>       
      <ProductsList /> 
      <div className="flex flex-col items-start pt-4 pb-10">
        <p className="h1">เปรียบเทียบคุณสมบัติระแนง</p>
        <p className="p">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>          
      </div> 

      <div className="flex flex-row gap-4 w-full mt-2 pb-10">
        <div className="flex flex-row justify-start items-start rounded-xl bg-gray-50 shadow-xl lg:w-4/6 border-2 border-gray-100">
          <div className="hidden w-1/2 h-full lg:flex">
            <Image
              src="/asset/amigo-1.png"
              alt="AMIGO"
              width={1000}
              height={1000}    
              className="w-full h-full object-cover lg:rounded-tl-xl lg:rounded-bl-xl"
            />
          </div>
          <div className="px-8 py-4">
            <a className="text-[14px] bg-[#F5951D] text-white font-semibold px-2 py-0.5 rounded-full">แนะนำ</a>
            <p className="text-lg lg:text-xl font-semibold pb-4 pt-2">ระบบฝ้าระแนง AMIGO</p>
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
        </div>
        <div className="flex flex-col lg:flex-row justify-start items-start rounded-xl bg-gray-50 shadow-xl lg:w-2/6 border-2 border-gray-100">         
          <div className="px-8 py-4">
          <a className="text-[14px] bg-neutral-100 text-white font-semibold px-2 py-0.5 rounded-full"></a>
            <p className="text-lg lg:text-xl font-semibold pb-4 pt-2">ระบบฝ้าระแนงไม้</p>
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
                  src="/icon/verified.svg"
                  alt="AMIGO"
                  width={36}
                  height={36}    
                  className="w-8 h-8"            
                />
                <p className="">ร่องอาจไม่เท่ากัน มีการทด โก่ง งอ ตามคุณภาพไม้ และรอยตะปู</p>
              </div>            
              <div className="flex items-center gap-4">
                <Image
                  src="/icon/health_and_safety.svg"
                  alt="AMIGO"
                  width={36}
                  height={36}    
                  className="w-8 h-8"            
                />
                <p className="">คุณภาพของไม้เปลี่ยนไปตามการเวลา</p>
              </div>            
              <div className="flex items-center gap-4">
                <Image
                  src="/icon/package.svg"
                  alt="AMIGO"
                  width={36}
                  height={36}    
                  className="w-8 h-8"            
                />
                <p className="">โครงคร่าวเป็นไม้ ยังมีปัญหาต่างๆ ของไม้อยู่</p>
              </div>                                
              <div className="flex items-center gap-4">
                <Image
                  src="/icon/star_shine.svg"
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

      

      <div className="flex flex-col items-start pt-4 ">
        <p className="h1">งานติดตั้งระแนง</p>
        <p className="p">ขั้นตอนการติดตั้งระแนงจากช่างทำระแนง Iconroof</p>        
      </div> 
      <InstallationList />
    </div>
    
    </>
  );
}

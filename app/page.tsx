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
import AmigoCompare from "./components/Amigo/AmigoCompare";

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
      <div className="flex flex-col items-start pt-4 pb-4">
        <p className="h1">เปรียบเทียบคุณสมบัติระแนง</p>
        <p className="p">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>          
      </div> 

       <AmigoCompare />

      

      <div className="flex flex-col items-start pt-4 ">
        <p className="h1">งานติดตั้งระแนง</p>
        <p className="p">ขั้นตอนการติดตั้งระแนงจากช่างทำระแนง Iconroof</p>        
      </div> 
      <InstallationList />
    </div>
    
    </>
  );
}

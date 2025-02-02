import Details from "./pages/Details";
import Products from "./components/Products";
import MainPage from "./pages/Main";
import Instal1 from "./components/installation";
import Slider from "./components/Slider";
import Alert from "./components/Alert";
import Link from "next/link";
import ProductsList from "./components/ProductList";

export default function Home() {
  return (
    
    <>
    <Slider />
    <Alert />
    <div className="flex flex-col min-h-screen items-start mx-10 md:mx-20 font-[family-name:var(--font-noto-sans)]">      
      <div className="flex flex-col items-start pt-4 ">
        <p className="h1">เลือกดูผลิตภัณฑ์ระแนง</p>
        <p className="p">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>        
      </div> 
      <ProductsList /> 
        <div className="w-96 h-1/2 shadow-lg rounded-lg my-4">
          {/* Image Container */}
          {/* <div className="flex relative w-full h-96 items-end">
              <img src="/asset/scg.png" className="flex absolute z-[-1] w-full h-full object-cover"></img>
              <p className="px-4 py-2 h1 text-neutral-50">ระแนงบังตาไวนิล SCG BOX SET</p>
          </div> */}
          {/* Text Source */}
          <img src="/asset/scg.png" className="flex w-full h-full"></img>            
          <div className="flex flex-col bg-white px-4 py-2 w-full">
              <p className="h3">ระแนงบังตาไวนิล SCG BOX SET</p>
              <p className="p">สร้างสรรค์ความงามได้หลากหลาย ภายใต้คุณภาพที่เป็นมาตรฐาน</p>
              <Link href="/products" className="text-end my-4 link">ดูสินค้า →</Link>
          </div>  
        </div> 
    </div>
    
    </>
  );
}

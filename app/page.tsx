import Details from "./pages/Details";
import Products from "./components/Products";
import MainPage from "./pages/Main";
import Instal1 from "./components/installation";
import Slider from "./components/Slider";
import Alert from "./components/Alert";
import Link from "next/link";
import ProductsList from "./components/ProductList";
import InstallationList from "./components/Install";

export default function Home() {
  return (
    
    <>
    <Slider />
    <div className="flex flex-col min-h-screen items-start mx-6 md:mx-20 font-[family-name:var(--font-noto-sans)]">      
      <div className="flex flex-col items-start pt-8 ">
        <p className="h1">เลือกดูผลิตภัณฑ์ระแนง</p>
        <p className="p">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>        
      </div> 
      <ProductsList /> 
      <div className="flex flex-col items-start pt-4 ">
        <p className="h1">งานติดตั้งระแนง</p>
        <p className="p">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>        
      </div> 
      <InstallationList />
    </div>
    
    </>
  );
}

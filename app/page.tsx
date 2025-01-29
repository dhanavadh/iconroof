import Details from "./pages/Details";
import Products from "./components/Products";
import MainPage from "./pages/Main";
import Instal1 from "./components/installation";
import Slider from "./components/Slider";
import Alert from "./components/Alert";

export default function Home() {
  return (
    
    <>
    <Slider />
    <Alert />
    <div className="flex min-h-screen items-start mx-10 md:mx-20 font-[family-name:var(--font-noto-sans)]">      
      <div className="flex flex-col items-start pt-4 ">
        <p className="h1">เลือกดูผลิตภัณฑ์ระแนง</p>
        <p className="p">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>        
      </div>
    </div>
    
    </>
  );
}

import Details from "./pages/Details";
import Products from "./components/Products";
import MainPage from "./pages/Main";
import Instal1 from "./components/installation";
import Slider from "./components/Slider";

export default function Home() {
  return (
    
    <>
    <Slider />
    <div className="flex min-h-screen items-center justify-center mx-4 md:mx-36 font-[family-name:var(--font-noto-sans)]">
      
      <div className="flex flex-col items-start">
        <p className="text-7xl font-medium">ระแนงบังตา</p>
        <p className="text-xl">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>

      </div>      
    </div>
    
    </>
  );
}

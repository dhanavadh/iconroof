import Slider from "./components/Slider";
import ProductsList from "./components/ProductList";
import InstallationList from "./components/Install";
import AmigoCompare from "./components/Amigo/AmigoCompare";
import YouTubeList from "./components/YouTube";
import AmigoSlider from "./components/Amigo/AmigoSlider";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center px-4 md:px-16 mt-24">
        <Slider />
      </div>
      <div className="flex flex-col min-h-screen items-start ml-6 md:ml-20 mr-6 md:mr-20 font-[family-name:var(--font-noto-sans)]">
        <div className="flex flex-col items-start pt-8 pb-4">
          <p className="h1">โปรโมชั่น</p>
          <p className="p">โปรโมชั่นจำนวนจำกัด โดย Iconroof</p>
        </div>
        <AmigoSlider />

        <div className="flex flex-col items-start pt-4 pb-4">
          <p className="h1">เลือกดูผลิตภัณฑ์ระแนง</p>
          <p className="p">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>
        </div>
        <div className="w-full overflow-x-auto">
          <ProductsList />
        </div>

        <div className="flex flex-col items-start pt-4 pb-4">
          <p className="h1">เปรียบเทียบคุณสมบัติระแนง</p>
          <p className="p">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>
        </div>
        <div className="w-full overflow-x-auto">
          <AmigoCompare />
        </div>

        <div className="flex flex-col items-start pt-4 ">
          <p className="h1">งานติดตั้งระแนง</p>
          <p className="p">ขั้นตอนการติดตั้งระแนงจากช่างทำระแนง Iconroof</p>
        </div>
        <InstallationList />

        <div className="flex flex-col items-start pt-4 ">
          <p className="h1">ผลงานการติดตั้งโดยช่างโอ</p>
          <p className="p">ตัวอย่างงานติดตั้งระแนงจากช่างทำระแนง Iconroof</p>
        </div>
        <YouTubeList />
      </div>
    </>
  );
}
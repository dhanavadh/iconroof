import AmigoA60Product from "@/app/components/Amigo/AmigoA60";
import Link from "next/link";
import Image from "next/image";
import AmigoGallerry from "@/app/components/Amigo/AmigoGallerry";
import AmigoCompare from "@/app/components/Amigo/AmigoCompare";
export default function AmigoPage() {
  return (
    <div className="flex flex-col min-h-screen items-start mx-6 md:mx-20 font-[family-name:var(--font-noto-sans)]">
      <div className='pb-4 mt-12 border-b-2 border-neutral-200 w-full' id='amigo'>
        <div className="flex flex-col items-center pt-6 lg:pt-12 mb-4">
          <p className="h1">ระแนงไวนิล AMIGO</p>
          <p className="p text-center">หมดปัญหาเรื่องปลวกและเชื้อรา ไม่ปิดตัว ไม่บวมน้ำ ทนต่อแสงแดด มีอายุการใช้งานที่ยาวนาน</p>                                     
        </div>     

        <AmigoGallerry />
        <div className="flex flex-col items-start pt-4 pb-4">
            <p className="h1">เปรียบเทียบคุณสมบัติระแนง</p>
            <p className="p">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>          
        </div> 
        <AmigoCompare />

        <div className="flex flex-col items-start pt-4">
          <p className="h1">ระแนงไวนิล A60 , A40</p>
          <p className="p">Iconroof จัดจำหน้าย ระแนงไวนิล A60 , A40</p>        
        </div>   
        <AmigoA60Product />
      </div>     
    </div>
  );
}
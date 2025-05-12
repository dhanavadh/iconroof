import AmigoA60Product from "@/app/components/Amigo/AmigoA60";
import Link from "next/link";
import Image from "next/image";
export default function AmigoPage() {
  return (
    <div className="flex flex-col min-h-screen items-start mx-6 md:mx-20 font-[family-name:var(--font-noto-sans)]">
      <div className='pb-4 mt-12 border-b-2 border-neutral-200 w-full' id='amigo'>
        <div className="flex flex-col items-start pt-6 lg:pt-12 mb-4">
          <p className="h1">ระแนงไวนิล AMIGO</p>
          <p className="p">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>        
        </div>     

        <div className='flex flex-col lg:flex-row bg-neutral-100 rounded-2xl'>
          <div className='lg:hidden flex w-full'>
            <Image width={1920} height={1080} alt="amigo-roof" src='https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/asset/amigo-1.png' className='w-full h-full object-cover rounded-t-2xl'></Image>
          </div>
          <div className='flex w-full lg:w-2/6 row-span-4 py-4 lg:py-8 flex-col items-start px-8 lg:px-12 gap-6 justify-between'>
            <div>
              <p className='text-2xl lg:text-5xl font-semibold lg:leading-normal leading-normal text-blue-600'>ระแนงไวนิล AMIGO</p>
              <p className='text-lg mt-2 font-medium text-blue-600'>หมดปัญหาเรื่องปลวกและเชื้อรา ไม่ปิดตัว ไม่บวมน้ำ ทนต่อแสงแดด มีอายุการใช้งานที่ยาวนาน</p>
            </div>
            <div className='flex gap-2 flex-row lg:flex-col text-center xl:flex-row'>
              <Link href='https://line.me/ti/p/@plk2013' target='_blank' className='px-4 py-2 rounded-full border-2 border-blue-600 bg-blue-600 text-white font-medium hover:bg-blue-700 hover:border-blue-700 cursor-pointer transition-colors duration-300 mb-4 lg:mb-0'>สั่งซื้อสินค้า</Link>            
            </div>
          </div>
          <div className='hidden lg:flex w-full lg:w-4/6'>
            <Image width={1920} height={1080} alt="amigo-roof" src='https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/asset/amigo-1.png' className='w-full h-full object-cover rounded-r-2xl'></Image>                            
          </div>
        </div>

        <div className="flex flex-col items-start pt-4">
          <p className="h2">ระแนงไวนิล A60 , A40</p>
          <p className="p">Iconroof จัดจำหน้าย ระแนงไวนิล A60 , A40</p>        
        </div>   
        <AmigoA60Product />
      </div>     
    </div>
  );
}
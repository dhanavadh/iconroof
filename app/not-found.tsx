import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex min-h-screen items-center justify-center w-full'>
      <div className=''>
        <div className='mb-8'>
            <h2 className='h1'>ไม่พบหน้าที่กำลังหา</h2>
            <p className='h4'>หน้าที่กำลังหาอาจอยู่ในระหว่างการปรับปรุง โปรดลองใหม่อีกครั้ง</p>
        </div>
        <Link href="/" className=' px-4 py-2 rounded-full border-2 border-neutral-800 bg-neutral-800 text-white font-medium hover:bg-neutral-600 hover:border-neutral-600 cursor-pointer transition-colors duration-300 font-[family-name:var(--font-noto-sans)]'>กลับหน้าแรก</Link>
      </div>
    </div>
  )
}
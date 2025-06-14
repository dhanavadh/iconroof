import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Gallerry = Array.from({ length: 213 }, (_, i) => {
    const id = (i + 2).toString();
    return {
        id,
        name: 'ระแนงไวนิล Amigo',
        des: `ตัวอย่างงานติดตั้งระแนงไวนิล A60`,
        image: `https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/Amigo-1/Amigo-${id}.webp`,
        alt: `ระแนงไวนิล Amigo A60`
    };
});

const AmigoRefGallerry = () => {
  return (
    <div>
        <main className="mx-auto max-w-[1960px] p-4">        
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">                   
            {Gallerry.map((item) => (
                <div
                    key={item.id}
                    className="group relative mb-5 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                >
                    <Image
                        alt={item.alt}
                        className="transform rounded-lg brightness-100 transition will-change-auto group-hover:brightness-80"
                        placeholder="blur"
                        blurDataURL="/"
                        src={item.image}
                        width={720}
                        height={480}
                        sizes="(max-width: 640px) 100vw,
                            (max-width: 1280px) 50vw,
                            (max-width: 1536px) 33vw,
                            25vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white rounded px-4 py-2 text-black text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className='flex items-center justify-between'>
                        <div>
                          <div className="font-medium text-lg">{item.name}</div>
                          <div>{item.des}</div>
                        </div>
                        <div className='hidden lg:block'>
                          <Link href='https://line.me/ti/p/@plk2013' target='_blank' className='px-2 py-1 rounded-full border-2 border-neutral-800 bg-neutral-800 text-white font-medium hover:bg-neutral-600 hover:border-neutral-600 cursor-pointer transition-colors duration-300 '>สั่งซื้อสินค้า</Link> 
                        </div>                           
                        <div className='block lg:hidden'>
                          <Link href='https://line.me/ti/p/@plk2013' target='_blank' className='px-2 py-2 rounded-full border-2 border-neutral-800 bg-neutral-800 text-white font-medium hover:bg-neutral-600 hover:border-neutral-600 cursor-pointer transition-colors duration-300 flex items-center justify-center'>
                            <Image src='/icon/shopping_bag.svg' width={24} height={24} alt='shopping icon' className='inline-block'></Image>
                          </Link> 
                        </div>                           
                      </div>                                            
                    </div>
                </div>
            ))}
            
          
            
        </div>
      </main>
    </div>
  )
}

export default AmigoRefGallerry
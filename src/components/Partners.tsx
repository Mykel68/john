import React from 'react'
import Nike from '@/assets/nike.svg'
import Gucci from '@/assets/gucci.svg'
import Adidas from '@/assets/addidas.svg'
import Zara from '@/assets/zara.svg'
import SectionTitle from './SectionTitle'

const partners = [
    {
        name: 'Nike',
        src: Nike.src,
    },
    {
        name: 'Gucci',
        src: Gucci.src,
    },
    {
        name: 'Adidas',
        src: Adidas.src,
    },
    {
        name: 'Zara',
        src: Zara.src,
    },
]

export default function Partners() {
    return (
        <div className='flex flex-col gap-3 py-4 items-start justify-start'>
            <SectionTitle title='Partners' />
            <div className='flex gap-4 flex-wrap'>
                {partners.map((item, index) => (
                    <img key={index} src={item.src} alt={item.name} className='h-10 w-[6rem] rounded-full' />
                ))}
            </div>
        </div>
    )
}

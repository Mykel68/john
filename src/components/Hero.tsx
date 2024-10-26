import React from 'react'
import HeroImage from '@/assets/hero.svg'
import { Button } from './ui/button'
import CHeveronRight from '@/assets/chevron-right.svg'
import { Badge } from './ui/badge'

export default function Hero() {
    return (
        <div className='relative w-full h-[38rem]'>
            <img src={HeroImage.src} alt="hero" className='h-full w-full object-cover rounded-lg' />
            <div className="absolute -top-10 left-10 w-[35rem] h-full space-y-3   flex flex-col justify-center items-start">
                <Badge>1M+ Eco-Freindly Products</Badge>
                <p className='text-6xl text-white font-semibold tracking-tighter '> <span className='text-[#47FF85]'>Sustainable</span> and Ethical Fashion for Fashion Enthusiasts</p>
                <Button>Explore <span> <img src={CHeveronRight.src} alt="cheveron-right" className='h-5 w-5 aspect-square' /></span></Button>
            </div>
        </div>
    )
}

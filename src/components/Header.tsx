import React from 'react'
import CallIcon from "@/assets/call-icon.svg"

export default function Header() {
    return (
        <div className='w-full flex justify-between text-white text-center leading-4 tracking-tighter text-xs font-medium px-14 items-center h-12 bg-[#292424]'>
            <div className="flex items-center">
                <img src={CallIcon.src} alt="call-icon" className='' />
                <span className=' '>+234 800 800 800</span>
            </div>
            <div className="flex gap-4 items-center">
                <span className='opacity-70'>Get 30% off on Selected Items</span>
                <span>|</span>
                <span className='text-[#47FF85]'>Shop Now</span>
            </div>
            <div className="flex gap-4 items-center">
                <span>EN</span>
                <span>Nigeria</span>
            </div>
        </div>
    )
}

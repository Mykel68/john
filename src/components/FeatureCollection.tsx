import React from 'react'
import SectionTitle from './SectionTitle'
import Feat1 from "@/assets/feat1.svg"
import Feat2 from "@/assets/feat2.svg"
import Feat3 from "@/assets/feat3.svg"

export default function FeatureCollection() {
    return (
        <div className='flex flex-col gap-3 py-4 items-start justify-start'>
            <SectionTitle title='Feature Collection' />
            <div className="flex h-[30rem] w-full gap-x-2 items-center justify-between">
                <img src={Feat1.src} alt="feat1" className='h-[30rem] w-full object-cover rounded-lg' />
                <div className="flex flex-col ">
                    <img src={Feat2.src} alt="feat2" className='h-full w-full p-1 object-cover rounded-lg' />
                    <img src={Feat3.src} alt="feat3" className='h-full w-full p-1 object-cover rounded-lg' />
                </div>
            </div>
        </div>
    )
}

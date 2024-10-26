import React from 'react'

export default function SectionTitle({ title }: { title: string }) {
    return (
        <p className='text-[#101928] text-2xl font-semibold leading-7 tracking-tighter'>{title}</p>
    )
}

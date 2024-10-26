import Link from 'next/link'
import React from 'react'
import Logo from '@/assets/logo.svg'
import Search from "@/assets/search.svg"
import User from "@/assets/user.svg"
import Favorite from "@/assets/favourite.svg"
import ShoppingCart from "@/assets/shopping-cart.svg"

const navbarLink = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Shop',
        href: '/about',
    },
    {
        name: 'Articles',
        href: '/contact',
    },
    {
        name: 'Ethos',
        href: '/contact',
    },
]

export default function Navbar() {
    return (
        <div className='h-14 flex items-center justify-between '>
            <ul className='flex items-center gap-4 font-medium leading-5 text-sm uppercase text-[#141B34]'>
                {navbarLink.map((item, index) => (
                    <Link key={index} href={item.href}>
                        {item.name}
                    </Link>
                ))}
            </ul>
            <img src={Logo.src} alt="logo" className='h-6 w-6' />
            <div className="inline-flex items-center justify-center gap-4">
                <img src={Search.src} alt="search" className='h-5 w-5 aspect-square' />
                <img src={User.src} alt="user" className='h-5 w-5 aspect-square' />
                <img src={Favorite.src} alt="favorite" className='h-5 w-5 aspect-square' />
                <img src={ShoppingCart.src} alt="shopping-cart" className='h-5 w-5 aspect-square' />
            </div>
        </div>
    )
}

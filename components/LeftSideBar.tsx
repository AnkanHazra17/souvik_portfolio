"use client"
import Link from 'next/link'
import React from 'react'
import { RiHome5Fill } from "react-icons/ri";
import { TbMessage2 } from "react-icons/tb";
import { IoBagRemoveOutline } from "react-icons/io5";
import { TbStairsUp } from "react-icons/tb";
import { FaEnvelope } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const sideBarLinks = [
    {
        label: "Home",
        route: "/",
        icon: <RiHome5Fill size={20}></RiHome5Fill>
    },
    {
        label: "About",
        route: "/about",
        icon: <TbMessage2 size={20}></TbMessage2>
    },
    {
        label: "Projects",
        route: "/projects",
        icon: <IoBagRemoveOutline size={20}></IoBagRemoveOutline>
    },
    {
        label: "Experience",
        route: "/experience",
        icon: <TbStairsUp size={20}></TbStairsUp>
    },
    {
        label: "Contact",
        route: "/contact",
        icon: <FaEnvelope size={20}></FaEnvelope>
    }

]

const LeftSideBar = () => {
    const pathName = usePathname();
  return (
    <div className='left_sidebar'>
        <nav className='flex flex-col gap-7'>
            <Link href="/" className='flex items-center gap-1 cursor-pointer max-lg:justify-center'>
                <div className='flex flex-col'>
                    <h1 className='text-lg font-bold text-white'>Souvik</h1>
                    <p className='text-sm text-white-100'>SDE</p>
                </div>
            </Link>
            <div className='flex flex-col gap-3'>
                {
                    sideBarLinks.map((item) => {
                        const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
                        return (
                            <Link 
                                key={item.label}
                                href={item.route}
                                className={cn("flex gap-4 items-center p-3 rounded-lg justify-start", {"bg-blue-500": isActive})}
                            >
                                {item.icon}
                                <p className='text-lg font-bold'>{item.label}</p>
                            </Link>
                        )
                    })
                }
            </div>

        </nav>
    </div>
  )
}

export default LeftSideBar
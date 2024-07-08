"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { sideBarLinks } from '@/constants';
import Image from 'next/image';


const LeftSideBar = () => {
    const pathName = usePathname();
  return (
    <div className='left_sidebar sticky'>
        <nav className='flex flex-col gap-7'>
            <Link href="/" className='flex items-center gap-3 cursor-pointer max-lg:justify-center'>
                {/* <div className=' w-16 h-16 bg-white-200 rounded-full'></div> */}
                <Image
                    src="/images/souvik_profile.jpg"
                    alt="profile"
                    width={50}
                    height={50}
                    className="rounded-full aspect-square"
                ></Image>
                <div className='flex flex-col max-lg:hidden'>
                    <h1 className='text-lg font-bold text-white'>Souvik Maiti</h1>
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
                                className={cn("flex gap-4 items-center p-3 rounded-lg justify-center lg:justify-start", {"bg-blue-500": isActive})}
                            >
                                <item.icon size={20}></item.icon>
                                <p className='text-lg font-semibold max-lg:hidden'>{item.label}</p>
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
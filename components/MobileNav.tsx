"use client"
import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'
import { TbMenu2 } from "react-icons/tb";
import Link from 'next/link';
import { sideBarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';


const MobileNav = () => {
    const pathName = usePathname();
  return (
    <Sheet>
        <SheetTrigger>
            <TbMenu2 size={30} className='text-white'></TbMenu2>
        </SheetTrigger>
        <SheetContent side="left" className='border-none bg-black-100'>
            <Link href="/" className='flex items-center gap-1 cursor-pointer mt-4 max-lg:justify-center'>
                <div className=' w-16 h-16 bg-white-200 rounded-full'></div>
                <div className='flex flex-col'>
                    <h1 className='text-lg font-bold text-white'>Souvik Maiti</h1>
                    <p className='text-sm text-white-100'>SDE</p>
                </div>
            </Link>

            <div className='mt-10'>
                <SheetClose asChild>
                    <div className='flex flex-col gap-3'>
                        {
                            sideBarLinks.map((item) => {
                                const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)

                                return (
                                    <SheetClose asChild key={item.label}>
                                        <Link 
                                            href={item.route}
                                            className={cn("flex gap-4 items-center text-white p-3 rounded-lg justify-start", {"bg-blue-500": isActive})}
                                        >
                                            <item.icon size={20}></item.icon>
                                            <p className='text-lg font-semibold'>{item.label}</p>
                                        </Link>
                                    </SheetClose>
                                )
                            })
                        }
                    </div>
                </SheetClose>
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
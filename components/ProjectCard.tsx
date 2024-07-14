import React from 'react'
import { PinContainer } from './ui/3d-pin'
import Image from 'next/image'

const ProjectCard = ({id, title, des, img, iconLists, link}: {id: number, title: string, des: string, img: string, iconLists: string[], link: string}) => {
  return (
    <div className='min-h-[32.5rem] flex items-center justify-center w-[80vw] lg:w-[27rem]'>
        <PinContainer title='Source code' href={link}>
            <div className='flex basis-full flex-col items-center p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[75vw] lg:w-[25rem] h-[28rem]'>
                <Image
                    src={img}
                    width={350}
                    height={120}
                    alt='image'
                ></Image>

                <div className='flex flex-col gap-6 items-center mt-6'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-bold text-white lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
                        <p className='font-light text-sm line-clamp-2'>{des}</p>
                    </div>
                    
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex gap-2'>
                            {
                                iconLists.map((icon, i) => (
                                    <div className='p-2 rounded-full border border-gray-500 bg-gray-700' key={i}>
                                        <Image
                                            src={icon}
                                            alt='icon'
                                            width={30}
                                            height={30}
                                            className='aspect-square'
                                        ></Image>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </PinContainer>
    </div>
  )
}

export default ProjectCard
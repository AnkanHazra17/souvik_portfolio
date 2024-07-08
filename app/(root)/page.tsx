"use client"
import { FlipWords } from '@/components/ui/Flipwords';
import { HeroHighlight, Highlight } from '@/components/ui/Herohighlight';
import MagicButton from '@/components/ui/MagicButton';
import { Spotlight } from '@/components/ui/Spotlight'
import Image from 'next/image';
import { FaLocationArrow } from "react-icons/fa6";
import React from 'react'
import { useRouter } from 'next/navigation';

const Page = () => {
  const words = ["better", "seamless", "modern"];
  const router = useRouter();
  return (
    <div className="relative">
      <div>
        <Spotlight className='h-screen -top-14 left-10' fill="white"></Spotlight>
        <Spotlight className='h-[70vh] w-[50vw] left-96 -top-12 hidden md:flex'></Spotlight>
      </div>
      <div className="h-screen w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {/* Info */}
        <div className='flex w-full px-3 items-center justify-between gap-4 flex-col md:flex-row'>
          <div className='w-full flex flex-col'>
            <div className='text-white text-4xl font-semibold'>
              <p>Transforming Concepts into</p>
              <FlipWords words={words} className='text-purple'></FlipWords><span>User Experiences.</span>
              
              <p className='text-[14px]'>
                <Highlight>Hi! I am Souvik Maiti, An Android Developer</Highlight>
              </p>

            </div>
            <div className='mt-5'>
              <MagicButton 
                title='Show my work'
                icon={<FaLocationArrow></FaLocationArrow>}
                position='right'
                otherClasses='gap-2'
                handleClick={() => router.push("/projects")}
              ></MagicButton>
            </div>
          </div>
          {/* Photo  */}
          <div className='mt-20 md:mt-0 animate-float relative'>
            <div className='h-[250px] w-[250px] bg-purple rounded-xl flex items-center justify-center'>
            </div>
            <Image
              src='/images/souvik_bgremove.png'
              alt='home'
              width={350}
              height={350}
              className='overflow-hidden absolute top-0 -left-3 h-[250px] w-[250px]'
            ></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
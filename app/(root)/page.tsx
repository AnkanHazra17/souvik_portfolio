import { FlipWords } from '@/components/ui/Flipwords';
import { HeroHighlight, Highlight } from '@/components/ui/Herohighlight';
import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'

const Page = () => {
  const words = ["better", "seamless", "modern"];
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
          <div className='text-white text-4xl font-semibold'>
            <p>Transforming Concepts into</p>
            <FlipWords words={words} className='text-purple'></FlipWords><span>User Experiences</span>
            
            <p className='text-[14px]'>
              <Highlight>Hi! I am Souvik Maity, An Android Developer</Highlight>
            </p>
            
          </div>
          {/* Photo  */}
          <div className='relative mt-20 md:mt-0'>
            <div className='h-[200px] w-[200px] bg-purple rounded-xl flex items-center justify-center rotate-45'>
              <p className='-rotate-45'>Image</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/constants'

const Grid = () => {
  return (
    <div className='w-full'>
        <BentoGrid className='w-full'>
            {
                gridItems.map((item, i) => (
                    <BentoGridItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        className={i == 0 || i == 1 || i == 2 ? "md:col-span-3 min-h-[50vh]" : i == 4 ? "md:col-span-6 md:row-span-2" : i == 3 || i == 5 ? "md:col-span-3" : ""}
                        img={item.img}
                        imgClassName={item.imgClassName}
                        titleClassName={item.titleClassName}
                        spareImg={item.spareImg}
                    ></BentoGridItem>
                ))
            }
        </BentoGrid>
    </div>
  )
}

export default Grid
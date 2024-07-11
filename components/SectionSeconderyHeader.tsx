import React from 'react'

const SectionSeconderyHeader = ({text1, text2}: {text1: string, text2:string}) => {
  return (
    <div className='w-full text-center'>
        <p className='text-xl text-white font-bold'>{text1} <span className='text-purple'>{text2}</span></p>
    </div>
  )
}

export default SectionSeconderyHeader
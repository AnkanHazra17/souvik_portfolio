import React from 'react'

const SectionHeader = ({text1, text2}: {text1: string, text2: string}) => {
  return (
    <div className='flex flex-col'>
        <p className='uppercase text-white-100 opacity-45'>{text1}</p>
        <p className='text-white text-2xl font-bold'>{text2}</p>
    </div>
  )
}

export default SectionHeader
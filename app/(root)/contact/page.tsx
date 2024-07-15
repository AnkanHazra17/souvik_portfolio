import ContactDetails from '@/components/ContactDetails'
import Contactform from '@/components/Contactform'
import SectionHeader from '@/components/SectionHeader'
import React from 'react'

const Page = () => {
  return (
    <div className='py-8'>
      <SectionHeader text1='Got an idea? I have the skills' text2='Contact Me.'></SectionHeader>

      <div className='flex gap-4 items-center justify-between mt-10 flex-col xl:flex-row'>
        <Contactform></Contactform>
        <ContactDetails></ContactDetails>
      </div>
    </div>
  )
}

export default Page
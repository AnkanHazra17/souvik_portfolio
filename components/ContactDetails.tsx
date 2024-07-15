"use client"
import { contactDetails } from '@/constants'
import React from 'react'
import SectionSeconderyHeader from './SectionSeconderyHeader'
import ContactItem from './ContactItem'


const ContactDetails = () => {
  return (
    <div className='border border-zinc-900 p-4 rounded-xl bg-zinc-950'>
        <SectionSeconderyHeader text1='Contact' text2='Details'></SectionSeconderyHeader>
        <div className='flex flex-col gap-4 mt-6'>
            {
                contactDetails.map((item) => (
                    <ContactItem
                        key={item.id}
                        title={item.title}
                        data={item.data}
                        Cicon={item.icon}
                    ></ContactItem>
                ))
            }
        </div>
    </div>
  )
}

export default ContactDetails
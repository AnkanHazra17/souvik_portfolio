import { contactDetails } from '@/constants'
import React from 'react'

const ContactDetails = () => {
  return (
    <div className='border border-zinc-900 p-4 rounded-xl bg-zinc-950'>
        <p className='text-gray-300 text-lg font-semibold text-center'>Contact Details</p>
        <div className='flex flex-col gap-4'>
            {
                contactDetails.map((item) => (
                    <div key={item.id} className='flex'>
                        <div className='p-2 h-8 w-8 rounded-full bg-black flex items-center justify-center'>
                            <item.icon className='text-white' size={20}></item.icon>
                        </div>
                        <div className='text-white'>
                            <p>{item.title}</p>
                            <p>{item.data}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ContactDetails
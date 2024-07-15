"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { IoCopyOutline } from 'react-icons/io5'
import { IconType } from "react-icons";
import { TiTick } from 'react-icons/ti';


const ContactItem = ({title, data, Cicon}: {title: string, data: string, Cicon: IconType}) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(data)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
    }
  return (
    <div className='flex gap-3 items-start'>
                        
        <div className='mt-4'>
            <Cicon className='text-white' size={25}></Cicon>
        </div>
                        
        <div className='text-white group relative p-3 rounded-xl hover:bg-zinc-900'>
            <p className='text-lg font-semibold'>{title}</p>
            
            <p className='text-sm'>{data}</p>
            <Button className='opacity-0 group-hover:opacity-100 h-7 w-7 absolute top-0 right-0' size="icon" onClick={handleCopy}>
                {
                    copied ? <TiTick></TiTick> : <IoCopyOutline className='text-white'></IoCopyOutline>
                }
            </Button>
            
        </div>
    </div>
  )
}

export default ContactItem
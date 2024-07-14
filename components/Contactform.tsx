"use client"
import React, { useState } from 'react'
import { Input, TextArea } from './ui/input'
import { Button } from './ui/button'
import { FaLocationArrow } from "react-icons/fa6";
import { Loader2 } from 'lucide-react';


const Contactform = () => {
    const [isSubmitting, setisSubmitting] = useState(false);
  return (
    <form className='w-full md:w-[550px] flex flex-col gap-5 border border-zinc-900 p-6 rounded-xl items-center'>
        <p className='text-gray-300 capitalize text-lg w-full md:w-[350px] text-center'>Questions, thoughts, feedback or just want to say hello?</p>
       <div className='flex w-full justify-between gap-3'>
        <label className='w-full flex flex-col'>
            <p className='text-[15px] font-semibold text-white pl-2'>First Name</p>
            <Input></Input>
        </label>
        <label className='w-full flex flex-col'>
            <p className='text-[15px] font-semibold text-white pl-2'>Last Name</p>
            <Input></Input>
        </label>
       </div>
       <label className='w-full flex flex-col'>
        <p className='text-[15px] font-semibold text-white pl-2'>Email</p>
        <Input></Input>
       </label>
       <label className='w-full flex flex-col'>
        <p className='text-[15px] font-semibold text-white pl-2'>Message</p>
        <TextArea rows={7}></TextArea>
       </label>
       <div className='flex justify-end w-full'>
        <Button className='bg-white hover:bg-white-200 transition-all duration-300 text-black gap-1' disabled={isSubmitting}>
            {
                isSubmitting ? "Sending" : "Send"
            }

            {
                isSubmitting ? <Loader2 className='animate-spin' size={18}></Loader2> : <FaLocationArrow></FaLocationArrow>
            }
        </Button>
       </div>
    </form>
  )
}

export default Contactform
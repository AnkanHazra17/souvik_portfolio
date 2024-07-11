"use client"
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'


const useScroll = (onTop = () => {}, onBottom = () => {}) => {
    const pathName = usePathname();
  useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY === 0 && pathName !== "/"){
            onTop();
        }else if(window.innerHeight + window.scrollY >= document.body.offsetHeight && pathName != "/contact"){
            onBottom();
        }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    }
  }, [onTop, onBottom])
}

export default useScroll
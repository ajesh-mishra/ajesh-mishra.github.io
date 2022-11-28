import React from 'react'
import { useState, useEffect } from "react";
import Link from "next/link";
import CommandPallette from "./CommandPallette";

export default function Cover({ postsData, src }) {
  src = src ? src : "https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80"
  const [isOpen, setIsOpen] = useState(false);
  const data = {
    postsData: postsData,
    isOpen: isOpen,
    setIsOpen: setIsOpen,
  };

  return (
    <>
      <CommandPallette {...data} />
      <div className='h-60 lg:h-80 w-full relative'>

        <img className="h-60 lg:h-80 w-full object-cover"
          src={src}
          alt="cover"
        />

        {/* <div className='bg-fluent-150/50 absolute inset-0'></div> */}
        <div className='backdrop-blur-sm bg-black/30 absolute inset-0'></div>

        <div className='absolute 
        inset-0 mx-auto 
        max-w-[90vw] md:max-w-[85vw] lg:max-w-2xl
        top-[4rem] md:top-[8rem] lg:top-[9.5rem] 
        gap-3 md:gap-3.5 lg:gap-5
        flex flex-col 
        '>
          <span className='tracking-wide text-2xl text-center font-extrabold
        bg-clip-text text-transparent bg-gradient-to-r from-fluent-50 to-fluent-50'>
            <Link href="/">ajesh-mishra.github.io</Link>
          </span>
          <button onClick={() => setIsOpen(true)} className='h-10 rounded-md bg-fluent-50/70 shadow-md'>Search</button>
        </div>

      </div>
    </>
  )
}

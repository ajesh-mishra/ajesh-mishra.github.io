import { useState, useEffect } from "react";
import Link from "next/link";
import CommandPallette from "./CommandPallette";
import Social from '../components/Social.js';

export default function Hero({ postsData, isHome }) {
  const [isOpen, setIsOpen] = useState(false);
  const data = {
    postsData: postsData,
    isOpen: isOpen,
    setIsOpen: setIsOpen,
  };
  return (
    <>
      <div className="relative">
        <img
          className="h-[65vh] lg:h-100 w-full object-cover"
          src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
        />

        <div className="absolute inset-0 bg-fluent-220/60"></div>

        <div className="absolute inset-0 max-w-3xl mx-auto mt-20 flex flex-col justify-center space-y-10">
          <span className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-fluent-50 text-center">
            Hello! I am Ajesh.
          </span>
          <span className="leading-tight text-lg sm:text-xl text-fluent-50 text-center">
            I am an Infrastructure Technician working on middleware tools in my
            day job but enthusiastic about web development, devops and cloud
            computing.
          </span>
          <div className="flex flex-col space-y-2  px-10 sm:space-y-0 sm:h-[5rem] sm:flex-row sm:justify-center sm:place-items-center  sm:space-x-4">
            <button onClick={() => setIsOpen(true)} className="bg-fluent-50 text-fluent-220 py-2 sm:w-[10rem] text-center sm:ring-fluent-50 hover:bg-fluent-70 rounded-sm">Search Blogs</button>
            {
              isHome
                ? <Link href="/blogs"><button className="text-fluent-50 py-2 sm:w-[10rem] sm:ring-1   sm:ring-fluent-50 text-center bg-black/20 hover:bg-black/50 rounded-sm">Blogs</button></Link>
                : <Link href="/"><button className="text-fluent-50 py-2 sm:w-[10rem] sm:ring-1   sm:ring-fluent-50 text-center bg-black/20 hover:bg-black/50 rounded-sm">Home</button></Link>
            }
          </div>
          <Social />
        </div>

      </div>
      <CommandPallette {...data} />
    </>
  )
}

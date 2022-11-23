import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import CommandPallette from "./CommandPallette";

export default function Header({ postsData }) {
  const [isOpen, setIsOpen] = useState(false);

  const data = {
    postsData: postsData,
    isOpen: isOpen,
    setIsOpen: setIsOpen,
  };

  return (
    <>
      <CommandPallette {...data} />
      <div
        className="absolute top-0 left-0 flex h-9 w-full place-items-center justify-between 
      bg-gradient-to-b from-fluent-220 via-fluent-220/90 to-transparent sm:h-12 px-2 md:px-4"
      >
        <div className="flex place-items-center space-x-2 sm:space-x-3">
          <span className="text-fluent-50 font-medium sm:text-lg lg:text-xl">
            <Link href="/">ajesh-mishra.github.io</Link>
          </span>
        </div>

        <div
          onClick={() => setIsOpen(true)}
          className="flex place-items-center space-x-1 md:px-6 hover:cursor-pointer"
        >
          <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
          </svg>
          <span className="text-fluent-90 text-sm sm:text-md">Search</span>
        </div>
      </div>
    </>
  );
}

"use client";

import Link from "next/link";
import { Disclosure } from '@headlessui/react';
import { usePathname } from 'next/navigation';
import ThemeButton from "./ThemeButton";
import Ideas from "../Ideas/page";

export default function Navbar()
{
    let pathname = usePathname() || '/'
    return(
        <Disclosure>
        {({ open }) => (
            <>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-2 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/">
                  <h1 className="text-2xl font-medium">
                    Abdelkabir <span className="text-teal-500">Elhamoussi</span>
                  </h1>
                </Link>
              </div>

              <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:item-center">
              <Link href="/" prefetch className={
                  pathname === '/'
                    ? 'border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                    : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                }
              >
                Home
              </Link>
              <Link href="/Ideas" prefetch className={
                  pathname === '/Ideas'
                    ? 'border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                    : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                }
              >
                Ideas 
              </Link>
              <Link href="/Projects" prefetch className={
                  pathname === '/Projects'
                    ? 'border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                    : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                }
              >
                Projects
              </Link>
              <Link href="/Contact" prefetch className={
                  pathname === '/Contact'
                    ? 'border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                    : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                }
              >
                Contact Us
              </Link>
              <ThemeButton />
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
            <ThemeButton />
            <Disclosure.Button className="inline-flex items-center justify-center p-2 
    rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none 
    focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:hover:bg-gray-800">
                    {open ?
                    (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    ) :
                    (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


                    )}
            </Disclosure.Button>
           
            </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
  <div className="pt-2 space-y-1">
    
    <Link href="/" prefetch className={`${
      pathname === "/" 
        ? 'bg-teal-50 border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-500'
        : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-white-700 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:bg-white-500' 
    }`}>
     Home
    </Link>
    <Link href="/Ideas" prefetch className={`${
      pathname === "/Ideas" 
        ? 'bg-teal-50 border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-500'
        : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-white-700 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:bg-white-500' 
    }`}>
     Ideas
    </Link>
    <Link href="/Projects" prefetch className={`${
      pathname === "/Projects" 
        ? 'bg-teal-50 border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-500'
        : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-white-700 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:bg-white-500' 
    }`}>
     Projects
    </Link>
    <Link href="/Contact" prefetch className={`${
      pathname === "/Contact" 
        ? 'bg-teal-50 border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-500'
        : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-white-700 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:bg-white-500' 
    }`}>
     Contact Us
    </Link>
  </div>
</Disclosure.Panel>
           </>
        )}
      </Disclosure>
    )
}
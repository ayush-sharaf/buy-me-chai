'use client'
import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link'
import { useSession,signIn,signOut } from 'next-auth/react'

const NavBar = () => {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  let timeoutId = null;

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => setIsOpen(true), 200);
  };

  const handleMouseLeave = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => setIsOpen(false), 200);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);
  return (
    
    <nav className='bg-slate-950 text-white flex justify-between px-4 h-16 items-center'>
      <div className='logo font-bold text-lg'><Link href='/'>BuyMeChai</Link></div>

      {/* <ul className='flex justify-around gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
        </ul> */}
        {session && <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Welcome {session.user.email}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        className={`absolute z-10 ${
          isOpen ? 'block' : 'hidden'
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ml-36 dark:bg-gray-700`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <Link
              href="/dashboard"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Your Page
            </Link>
          </li>
          
          <li>
            <Link
            onClick={()=>signOut()}
            href="/login"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </div>}
        {session && <div><button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>signOut()}>Logout</button></div>}
       
      
        {!session && <Link href={"/login"}>
        <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Login</button>
        </Link>
}
    </nav>
  )
}

export default NavBar

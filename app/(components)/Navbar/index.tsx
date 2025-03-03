"use client";
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed} from '@/state';
import { Bell, Menu, Search, Settings, X } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import profile from '@/assets/profile.png';



const Navbar = () => {
        const dispatch = useAppDispatch();
        const isSidebarCollapsed = useAppSelector(state => state.global.isSidebarCollapsed);
        // const isDarkMode = useAppSelector(state => state.global.isDarkMode);
    
        const toggleSidebar = () => {
            dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
        }

        // const toggleDarkMode = () => {
        //     dispatch(setIsDarkMode(!isDarkMode));
        // }
 
  return (
    <div className='flex justify-between items-center w-full mb-7'>
         {/* LEFT SIDE  */}
         <div className='flex justify-between items-center gap-5 md:pl-5'>
            <button className='px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100 cursor-pointer border-2 border-blue-300' onClick={toggleSidebar}>
                {
                    isSidebarCollapsed ? <Menu className='w-6 h-6' /> : <X className='w-6 h-6'/>
                }
                
            </button>
        
         <div className='relative'>
            <input type="search" placeholder='Start typing to search products' className='pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500' />
            
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <Search className='w-6 h-6 text-gray-500'  size={20}/>
            </div>
         </div>
         </div>
            {/* RIGHT SIDE  */}

        <div className='flex justify-between items-center gap-5'>
            <div className='hidden md:flex justify-between items-center gap-5'>
                <div>
                    {/* <button onClick={toggleDarkMode}>
                        {
                            isDarkMode ? <Sun className='w-6 h-6 cursor-pointer text-gray-500' size={24} /> : <Moon className='w-6 h-6 cursor-pointer text-gray-500' size={24} />
                        }
                    </button> */}
                </div>
           
            <div className='relative'>
                <Bell className='w-6 h-6 cursor-pointer text-gray-500' size={24} />
                <span className='absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs leading-none text-red-100 bg-red-400 rounded-full'>1</span>
            </div>
            <hr className='w-0 h-7 border border-solid border-l border-gray-300 mx-3'/>
            <div className='flex items-center gap-3 cursor-pointer'>
                <div className='w-9 h-9'>
                    <Image src={profile} className='w-full h-full object-cover rounded-full' alt='profile picture' />
                </div>
                <span className='font-semibold'>John Doe</span>
            </div>
            </div>
        </div>
        <Link href='/settings'>
        <Settings className='hidden cursor-pointer text-gray-500 sm:block' size={24} />
        </Link>
    </div>
  )
}

export default Navbar
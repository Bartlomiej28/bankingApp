import React from 'react';
import profileImage from '../assets/profileImage.png';
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import './active.css'

function SidebarComponent() {
  return (
    <div className='h-screen w-full flex flex-col justify-between p-4 border border-t-0 border-b-0 border-l-0'>
        <div className='flex flex-col gap-4'>
          <p className='text-3xl font-bold font-serif px-4 pt-2 mb-4'>Fortis Bank</p>
          <NavLink to='/home' className='px-8 py-4 w-full cursor-pointer font-medium rounded-md hover:bg-blue-100 duration-200'>Home</NavLink>
          <NavLink to='/my-cards' className='px-8 py-4 w-full cursor-pointer font-medium rounded-md hover:bg-blue-100 duration-200'>My Cards</NavLink>
          <NavLink to='/transaction-history' className='px-8 py-4 w-full cursor-pointer font-medium rounded-md hover:bg-blue-100 duration-200'>Transaction History</NavLink>
          <NavLink to='/payment-transfer' className='px-8 py-4 w-full cursor-pointer font-medium rounded-md hover:bg-blue-100 duration-200'>Payment Transfer</NavLink>
          <NavLink to='/more' className='px-8 py-4 w-full cursor-pointer font-medium rounded-md hover:bg-blue-100 duration-200'>More</NavLink>
        </div>

        <div className='w-full border-t pt-4 flex gap-2 items-center'>
          <img src={profileImage} alt='profile' className='w-12 h-12 rounded-full object-cover object-center'/>
          <div className='flex flex-col'>
            <p className='font-semibold'>Bartłomiej Boczyło</p>
            <p className='font-semibold text-xs text-gray-500'>bartlomiej.boczylo@gmail.com</p>
          </div>
          <p className='text-2xl text-gray-500 cursor-pointer ml-auto'><IoIosLogOut /></p>
        </div>
    </div>
  );
}

export default SidebarComponent;

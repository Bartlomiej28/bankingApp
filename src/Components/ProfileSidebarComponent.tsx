import React from 'react'
import profileImage from '../assets/profileImage.png'
import { CgScreen } from "react-icons/cg";
import { AiOutlineShopping } from "react-icons/ai";
import { MdOutlineSavings } from "react-icons/md";
import './animations.css'

function ProfileSidebarComponent() {
  return (
    <div className='w-full min-h-screen h-screen flex flex-col border border-t-0 border-r-0 border-b-0 sticky top-0'>
        <div className='w-full h-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative p-4'>
          <img src={profileImage} alt='profile' className='w-32 h-32 object-cover object-center rounded-full absolute -bottom-14'/>
        </div>
        <div className='flex flex-col gap-4 p-4'>
          <div className='h-auto mt-12'>
            <p className='text-3xl font-semibold'>Bartłomiej Boczyło</p>
            <p className='text-gray-500'>bartlomiej.boczylo@gmail.com</p>
          </div>
          <div className='w-full h-64'>
            <p className='font-bold mb-4'>My Cards</p>
              <div className="relative space-y-4">
                <button className="card absolute top-0 w-64 h-32 bg-[url('bg-purple.png')] bg-cover rounded-lg shadow-lg"></button>
                <button className="card absolute top-2 w-64 h-32 bg-[url('bg-red.png')] bg-cover  rounded-lg shadow-lg hover:bg-green-600"></button>
                <button className="card absolute top-8 w-64 h-32 bg-[url('bg-blue.png')] bg-cover  rounded-lg shadow-lg hover:bg-red-600"></button>
                <button className="card absolute top-14 w-64 h-32 bg-[url('bg-colored.png')] bg-cover rounded-lg shadow-lg hover:bg-yellow-600"></button>
            </div>
          </div>

          <div className='w-full flex flex-col gap-2'>
            <p className='font-bold'>My Budgets</p>

            <div className='w-full h-auto p-4 flex flex-row gap-4 bg-blue-100 items-center rounded-2xl cursor-pointer'>
              <p className='p-4 bg-blue-300 rounded-full text-xl text-blue-700'><CgScreen /></p>
              <div className='w-full flex flex-col gap-1'>
                <div className='flex flex-row justify-between'>
                  <p className='text-blue-800 font-semibold'>Subscriptions</p>
                  <p className='text-blue-500'>$25 left</p>
                </div>
                <progress className="progress progress-info w-full" value="25" max="100"></progress>
              </div>
            </div>

            <div className='w-full h-auto p-4 flex flex-row gap-4 bg-pink-100 items-center rounded-2xl cursor-pointer'>
              <p className='p-4 bg-pink-300 rounded-full text-xl text-pink-700'><AiOutlineShopping /></p>
              <div className='w-full flex flex-col gap-1'>
                <div className='flex flex-row justify-between'>
                  <p className='text-pink-800 font-semibold'>Food and booze</p>
                  <p className='text-pink-500'>$75 left</p>
                </div>
                <progress className="progress progress-secondary w-full" value="70" max="100"></progress>
              </div>
            </div>

            <div className='w-full h-auto p-4 flex flex-row gap-4 bg-green-100 items-center rounded-2xl cursor-pointer'>
              <p className='p-4 bg-green-300 rounded-full text-xl text-green-700'><MdOutlineSavings /></p>
              <div className='w-full flex flex-col gap-1'>
                <div className='flex flex-row justify-between'>
                  <p className='text-green-800 font-semibold'>Saving</p>
                  <p className='text-green-500'>$50 left</p>
                </div>
                <progress className="progress progress-success w-full" value="50" max="100"></progress>
              </div>
            </div>

          </div>

          
        </div>
    </div>
  )
}

export default ProfileSidebarComponent
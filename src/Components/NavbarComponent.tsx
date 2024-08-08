import React from 'react'
import { Link } from 'react-router-dom'

function NavbarComponent() {
  return (
    <div className='w-full h-16 flex flex-row justify-between px-16 border items-center fixed z-10 bg-white'>
      <div className='flex flex-row gap-8 items-center'>
        <p className='text-2xl font-bold'>Logo</p>
        <div className='flex gap-4'>
          <Link to='/home'>Home</Link>
          <Link to='/home'>My Cards</Link>
          <Link to='/home'>Transactions</Link>
          <Link to='/home'>Payment Transfer</Link>
        </div>
      </div>
      <div className='flex flex-row gap-4'>
        <div>Log in</div>
        <div>Sign up</div>
      </div>
    </div>
  )
}

export default NavbarComponent
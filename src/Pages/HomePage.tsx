import React from 'react'
import HomeComponent from '../Components/HomeComponent'
import ProfileSidebarComponent from '../Components/ProfileSidebarComponent'

function HomePage() {
  return (
    <div className='w-full flex flex-row'>
      <div className='w-8/12'>
        <HomeComponent/>
      </div>
      <div className='w-4/12'>
        <ProfileSidebarComponent/>
      </div>
    </div>
  )
}

export default HomePage
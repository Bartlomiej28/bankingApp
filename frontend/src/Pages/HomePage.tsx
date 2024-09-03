import React from 'react'
import HomeComponent from '../Components/HomeComponent'
import ProfileSidebarComponent from '../Components/ProfileSidebarComponent'

function HomePage() {
  return (
    <div className='w-full flex flex-col-reverse lg:flex-row'>
      <div className='w-full lg:w-8/12'>
        <HomeComponent/>
      </div>
      <div className='w-full h-auto sm:h-auto md:h-auto lg:min-h-screen sm:w-full md:w-full lg:w-4/12'>
        <ProfileSidebarComponent/>
      </div>
    </div>
  )
}

export default HomePage
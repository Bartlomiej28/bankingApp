import React from 'react'

function HeroComponent() {
  return (
    <section className='w-full min-h-screen h-auto flex flex-row'>
        <div className='w-1/2 bg-yellow-300'>
            
        </div>
        <div className='w-1/2 flex justify-center'>
            <img alt='hero' src='https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80' className='w-auto h-screen object-cover'/>
        </div>
    </section>
  )
}

export default HeroComponent
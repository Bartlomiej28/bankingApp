import React from 'react'
import Companies from './Companies'
function HeroComponent() {
  
  return (
    <section className="w-full min-h-screen h-auto flex flex-col lg:flex-row justify-center items-center p-16 pt-20">
      <div className='w-full lg:w-1/2 h-auto lg:pr-8 '>
        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">Start your journey with <span className="text-blue-600">FortisBank</span></h1>
        <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Send money, open savings accounts, invest, and manage your finances all in one place.</p>
        <div className="mt-7 flex flex-col sm:flex-row gap-4">
          <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Get started
            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>
          <a className="mt-3 sm:mt-0 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800" href="#">
            Contact sales team
          </a>
        </div>
        <Companies/>
      </div>
      <div className='w-full lg:w-1/2 h-auto flex justify-center items-center '>
        <img className="max-w-full" src='https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80' alt="landing"/>
      </div>
    </section>
  )
}

export default HeroComponent


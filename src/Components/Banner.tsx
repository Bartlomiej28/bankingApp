import React from 'react'

function Banner() {
  return (
    <section className=" text-black mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center ">
      <div className="mx-auto max-w-3xl text-center">
      <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
        Manage your money today 
          <span className="sm:block"> with FortisBank. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          Explore numerous opportunities and join us in our journey of wallet growth.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a className="block w-full rounded border border-blue-500 duration-300 bg-blue-500 px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-blue-500 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" href="#">Get Started</a>

          <a className="block w-full rounded border border-blue-500 duration-300 px-12 py-3 text-sm font-medium text-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" href="#">
          Learn More
          </a>
      </div>
      </div>
    </section>
  )
}

export default Banner
import React from 'react'

type PageHeaderType = {
    style: "colored" | "normal",
    title: string,
    description: string,
    numberOfColoredWord: number
}

function PageHeader({style, title, description, numberOfColoredWord} : PageHeaderType) {
    const words = title.split(' '); 
  return (
    <div className='w-full h-auto flex flex-col gap-2'>
      <div className='text-4xl font-bold'>
        {words.map((word, index) => (
            <span key={index} className={style === 'colored' && index === numberOfColoredWord - 1 ? 'text-blue-500' : ''}>
              {word}{' '}
            </span>
          ))}
      </div>
      <p>{description}</p>
    </div>
  )
}

export default PageHeader


/*
    style:  Colored / Normal
    title:  Welcome, Bartłomiej
    description: Manage your money in safe and smart way with Us.
*/
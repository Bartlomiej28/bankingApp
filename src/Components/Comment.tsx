import React from 'react'

interface Comment{
    name: string,
    text: string,
    image: string
}

function Comment({name, text, image} : Comment) {
  return (
    <div className="aspect-video p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
    <div className="flex gap-4 items-center">
      <div className="w-12 h-12">
        <img className="w-12 h-12 object-cover rounded-full" src={image} loading="lazy"/>
      </div>
        <h6 className="text-lg font-medium text-gray-700 dark:text-white">{name}</h6>
    </div>
    <p className="mt-8">{text}</p>
  </div>
  )
}

export default Comment
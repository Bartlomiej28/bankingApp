import React from 'react'

type MoreCardType = {
    title: string,
    description: string,
}

function MoreCard({title, description}: MoreCardType) {
  return (
    <div className="card bg-base-100 w-1/4 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
                <button className="btn bg-blue-500 text-white">Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default MoreCard
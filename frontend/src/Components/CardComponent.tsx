import React from 'react'

import logo from '../assets/logo.png'
import chip from '../assets/chip.png'

type CardComponentProps = {
  color: string,
  cardNumber: number,
  cardOwner: string,
};


function CardComponent({color, cardNumber, cardOwner} : CardComponentProps) {

  return (
    <div className={`relative bg-cover p-6 rounded-2xl max-w-sm w-full shadow-md 
    ${color === 'red' ? "bg-[url('bg-red.png')]" :
      color === 'blue'? "bg-[url('bg-blue.png')]" :
      color === 'purple'? "bg-[url('bg-purple.png')]" :
      color === 'colored'? "bg-[url('bg-colored.png')]" :
      "bg-[url('bg-black.png')]"
    }`}>
      <header className="flex items-center justify-between">
        <span className="flex items-center space-x-2">
          <img src={logo} alt="Master Card Logo" className="w-12" />
          <h5 className="text-white text-lg font-normal">Master Card</h5>
        </span>
        <img src={chip} alt="Chip" className="w-16" />
      </header>
      <div className="mt-10 flex justify-between items-end">
        <div>
          <h6 className="text-white text-xs font-normal">Card Number</h6>
          <h5 className="text-white text-xl font-normal tracking-widest mt-1">{cardNumber}</h5>
          <h5 className="text-white text-lg font-normal mt-5">{cardOwner}</h5>
        </div>
        <div>
          <h6 className="text-white text-xs font-normal">Valid Thru</h6>
          <h5 className="text-white text-lg font-normal">05/28</h5>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
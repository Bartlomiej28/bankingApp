import React from 'react'

function BuyDepositComponent() {
  return (
    <div className='w-full h-screen bg-black bg-opacity-50 flex justify-center items-center absolute top-0 left-0'>
        <div className='w-1/3 h-1/2 bg-white rounded-xl p-4 flex flex-col gap-3 relative'>
            <p className='absolute top-4 right-4'>X</p>

            <p className='mt-4'>The account from which you want to open a deposit</p>
            <p>Bartłomiej Boczyło 1234567890</p>
            <p>Duration of the deposit: 07.08.2024 - 07.11.2024</p>
            <p>Interest: 4%</p>
            <p>Deposit amount</p>
            <input type="text" placeholder="Enter the deposit amount" className="input input-bordered w-full" />
            <button className='px-4 py-2 bg-blue-500 rounded-2xl text-white font-bold mt-4'>Open a deposit</button>
        </div>
    </div>
  )
}

export default BuyDepositComponent
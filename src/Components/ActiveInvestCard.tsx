import React from 'react'

function ActiveInvestCard() {
  return (
    <div className='w-1/3 flex flex-col gap-4 bg-blue-50 rounded-sm p-4'>
        <p className='font-bold'>Deposit</p>
        <div className='flex flex-row justify-between mb-6'>
            <p className='items-start'>Interest: 4,25%</p>
            <div className='flex flex-col'>
                <p>Deposit amount</p>
                <p>8 500,00 $</p>
            </div>
        </div>
        <div className='flex flex-row justify-between'>
            <p>Duration: 3 months</p>
            <p>To: 28.08.2024</p>
        </div>
        <progress className="progress w-full" value="70" max="100"></progress>
    </div>
  )
}

export default ActiveInvestCard
import React from 'react'
import ActiveInvestCard from './ActiveInvestCard'

function ActiveDepositsAndInvests() {
  return (
    <div className='w-full flex flex-wrap gap-4'>
        <ActiveInvestCard/>
        <ActiveInvestCard/>
    </div>
  )
}

export default ActiveDepositsAndInvests
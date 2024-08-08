import React from 'react'
import PageHeader from '../Components/PageHeader'
import MoreCard from '../Components/MoreCard'
import BuyDepositComponent from '../Components/BuyDepositComponent'

function MorePage() {
  return (
    <div className='w-full min-h-screen h-auto p-8 flex flex-col gap-4 '>
        <PageHeader style='colored' title='Explore more options' description='Explore more options to increase your account balance' numberOfColoredWord={2}/>
        <div className="divider"></div>
        <div className='w-full flex flex-wrap gap-4'>
            <MoreCard title='Deposit 4%' description='deposit with an interest rate of 4% per annum for 3 months'/>

            <MoreCard title='Deposit 6%' description='deposit with an interest rate of 4% per annum for 9 months'/>

            <MoreCard title='Deposit 12%' description='deposit with an interest rate of 4% per annum for 18 months.'/>

            <MoreCard title='Buy Bitcoin' description='Invest in bitcoin safely. Buy now and sell whenever you want.'/>

            
        </div>
    </div>
  )
}

export default MorePage

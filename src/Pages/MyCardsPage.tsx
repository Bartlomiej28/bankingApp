import React from 'react'
import CardComponent from '../Components/CardComponent'
import PageHeader from '../Components/PageHeader'

function MyCardsPage() {
  return (
    <div className='w-full min-h-screen h-auto p-8 flex flex-col gap-4'>
      <PageHeader style='normal' title='My Cards' description='Effortlessly Manage Your Banking Cards' numberOfColoredWord={0}/>
      <p className='font-semibold'>Your Cards:</p>
      <div className='w-full h-auto flex flex-wrap'>
        <div className='flex flex-col gap-2 w-1/4 px-1 py-2'>
          <CardComponent color='red'/>
          <div className='w-full flex flex-row justify-between'>
            <p>Spending this month</p>
            <p>$3,124</p>
          </div>
          <progress className="progress w-full" value="40" max="100"></progress>
        </div>

        <div className='flex flex-col gap-2 w-1/4 px-1 py-2'>
          <CardComponent color='blue'/>
          <div className='w-full flex flex-row justify-between'>
            <p>Spending this month</p>
            <p>$3,124</p>
          </div>
          <progress className="progress w-full" value="40" max="100"></progress>
        </div>

        <div className='flex flex-col gap-2 w-1/4 px-1 py-2'>
          <CardComponent color='colored'/>
          <div className='w-full flex flex-row justify-between'>
            <p>Spending this month</p>
            <p>$3,124</p>
          </div>
          <progress className="progress w-full" value="40" max="100"></progress>
        </div>

        <div className='flex flex-col gap-2 w-1/4 px-1 py-2'>
          <CardComponent color='purple'/>
          <div className='w-full flex flex-row justify-between'>
            <p>Spending this month</p>
            <p>$3,124</p>
          </div>
          <progress className="progress w-full" value="40" max="100"></progress>
        </div>

        <div className='flex flex-col gap-2 w-1/4 px-1 py-2'>
          <CardComponent color='black'/>
          <div className='w-full flex flex-row justify-between'>
            <p>Spending this month</p>
            <p>$3,124</p>
          </div>
          <progress className="progress w-full" value="40" max="100"></progress>
        </div>

        <div className='flex flex-col gap-2 w-1/4 px-1 py-2'>
          <CardComponent color='blue'/>
          <div className='w-full flex flex-row justify-between'>
            <p>Spending this month</p>
            <p>$3,124</p>
          </div>
          <progress className="progress w-full" value="40" max="100"></progress>
        </div>

        

        

      </div>
    </div>
  )
}

export default MyCardsPage
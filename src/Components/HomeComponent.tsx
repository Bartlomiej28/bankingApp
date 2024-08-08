import React from 'react'
import RecentTransactionsComponent from './RecentTransactionsComponent'
import PageHeader from './PageHeader'
import ActiveDepositsAndInvests from './ActiveDepositsAndInvests'


function HomeComponent() {
  return (
    <div className='min-h-screen w-full h-auto flex flex-col gap-4 p-8'>
        <PageHeader style='colored' title='Welcome, Bartłomiej' description='Manage your money in safe and smart way with Us.' numberOfColoredWord={2}/>
        <div className='w-full h-auto border rounded-2xl p-4 flex flex-row gap-4'>
            <div className='w-40 h-40 bg-green-500 rounded-full'>

            </div>
            <div className='flex flex-col gap-4'>
                <div>
                    <p>Total Current Balance:</p>
                    <p className='text-2xl font-bold'>$20,698.12</p>
                </div>
               <div>
                    <p>Accessible:</p>
                    <p className='text-2xl font-bold'>$698.12</p>
               </div>
            </div>
        </div>
        <ActiveDepositsAndInvests/>
        <RecentTransactionsComponent/>
    </div>
  )
}

export default HomeComponent
import React from 'react'
import RecentTransactionsComponent from './RecentTransactionsComponent'
import PageHeader from './PageHeader'
import ActiveDepositsAndInvests from './ActiveDepositsAndInvests'
import { useSelector } from 'react-redux';
import { RootState } from '../store';


function HomeComponent() {
  const name = useSelector((state: RootState) => state.userData.name)
  const amount = useSelector((state: RootState) => state.userData.amount)
  return (
    <div className='min-h-screen w-full h-auto flex flex-col gap-4 p-4 md:p-8'>
        <PageHeader style='colored' title={`Welcome ${name}`} description='Manage your money in safe and smart way with Us.' numberOfColoredWord={2}/>
        <div className='w-full h-auto border rounded-2xl p-4 flex flex-col md:flex-row gap-4'>
           
            <div className='flex flex-col gap-4'>
                <div>
                    <p>Total Current Balance:</p>
                    <p className='text-2xl font-bold'>${amount}</p>
                </div>
               <div>
                    <p>Accessible:</p>
                    <p className='text-2xl font-bold'>${amount}</p>
               </div>
            </div>
        </div>
        <ActiveDepositsAndInvests/>
        <RecentTransactionsComponent/>
    </div>
  )
}

export default HomeComponent
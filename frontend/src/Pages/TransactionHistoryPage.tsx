import React from 'react'
import PageHeader from '../Components/PageHeader'
import RecentTransactionsComponent from '../Components/RecentTransactionsComponent'

function TransactionHistoryPage() {
  return (
    <div className='w-full min-h-screen h-auto p-4 md:p-6 lg:p-8 flex flex-col gap-4'>
        <PageHeader 
          style='normal' 
          title='Transaction History' 
          description='Gain Insights and Track Your Transactions Over Time' 
          numberOfColoredWord={0} 
        />
        <div className='w-full flex flex-col gap-4'>
          <RecentTransactionsComponent/>
        </div>
    </div>
  )
}

export default TransactionHistoryPage

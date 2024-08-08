import React from 'react'
import SidebarComponent from '../Components/SidebarComponent'
import {Route, Routes} from 'react-router-dom'
import HomePage from './HomePage'
import MyCardsPage from './MyCardsPage'
import TransactionHistoryPage from './TransactionHistoryPage'
import PaymentTransferPage from './PaymentTransferPage'
import MorePage from './MorePage'


function MainPage() {
  return (
    <section className='w-full min-h-screen h-auto flex flex-row'>
      <div className='w-2/12 fixed top-0 left-0'>
        <SidebarComponent/>
      </div>
      <div className='w-10/12 absolute right-0'>
        <Routes>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/my-cards' element={<MyCardsPage/>}/>
          <Route path='/transaction-history' element={<TransactionHistoryPage/>}/>
          <Route path='/payment-transfer' element={<PaymentTransferPage/>}/>
          <Route path='/more' element={<MorePage/>}/>
        </Routes>
      </div>
      
    </section>
  )
}

export default MainPage
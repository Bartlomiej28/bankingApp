import React, {useEffect} from 'react'
import SidebarComponent from '../Components/SidebarComponent'
import {Route, Routes} from 'react-router-dom'
import HomePage from './HomePage'
import MyCardsPage from './MyCardsPage'
import TransactionHistoryPage from './TransactionHistoryPage'
import PaymentTransferPage from './PaymentTransferPage'
import MorePage from './MorePage'
import BuyDepositComponent from '../Components/BuyDepositComponent'
import { useDispatch, useSelector } from 'react-redux';
import { userDataActions } from '../store/userData-slice'
import { RootState } from '../store'
import CreateNewCardWindow from '../Components/CreateNewCardWindow'
import { GiHamburgerMenu } from "react-icons/gi";
import { appActions } from '../store/app-slice'

function MainPage() {

  const dispatch = useDispatch();
  const showButDepositWindow = useSelector((state: RootState) => state.appData.showBuyDepositWindow)
  const showCreateNewCardWindow = useSelector((state: RootState) => state.appData.showCreateNewCardWindow)
  const showSidebar = useSelector((state: RootState) => state.appData.showSidebar)

  useEffect(() => {
    const userInfoString = localStorage.getItem('User');
    const userInfo = userInfoString ? JSON.parse(userInfoString) : {};
    dispatch(userDataActions.setDataUser(userInfo));

  }, []);

  const handleShowSidebar = () =>{
    dispatch(appActions.setShowSidebar())
  }

  return (
    <section className='w-full min-h-screen h-auto flex flex-row'>
      <div className={`hidden lg:flex lg:w-2/12 h-screen top-0 left-0`}>
        <SidebarComponent />
      </div>
      {showButDepositWindow && <BuyDepositComponent />}
      {showCreateNewCardWindow && <CreateNewCardWindow />}
      <div className='w-full lg:w-10/12 relative pt-16 lg:pt-0'>
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/my-cards' element={<MyCardsPage />} />
          <Route path='/transaction-history' element={<TransactionHistoryPage />} />
          <Route path='/payment-transfer' element={<PaymentTransferPage />} />
          <Route path='/more' element={<MorePage />} />
        </Routes>
      </div>

      <div className='lg:hidden fixed top-0 left-0 w-full bg-white shadow-md z-50'>
        <div className='w-full h-16 bg-white flex items-center px-4'>
          <GiHamburgerMenu onClick={handleShowSidebar} className='cursor-pointer text-3xl' />
        </div>
      </div>

      {showSidebar && (
        <div className='lg:hidden fixed top-16 left-0 w-full bg-white h-screen overflow-y-auto z-40'>
          <SidebarComponent />
        </div>
      )}

    </section>
  )
}

export default MainPage
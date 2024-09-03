import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import axios from 'axios';
import { appActions } from '../store/app-slice';

function BuyDepositComponent() {
  const amountRef = useRef<HTMLInputElement>(null);
  const depositPercent = useSelector((state: RootState) => state.appData.depositPercent);
  const depositMonths = useSelector((state: RootState) => state.appData.depositMonths);
  const name = useSelector((state: RootState) => state.userData.name);
  const surename = useSelector((state: RootState) => state.userData.surename);
  const ssnpesel = useSelector((state: RootState) => state.userData.ssnpesel);
  const userID = useSelector((state: RootState) => state.userData.id);
  const dispatch = useDispatch();


  const today = new Date();
  const formattedDate = today.toLocaleDateString('pl-PL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });


  const newDate = new Date(today);
  newDate.setMonth(today.getMonth() + depositMonths);
  const formattedFutureDate = newDate.toLocaleDateString('pl-PL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const handleOpenADeposit = async () => {
    const amount = parseFloat(amountRef.current?.value || '0');
    if (isNaN(amount) || amount <= 0) {
      console.log('Invalid amount');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/deposit/new-deposit', {
        ownerID: userID,
        amount,
        endData: formattedFutureDate,
        percent: depositPercent,
        duration: depositMonths,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error opening deposit:', error);
    }
  };

  const handleCloseWindow = () => {
    dispatch(appActions.setShowBuyDepositWindow());
  };

  return (
    <div className='w-full h-screen bg-black bg-opacity-50 flex justify-center items-center absolute bottom-0 left-0 z-40'>
      <div className='w-11/12 md:w-2/3 lg:w-1/3 h-auto bg-white rounded-xl p-4 flex flex-col gap-3 relative'>
        <p onClick={handleCloseWindow} className='absolute top-4 right-4 cursor-pointer text-lg md:text-xl'>X</p>
        <p className='mt-4 text-lg md:text-2xl font-semibold'>The account from which you want to open a deposit</p>
        <p className='text-sm md:text-base'>{name} {surename} {ssnpesel}</p>
        <p className='text-sm md:text-base'>Duration of the deposit: <b>{formattedDate} - {formattedFutureDate}</b></p>
        <p className='text-sm md:text-base'>Percent: <b>{depositPercent}%</b></p>
        <input ref={amountRef} type="number" placeholder="Enter the deposit amount" className="input input-bordered w-full text-sm md:text-base" />
        <button onClick={handleOpenADeposit} className='px-4 py-2 bg-blue-500 rounded-2xl text-white font-bold mt-4 text-sm md:text-base'>Open a deposit</button>
      </div>
    </div>
  );
}

export default BuyDepositComponent;

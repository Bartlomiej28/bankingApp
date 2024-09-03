import React from 'react';
import { appActions } from '../store/app-slice';
import { useDispatch } from 'react-redux';

type MoreCardType = {
  title: string;
  description: string;
  percent: number;
  months: number;
};

function MoreCard({ title, description, percent, months }: MoreCardType) {
  const dispatch = useDispatch();

  const depositData = {
    depositPercent: percent,
    depositMonths: months
  }
  const handleBuyDeposit = () => {
    dispatch(appActions.setShowBuyDepositWindow())
    dispatch(appActions.setDepositData(depositData))
  }
  return (
    <div className='bg-base-100 shadow-xl rounded-lg p-4'>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className='text-sm text-gray-600 mb-4'>{description}</p>
      <div className="card-actions justify-end">
        <button onClick={handleBuyDeposit} className="btn bg-blue-500 text-white hover:bg-blue-600">Buy Now</button>
      </div>
    </div>
  );
}

export default MoreCard;

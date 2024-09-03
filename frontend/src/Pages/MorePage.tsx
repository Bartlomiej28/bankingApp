import React from 'react';
import PageHeader from '../Components/PageHeader';
import MoreCard from '../Components/MoreCard';

function MorePage() {
  return (
    <div className='w-full min-h-screen h-auto p-4 md:p-8 flex flex-col gap-4'>
      <PageHeader 
        style='colored' 
        title='Explore more options' 
        description='Explore more options to increase your account balance' 
        numberOfColoredWord={2}
      />
      <div className="divider"></div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <MoreCard title='Deposit 4%' description='Deposit with an interest rate of 4% per annum for 3 months' percent={4} months={3}/>
        <MoreCard title='Deposit 6%' description='Deposit with an interest rate of 6% per annum for 9 months' percent={6} months={9}/>
        <MoreCard title='Deposit 12%' description='Deposit with an interest rate of 12% per annum for 18 months' percent={12} months={18}/>
      </div>
    </div>
  );
}

export default MorePage;

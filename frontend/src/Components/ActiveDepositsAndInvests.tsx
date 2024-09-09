import React, { useEffect, useState } from 'react'
import ActiveInvestCard from './ActiveInvestCard'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import axios from 'axios'
import LoadingWindowComponent from './LoadingWindowComponent'

type Deposit = {
  id: string
  ownerID: string,
  amount: number,
  percent: number,
  openData: Date,
  endData:   string,
  duration: number,
}

function ActiveDepositsAndInvests() {
  const userID = useSelector((state: RootState) => state.userData.id);
  const [deposits, setDeposits] = useState<Deposit[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    const getUserDeposits = async() =>{
      try {
        setIsLoading(true)
        const response = await axios.get(`${process.env.VERCEL_BACKEND_URL}/deposit/user-deposits/${userID}`)
        setDeposits(response.data.data)
      } catch (error) {
        console.log(error)
      }finally{
        setIsLoading(false)
      }
    }
    getUserDeposits();
  },[userID])

  return (
    <div className='w-full p-4'>
      {isLoading === true ? <LoadingWindowComponent/> :
      <>
        {deposits.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4'>
          {deposits.map((deposit) => (
            <ActiveInvestCard
              key={deposit.id}
              percent={deposit.percent}
              amount={deposit.amount}
              duration={deposit.duration}
              endData={deposit.endData}
              startData={deposit.openData}
            />
          ))}
        </div>
      ) : (
        <p className='w-full text-center text-2xl font-bold opacity-50'>Nie posiadasz otwartych depozytów</p>
      )}
      </>}
    </div>
  )
}

export default ActiveDepositsAndInvests

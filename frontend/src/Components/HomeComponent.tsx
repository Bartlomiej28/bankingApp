import React, { useEffect, useState } from 'react'
import RecentTransactionsComponent from './RecentTransactionsComponent'
import PageHeader from './PageHeader'
import ActiveDepositsAndInvests from './ActiveDepositsAndInvests'
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import axios from 'axios';
import LoadingWindowComponent from './LoadingWindowComponent';


function HomeComponent() {
  const name = useSelector((state: RootState) => state.userData.name);
  const userID = useSelector((state: RootState) => state.userData.id);
  const [amount, setAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    const getUserAmount = async() =>{
      try {
        setIsLoading(true)
        const response = await axios.get(`${process.env.VERCEL_BACKEND_URL}/user/${userID}`)
        setAmount(response.data.amount)
      } catch (error) {
        console.log(error)
      }finally{
        setIsLoading(false)
      }
    }
    getUserAmount();
  },[])

  return (
    <div className='min-h-screen w-full h-auto flex flex-col gap-4 p-4 md:p-8'>
        <PageHeader style='colored' title={`Welcome ${name}`} description='Manage your money in safe and smart way with Us.' numberOfColoredWord={2}/>
        <div className='w-full h-auto border rounded-2xl p-4 flex flex-col md:flex-row gap-4'>
           {isLoading === true ? <LoadingWindowComponent/> : <>
            <div className='flex flex-col gap-4'>
                <div>
                    <p>Total Current Balance:</p>
                    <p className='text-2xl font-bold'>${amount}</p>
                </div>
            </div>
           </>}
            

        </div>
        <ActiveDepositsAndInvests/>
        <RecentTransactionsComponent/>
    </div>
  )
}

export default HomeComponent

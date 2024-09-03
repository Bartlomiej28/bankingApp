import React, {useEffect, useState} from 'react'
import CardComponent from '../Components/CardComponent'
import PageHeader from '../Components/PageHeader'
import CreateNewCardWindow from '../Components/CreateNewCardWindow';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { appActions } from '../store/app-slice';

type Card = {
  id: string,
  name: string,
  totalAmount: number,
  currentAmount: number,
  color: string,
  cardNumber: number,
  cardOwner: string,
}

function MyCardsPage() {
  const [cards, setCards] = useState<Card[]>([])
  const userID = useSelector((state: RootState) => state.userData.id)
  const dispatch = useDispatch();

  const handleShowWindow = () =>{
    dispatch(appActions.setShowCreateNewCardWindow())
  }

  useEffect(()=>{
    const handleGetUserCards = async() =>{
      try {
        const response = await axios.get(`http://localhost:3000/card/user-cards/${userID}`)
        setCards(response.data.data)
      } catch (error) {
        console.log(error)
      }finally{

      }
    }
    handleGetUserCards();
  },[userID])

  return (
    <div className='w-full min-h-screen h-auto p-4 sm:p-6 md:p-8 flex flex-col gap-4'>
  <PageHeader 
    style='normal' 
    title='My Cards' 
    description='Effortlessly Manage Your Banking Cards' 
    numberOfColoredWord={0}
  />
  <p className='font-semibold text-lg md:text-xl'>Your Cards:</p>
  
  <button 
    onClick={handleShowWindow} 
    className='fixed bottom-4 right-4 h-12 w-12 sm:h-16 z-50 sm:w-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl'
  >
    +
  </button>

  {cards.length > 0 ? (
    <div className='w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {cards.map((card) => (
        <div key={card.id} className='flex flex-col gap-2 px-2 py-2 bg-gray-100 rounded-lg shadow-md items-center'>
          <CardComponent 
            color={`${card.color}`} 
            cardNumber={card.cardNumber} 
            cardOwner={card.cardOwner}
          />
          <div className='w-full'>
            <div className='w-full flex flex-row justify-between'>
              <p className='text-sm sm:text-base'>{card.name}</p>
              <p className='text-sm sm:text-base'>$ {card.currentAmount}</p>
            </div>
            <progress 
              className="progress w-full" 
              value={((card.currentAmount / card.totalAmount) * 100).toFixed(2)} 
              max="100"
            ></progress>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className='w-full text-2xl text-center font-bold opacity-50'>Nie posiadasz kart</p>
  )}
</div>
      
    
  )
}

export default MyCardsPage


/*

 <div className='flex flex-col gap-2 px-1 py-2'>
          <CardComponent color='blue'/>
          <div className='w-full flex flex-row justify-between'>
            <p>Spending this month</p>
            <p>$3,124</p>
          </div>
          <progress className="progress w-full" value="40" max="100"></progress>
        </div>

        <div className='flex flex-col gap-2 px-1 py-2'>
          <CardComponent color='colored'/>
          <div className='w-full flex flex-row justify-between'>
            <p>Spending this month</p>
            <p>$3,124</p>
          </div>
          <progress className="progress w-full" value="40" max="100"></progress>
        </div>

        <div className='flex flex-col gap-2 px-1 py-2'>
          <CardComponent color='purple'/>
          <div className='w-full flex flex-row justify-between'>
            <p>Spending this month</p>
            <p>$3,124</p>
          </div>
          <progress className="progress w-full" value="40" max="100"></progress>
        </div>

        <div className='flex flex-col gap-2 px-1 py-2'>
          <CardComponent color='black'/>
          <div className='w-full flex flex-row justify-between'>
            <p>Spending this month</p>
            <p>$3,124</p>
          </div>
          <progress className="progress w-full" value="40" max="100"></progress>
        </div>

        <div className='flex flex-col gap-2 px-1 py-2'>
          <CardComponent color='blue'/>
          <div className='w-full flex flex-row justify-between'>
            <p>Spending this month</p>
            <p>$3,124</p>
          </div>
          <progress className="progress w-full" value="40" max="100"></progress>
        </div>
        */
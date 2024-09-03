import React, { useRef, useState } from 'react';
import blackCard from '../bg-black.png';
import blueCard from '../bg-blue.png';
import bgColored from '../bg-colored.png';
import bgPurple from '../bg-purple.png';
import bgRed from '../bg-red.png';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store'; 
import { appActions } from '../store/app-slice';
import { userDataActions } from '../store/userData-slice';
import LoadingWindowComponent from './LoadingWindowComponent';

interface UserData {
    amount: number;
    id: string;
    name: string;
    surename: string;
}

type CardColor = 'black' | 'blue' | 'colored' | 'purple' | 'red';

function CreateNewCardWindow() {
    const userID = useSelector((state: RootState) => state.userData.id);
    const name = useSelector((state: RootState) => state.userData.name);
    const surename = useSelector((state: RootState) => state.userData.surename);
    const dispatch = useDispatch();
    
    const amountRef = useRef<HTMLInputElement>(null);
    const cardNameRef = useRef<HTMLInputElement>(null);
    const [color, setColor] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function generateRandom16DigitNumber() {
        const min = 10 ** 15; 
        const max = 10 ** 16 - 1; 
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const cardNumber = generateRandom16DigitNumber();

    const handleCreateNewCard = async () => {
        try {
            setIsLoading(true)
            const transferAmount = parseFloat(amountRef.current?.value || "0");
            const response = await axios.post('https://banking-app-beige.vercel.app/card/create-card', { 
                totalAmount: transferAmount,
                currentAmount: transferAmount,
                color: color,
                cardNumber: cardNumber,
                cardName: cardNameRef.current?.value,
                cardOwner: name + " " + surename,
                cardOwnerID: userID
            });

            const userDataString = localStorage.getItem('User');
            if (userDataString !== null) {
                const userData: UserData = JSON.parse(userDataString);
                userData.amount -= transferAmount;
                localStorage.setItem('User', JSON.stringify(userData));


                dispatch(userDataActions.setNewAmount(transferAmount));
            } else {
                console.error('Brak danych w localStorage dla klucza "User".');
            }

        } catch (error) {
            console.error('Error creating card:', error);
        }finally{
          setIsLoading(false)
        }
    };

    const handleSetCardColor = (color: CardColor) => () => {
        setColor(color);
    };

    const handleCloseWindow = () =>{
        dispatch(appActions.setShowCreateNewCardWindow())
    }

    return (
    <div className='bg-black w-full min-h-screen h-auto absolute bottom-0 left-0 bg-opacity-50 z-40 flex justify-center items-center pt-16'>
      <div className='w-full sm:w-11/12 md:w-9/12 lg:w-1/3 h-auto bg-white relative'>
        <p onClick={handleCloseWindow} className='absolute top-4 left-4 cursor-pointer'>X</p>
        <div className='mt-8 p-4'>
          <h1 className='text-3xl font-bold text-center mb-4'>Create new card</h1>
          <input 
            type='text' 
            ref={cardNameRef} 
            placeholder='Type card name' 
            className='input input-bordered w-full mb-4' 
          />
          <input 
            type='number' 
            ref={amountRef} 
            placeholder='Type Transfer' 
            className='input input-bordered w-full mb-4' 
          />
          <p>Select color:</p>
          <div className='w-full h-auto grid grid-cols-3 gap-2 mb-4'>
            <img 
              onClick={handleSetCardColor('black')} 
              src={blackCard} 
              alt="black-card" 
              className='w-full h-24 cursor-pointer hover:border-4 border-blue-500 ease-in-out delay-100' 
            />
            <img 
              onClick={handleSetCardColor('blue')} 
              src={blueCard} 
              alt="blue-card" 
              className='w-full h-24 cursor-pointer hover:border-4 border-blue-500 ease-in-out delay-100' 
            />
            <img 
              onClick={handleSetCardColor('colored')} 
              src={bgColored} 
              alt="colored-card" 
              className='w-full h-24 cursor-pointer hover:border-4 border-blue-500 ease-in-out delay-100' 
            />
            <img 
              onClick={handleSetCardColor('purple')} 
              src={bgPurple} 
              alt="purple-card" 
              className='w-full h-24 cursor-pointer hover:border-4 border-blue-500 ease-in-out delay-100' 
            />
            <img 
              onClick={handleSetCardColor('red')} 
              src={bgRed} 
              alt="red-card" 
              className='w-full h-24 cursor-pointer hover:border-4 border-blue-500 ease-in-out delay-100' 
            />
          </div>
          <button 
            onClick={handleCreateNewCard} 
            className='w-full px-4 py-2 bg-blue-500 text-white rounded-xl'
          >
            {isLoading === true ? <LoadingWindowComponent/> : "Create Card"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateNewCardWindow;

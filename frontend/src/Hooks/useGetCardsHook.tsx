import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import axios from 'axios';

type Card = {
    id: string,
    name: string,
    totalAmount: number,
    currentAmount: number,
    color: string,
    cardNumber: number,
    cardOwner: string,
  }

function useGetCardsHook() {
    const [cards, setCards] = useState<Card[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const userID = useSelector((state: RootState) => state.userData.id)

    useEffect(()=>{
        const handleGetUserCards = async() =>{
          try {
            setIsLoading(true)
            const response = await axios.get(`https://banking-app-beige.vercel.app/card/user-cards/${userID}`)
            setCards(response.data.data)
          } catch (error) {
            console.log(error)
          }finally{
            setIsLoading(false)
          }
        }
        handleGetUserCards();
    },[userID])

    return {cards, isLoading}
}

export default useGetCardsHook

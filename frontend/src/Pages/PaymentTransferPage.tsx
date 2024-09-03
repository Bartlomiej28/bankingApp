import React, {useState, useRef, useEffect} from 'react'
import PageHeader from '../Components/PageHeader'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

type Card ={
  id: string,
  name: string
}

function PaymentTransferPage() {
  const [isLoading, setIsLoading] = useState(false);
  const sourceRef = useRef<HTMLSelectElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const recipientEmailAddressRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null)
  const userID = useSelector((state: RootState) => state.userData.id)
  const [cards, setCards] = useState<Card[]>([]);

  const handleGetCards = async() =>{
    try {
      const response = await axios.get(`http://localhost:3000/card/user-cards/${userID}`);
      setCards(response.data.data)
      console.log(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    handleGetCards();
  },[userID])

  

  const handleTransaction = async() =>{
    try {
      setIsLoading(true)
      await axios.put('http://localhost:3000/transaction/new-transaction',{
        from: userID,
        to: recipientEmailAddressRef.current?.value,
        transferAmount: amountRef.current?.value,
        source: sourceRef.current?.value
      });
    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }

  const handleSendTransferNotification = async() =>{
    try {
      await axios.post('http://localhost:3000/transaction/transaction-notification',{
        from: userID,
        to: recipientEmailAddressRef.current?.value,
        transferAmount: amountRef.current?.value,
        description: descriptionRef.current?.value
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleSendTransfer = async() =>{
    await handleTransaction();
    await handleSendTransferNotification();
  }

  return (
    <div className='w-full min-h-screen h-auto p-4 md:p-8 flex flex-col gap-4'>
      <PageHeader 
        style='normal' 
        title='Payment Transfer' 
        description='Please provide any specific details or notes related to the payment transfer' 
        numberOfColoredWord={0} 
      />
      <div>
        <p className='font-semibold text-xl mb-1'>Transfer details</p>
        <p className='text-gray-500'>Enter the details of the recipient</p>
        <div className="divider"></div>

        <div className='w-full h-auto flex flex-col md:flex-row gap-4 md:gap-16 items-start md:items-center'>
          <div className='flex flex-col w-full md:w-1/5'>
            <p>Select Source Card</p>
            <p className='text-xs text-gray-500'>Select the card you want to transfer funds from</p>
          </div>
          <select className="select select-bordered w-full md:w-1/3" ref={sourceRef}>
            <option value="normal" selected>Normal</option>
            {cards.map((card) => (
              <option key={card.id} value={card.id}>{card.name}</option>
            ))}
          </select>
        </div>

        <div className="divider"></div>

        <div className='w-full h-auto flex flex-col md:flex-row gap-4 md:gap-16 items-start md:items-center'>
          <div className='flex flex-col w-full md:w-1/5'>
            <p>Transfer Note (Optional)</p>
            <p className='text-xs text-gray-500'>Please provide any additional information or instructions related to the transfer</p>
          </div>
          <textarea
            ref={descriptionRef}
            placeholder="Dear John,
                        
                      I hope this message finds you well. I am transferring $100 to your account for fun. Please confirm once you receive it."
            className="textarea textarea-bordered textarea-md w-full md:w-1/3 h-32">
            </textarea>
        </div>

        <div className="divider"></div>

        <div>
          <p className='font-semibold text-xl mb-1'>Bank account details</p>
          <p className='text-gray-500'>Enter the bank account details of the recipient</p>
        </div>

        <div className="divider"></div>

        <div className='w-full h-auto flex flex-col md:flex-row gap-4 md:gap-16 items-start md:items-center'>
            <p className='w-full md:w-1/5'>Recipient's Email Address</p>
            <input 
              name="email"
              ref={recipientEmailAddressRef} 
              type="text" 
              placeholder="Enter the email address" 
              className="input input-bordered w-full md:w-1/3" 
            />
        </div>

        <div className="divider"></div>

        <div className='w-full h-auto flex flex-col md:flex-row gap-4 md:gap-16 items-start md:items-center'>
            <p className='w-full md:w-1/5'>Recipient's Bank Account Number</p>
            <input 
              type="text" 
              placeholder="Enter the account number" 
              className="input input-bordered w-full md:w-1/3" 
            />
        </div>

        <div className="divider"></div>

        <div className='w-full h-auto flex flex-col md:flex-row gap-4 md:gap-16 items-start md:items-center'>
            <p className='w-full md:w-1/5'>Amount</p>
            <input 
              ref={amountRef} 
              type="text" 
              placeholder="Enter the amount" 
              className="input input-bordered w-full md:w-1/3" 
            />
        </div>

        <div className="divider"></div>

        <button 
          onClick={handleSendTransfer} 
          className='w-full md:w-[57.5%] bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-bold'>
          Transfer Funds
        </button>

      </div>
    </div>
  )
}

export default PaymentTransferPage
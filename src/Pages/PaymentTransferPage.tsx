import React from 'react'
import PageHeader from '../Components/PageHeader'

function PaymentTransferPage() {
  return (
    <div className='w-full min-h-screen h-auto p-8 flex flex-col gap-4'>
      <PageHeader style='normal' title='Payment Transfer' description='Please provide any specific details or notes related to the payment transfer' numberOfColoredWord={0}/>
      <div>
        <p className='font-semibold text-xl mb-1'>Transfer details</p>
        <p className='text-gray-500'>Enter the detais of the recipient</p>
        <div className="divider"></div>

        <div className='w-full h-auto flex flex-row gap-16 items-center'>
          <div className='flex flex-col w-1/5'>
            <p>Select Source Card</p>
            <p className='text-xs text-gray-500'>Select the card you want to transfer funds from</p>
          </div>
          <select className="select select-bordered w-1/3">
            <option disabled selected>Normal</option>
            <option>Normal Apple</option>
            <option>Normal Orange</option>
            <option>Normal Tomato</option>
          </select>
        </div>

        <div className="divider"></div>

        <div className='w-full h-auto flex flex-row gap-16 items-center'>
          <div className='flex flex-col w-1/5'>
            <p>Transfer Note (Optionnal)</p>
            <p className='text-xs text-gray-500'>Please provide any additional information or instructions related to the transfer</p>
          </div>
          <textarea
            placeholder="Dear John,
                        
                      I hope this message finds you well. I am transfering $100 to your account for fun. Please confirm once you receive it."
            className="textarea textarea-bordered textarea-md w-1/3 h-32">

            </textarea>
        </div>

        <div className="divider"></div>

        <div>
          <p className='font-semibold text-xl mb-1'>Bank account details</p>
          <p className='text-gray-500'>Enter the bank account details of the recipient</p>
        </div>

        <div className="divider"></div>

        <div className='w-full h-auto flex flex-row gap-16 items-center'>
            <p className='w-1/5'>Recipient's Email Address</p>
            <input type="text" placeholder="Enter the email address" className="input input-bordered w-1/3" />
        </div>

        <div className="divider"></div>

        <div className='w-full h-auto flex flex-row gap-16 items-center'>
            <p className='w-1/5'>Recipient's Bank Account Number</p>
            <input type="text" placeholder="Enter the account number" className="input input-bordered w-1/3" />
        </div>

        <div className="divider"></div>

        <div className='w-full h-auto flex flex-row gap-16 items-center'>
            <p className='w-1/5'>Amount</p>
            <input type="text" placeholder="Enter the amount" className="input input-bordered w-1/3" />
        </div>

        <div className="divider"></div>

        <button className='w-[57.5%] bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-bold'>
          Transfer Funds
        </button>

      </div>
    </div>
  )
}

export default PaymentTransferPage
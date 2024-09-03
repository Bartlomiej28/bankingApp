import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import TransactionPerson from './TransactionPerson';
import LoadingWindowComponent from './LoadingWindowComponent';

type Transaction = {
    id: string,
    from: string,
    to: string,
    amount: number,
    description: string,
    type: string,
    createdAt: string 
};

function RecentTransactionsComponent() {
    const userID = useSelector((state: RootState) => state.userData.id);
    const email = useSelector((state: RootState) => state.userData.email);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        
        const getUserTransactions = async () => {
            try {
                setIsLoading(true)
                if (userID && email) {
                    const response = await axios.get(`http://localhost:3000/transaction/transaction-history?param1=${userID}&param2=${email}`);
                    setTransactions(response.data);
                }
            } catch (error) {
                console.error(error);
            }finally{
                setIsLoading(false)
            }
        };
    
        getUserTransactions();
    }, [userID, email]);

    return (
        <div className='w-full h-auto bg-slate-50 rounded-2xl p-4'>
            <p className='text-2xl font-semibold'>Recent Transactions:</p>
            <div className="overflow-x-auto">
                <table className="table w-full min-w-full">
                    <thead>
                        <tr className='text-left'>
                            <th className='p-2'>Transaction</th>
                            <th className='p-2'>Amount</th>
                            <th className='p-2'>Status</th>
                            <th className='p-2'>Date</th>
                            <th className='p-2'>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading === true ? <LoadingWindowComponent/> :
                        <>
                            {transactions.map(transaction => (
                            <tr key={transaction.id} className={`${transaction.type === 'loss'? 'bg-red-200' : 'bg-green-100'}`}>
                                <TransactionPerson 
                                    userID={transaction.from} 
                                    transactionType={transaction.type} 
                                    to={transaction.to} 
                                />
                                <td className='p-2'>${transaction.amount}</td>
                                <td className='p-2'>
                                    <span className={`badge badge-ghost badge-sm ${transaction.type === 'loss' ? 'badge-error' : 'badge-success'}`}>
                                        {transaction.type === 'loss' ? 'Loss' : 'Gain'}
                                    </span>
                                </td>
                                <td className='p-2'>{new Date(transaction.createdAt).toLocaleDateString('pl-PL')}</td>
                                <td className='p-2'>{transaction.description}</td>
                            </tr>
                        ))}
                        </>
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th className='p-2'>Transaction</th>
                            <th className='p-2'>Amount</th>
                            <th className='p-2'>Status</th>
                            <th className='p-2'>Date</th>
                            <th className='p-2'>Category</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default RecentTransactionsComponent;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

type UserData = {
    thumbnail: string,
    name: string,
    surename: string,
    email: string
};

type TransactionPersonProps = {
    userID: string,
    transactionType: string,
    to: string
};

function TransactionPerson({ userID, transactionType, to }: TransactionPersonProps) {
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if(transactionType === "loss"){
                    response = await axios.get(`http://localhost:3000/user/email/${to}`);
                } else {
                    response = await axios.get(`http://localhost:3000/user/${userID}`);
                }
                setUserData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [userID, to, transactionType]);

    if (!userData) return <td className='p-2'>Loading...</td>;

    return (
        <td className='p-2'>
            <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img src={userData.thumbnail} alt="Avatar" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{userData.name} {userData.surename}</div>
                    <div className="text-sm opacity-50">{userData.email}</div>
                </div>
            </div>
        </td>
    );
}

export default TransactionPerson;

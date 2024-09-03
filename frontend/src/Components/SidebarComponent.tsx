import React from 'react';
import profileImage from '../assets/profileImage.png';
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import './active.css'
import { useNavigate } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { IoCardSharp } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { PiHandDepositFill } from "react-icons/pi";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { appActions } from '../store/app-slice';


function SidebarComponent() {
  const name = useSelector((state: RootState) => state.userData.name);
  const surename = useSelector((state: RootState) => state.userData.surename);
  const email = useSelector((state: RootState) => state.userData.email);

  const navigation = useNavigate();
  const handleLogOut = () =>{
    localStorage.removeItem("User");
    navigation('/')
  }

  const navLinks = [
    {
      path: '/home',
      name: 'Home',
      icon: <IoMdHome/>
    },
    {
      path: '/my-cards',
      name: 'My Cards',
      icon: <IoCardSharp/>
    },
    {
      path: '/transaction-history',
      name: 'Transaction History',
      icon: <GrTransaction/>
    },
    {
      path: '/payment-transfer',
      name: 'Payment Transfer',
      icon: <FaMoneyBillTransfer/>
    },
    {
      path: '/more',
      name: 'Deposits',
      icon: <PiHandDepositFill/>
    },
  ]
  const dispatch = useDispatch();
  const handleCloseSidebar = () =>{
    dispatch(appActions.setShowSidebar())
  }

  return (
    <div className='h-full w-full flex flex-col justify-between p-4 border border-t-0 border-b-0 border-l-0 bg-white'>
        <div className='flex flex-col gap-4'>
          <p className='text-3xl font-bold font-serif px-4 pt-2 mb-4'>Fortis Bank</p>
          
          {navLinks.map((link, index) =>(
            <NavLink onClick={handleCloseSidebar} key={index} to={link.path} className='px-8 py-4 w-full cursor-pointer font-medium rounded-md hover:bg-blue-100 duration-200'>
              <span className='flex flex-row gap-2 items-center'>{link.icon} {link.name}</span>
            </NavLink>
          ))}

        </div>

        <div className='w-full border-t pt-4 flex gap-2 items-center'>
          <img src={profileImage} alt='profile' className='w-12 h-12 rounded-full object-cover object-center'/>
          <div className='flex flex-col'>
            <p className='font-semibold'>{name} {surename}</p>
            <p className='font-semibold text-xs text-gray-500'>{email}</p>
          </div>
          <p onClick={handleLogOut} className='text-2xl text-gray-500 cursor-pointer ml-auto'><IoIosLogOut /></p>
        </div>
    </div>
  );
}

export default SidebarComponent;

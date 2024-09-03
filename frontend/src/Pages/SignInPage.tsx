import React, { useRef, useState } from 'react'
import HomePageImage from '../assets/HomePage.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingWindowComponent from '../Components/LoadingWindowComponent';



function SignInPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSignIn = async() =>{

    try {
      setIsLoading(true)
      const response = await axios.post('http://localhost:3000/sign-in',{
        email: emailRef.current?.value,
        password: passwordRef.current?.value
      })

      if(response.status === 200){
        console.log('User logged successfully to jest response data: ', response.data);
        localStorage.setItem("User", JSON.stringify(response.data));
        navigate('/home');
        window.location.reload();
        
        
      }else{
        console.log("Try one more time.")
      }

    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }
  
  return (
    <div className='w-full min-h-screen h-auto flex flex-col md:flex-row gap-4'>
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-4'>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder='Enter your email address'
                  className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ref={emailRef}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="/" className="font-semibold text-blue-500 hover:text-blue-600">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder='Enter your password'
                  className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ref={passwordRef}
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleSignIn}
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {isLoading === true ? <LoadingWindowComponent/> : 'Sign in'}
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="/sign-up" className="font-semibold leading-6 text-blue-600 hover:text-blue-500 duration-300">
              Sign up
            </a>
          </p>
        </div>
      </div>
      <div className='w-1/2 bg-blue-50 flex items-center relative'>
        <img src={HomePageImage} alt='HomePage' className='w-11/12 h-4/6 object-cover object-left  absolute right-0'/>
      </div>
    </div>
  )
}

export default SignInPage
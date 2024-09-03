import React, {useState, useRef} from 'react'
import { Field, Label, Switch } from '@headlessui/react'
import HomePageImage from '../assets/HomePage.png'
import { useNavigate } from 'react-router-dom';

import axios from 'axios'
import LoadingWindowComponent from '../Components/LoadingWindowComponent';

function SignUpPage() {
  const [agreed, setAgreed] = useState(false)
  const nameRef = useRef<HTMLInputElement>(null)
  const surenameRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const dateOfBirthRef = useRef<HTMLInputElement>(null);
  const SSNPESELRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigate();

  const handleSignUp = async() => {
  try {
    setIsLoading(true);
    const response = await axios.post('https://banking-app-beige.vercel.app/sign-up', {
      name: nameRef.current?.value,
      surename: surenameRef.current?.value,
      address: addressRef.current?.value,
      dateOfBirth: dateOfBirthRef.current?.value,
      ssnpesel: SSNPESELRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      thumbnail: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
    });
    console.log('User created successfully:', response.data);
    navigation('/sign-in')
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className='w-full min-h-screen h-auto flex flex-col lg:flex-row gap-4'>
      <div className='w-full lg:w-1/2 flex flex-col justify-center items-center bg-white p-4'>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sign Up</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Please enter your details.
          </p>
        </div>
        <div className="mx-auto max-w-xl mt-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  placeholder='ex: John'
                  className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  ref={nameRef}
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  placeholder='ex: Doe'
                  className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  ref={surenameRef}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                Address
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder='Enter your specific address'
                  className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  ref={addressRef}
                />
              </div>
            </div>

            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Date of Birth
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  placeholder='dd-mm-yyyy'
                  className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  ref={dateOfBirthRef}
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                SSN/PESEL
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  placeholder='ex:1234'
                  className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  ref={SSNPESELRef}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder='Enter your email'
                  className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  ref={emailRef}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="password"
                  autoComplete="current-password"
                  placeholder='Enter your password'
                  className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  ref={passwordRef}
                />
              </div>
            </div>
            
            <Field className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 data-[checked]:bg-blue-600"
                >
                   <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                  />
                </Switch>
              </div>
              <Label className="text-sm leading-6 text-gray-600">
                By selecting this, you agree to our{' '}
                <a href="/" className="font-semibold text-blue-600">
                  privacy&nbsp;policy
                </a>
                .
              </Label>
            </Field>
          </div>
          <div className="mt-10">
            <button
              onClick={handleSignUp}
              className={`block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 duration-300 ${agreed === false ? 'opacity-50' : ''}`}
              disabled={!agreed}
            >
             {isLoading === true ? <LoadingWindowComponent/> : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>
      <div className='w-1/2 bg-blue-50 flex items-center relative'>
        <img src={HomePageImage} alt='HomePage' className='w-11/12 h-4/6 object-cover object-left  absolute right-0'/>
      </div>
    </div>
  )
}

export default SignUpPage

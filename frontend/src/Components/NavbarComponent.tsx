import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(isMenuOpen => !isMenuOpen);
  };
  return (
    <header className="flex flex-wrap fixed sm:justify-start sm:flex-nowrap z-50 w-full backdrop-blur-xl border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700 ">
      <nav className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between">
          <a className="flex-none text-xl font-semibold dark:text-white" href="/" aria-label="Brand">LearnEra</a>
          <div className="sm:hidden">
            <button type="button" onClick={toggleMenu} className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700" aria-label="Toggle navigation">
              <svg className={isMenuOpen ? "hs-collapse-open:block hidden flex-shrink-0 size-4" : "hs-collapse-open:hidden flex-shrink-0 size-4"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
              <svg className={isMenuOpen ? "hs-collapse-open:hidden flex-shrink-0 size-4" :  "hs-collapse-open:block hidden flex-shrink-0 size-4"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </div>
        <div id="navbar-collapse-with-animation" className={isMenuOpen ? "hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" : "hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"}>
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            <Link to='#home' className="font-medium text-blue-600 sm:py-6 dark:text-blue-500" aria-current="page">Home</Link>
            <Link to='#cards' className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500">My Cards</Link>
            <Link to='#transactions' className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500">Transactions</Link>
            <Link to='#payment-transfer' className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500">Payment Transfer</Link>
            <div className="flex items-center gap-x-2 sm:ms-auto">
              <Link className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500" to='/sign-in'>
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Log in
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavbarComponent





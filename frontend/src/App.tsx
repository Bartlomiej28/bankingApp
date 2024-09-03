import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import MainPage from './Pages/MainPage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';

function App() {
  return (
    <div className='w-full min-h-screen h-auto'>
      <Routes>
        <Route path={'/'} element={<LandingPage/>}/>
        <Route path='/sign-in' element={<SignInPage/>}/>
        <Route path='/sign-up' element={<SignUpPage/>}/>
        <Route path={'/*'} element={<MainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

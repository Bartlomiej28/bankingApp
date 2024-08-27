import React from 'react'
import HeroComponent from '../Components/HeroComponent'
import NavbarComponent from '../Components/NavbarComponent'
import Features from '../Components/Features'
import Stats from '../Components/Stats'
import Comments from '../Components/Comments'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
function LandingPage() {
  return (
    <div>
        <NavbarComponent/>
        <HeroComponent/>
        <Features/>
        <Stats/>
        <Comments/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default LandingPage
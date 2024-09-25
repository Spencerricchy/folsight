import React from 'react'
import '../assets/scss/style.scss'
import MainBody from '../Components/MainBody'
import LearnMore from '../Components/LearnMore'
import MiddleCover from '../Components/MiddleCover'
import Pricings from '../Components/Pricings'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import CarouselSilde from '../Components/CarouselSilde'

const Home = () => {
  return (
    <div className='Home'>
      <Navbar />
        <Header />
      <MainBody />
      <LearnMore />
      <CarouselSilde />
      <MiddleCover />
      <Pricings />
      <Footer />
    </div>
  )
}

export default Home
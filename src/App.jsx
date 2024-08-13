// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Navbar } from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'
import Feature from './components/Feature'
import Card from './components/Card'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

// eslint-disable-next-line no-unused-vars
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar />
      <Landingpage />
      <Marque />
      <About />
      <Eyes />
      <Feature />
      <Card />
      <Footer />
    </div>
  )
}

export default App
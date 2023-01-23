import React from 'react'
import Hero from '../../components/Hero'
import Featured from '../../components/Featured'
import Testimonials from '../../components/Testimonials'
import About from '../../components/About'
import './HomePage.css'


const HomePage = () => {
  return (
    <main>
        <Hero />
        <Featured />
        <Testimonials />
        <About />
    </main>
  )
}

export default HomePage
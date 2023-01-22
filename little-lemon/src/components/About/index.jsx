import React from 'react'
import './index.css'
import aboutImage1 from '../../assets/Mario-and-AdrianB.jpg'
import aboutImage2 from '../../assets/Mario-and-AdrianA.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='about-section'>
        <div className='about-container'>
            <div className='title-container'>
                <h3 className='sub-title'>Little Lemon</h3>
                <h5 className='small-title'>Chicago</h5>
            </div>

            <p className='paragraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Distinctio laboriosam esse itaque eum illum explicabo qui corrupti dolores animi facere.
                Quasi harum eum at deleniti quod dolorem. Quae, odio cum.
            </p>
        </div>
        
        <div className='images-wrapper'>
          <img src={aboutImage1} alt='restaurant-photo' className='about-image'/>
          <img src={aboutImage2} alt='restaurant-photo' className='about-image'/>
        </div>
    </section>
  )
}

export default Hero
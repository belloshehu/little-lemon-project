import React from 'react'
import './index.css'
import heroImage from '../../assets/restauranfood.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='hero-section'>
        <div className='hero-container'>
            <div className='title-container'>
                <h1 className='title'>Little Lemon</h1>
                <h4 className='sub-title'>Chicago</h4>
            </div>

            <p className='paragraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Distinctio laboriosam esse itaque eum illum explicabo qui corrupti dolores animi facere.
                Quasi harum eum at deleniti quod dolorem. Quae, odio cum.
            </p>

            <Link to='/order' className='btn bg-yellow bold'>Get started</Link>
        </div>
        <div className='hero-image-wrapper'>
            <img src={heroImage} alt='restaurant-photo' className='hero-image'/>
        </div>
    </section>
  )
}

export default Hero
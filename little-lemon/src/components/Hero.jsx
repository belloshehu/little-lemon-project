import React from 'react'

const Hero = () => {
  return (
    <section className='hero-section'>
        <div>
            <div>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Distinctio laboriosam esse itaque eum illum explicabo qui corrupti dolores animi facere.
                Quasi harum eum at deleniti quod dolorem. Quae, odio cum.
            </p>

            <a href='/order' role='button' className='btn yellow-bg'>Get started</a>
        </div>
        <div>
            <img src={heroImage} alt='restaurant-photo' />
        </div>
    </section>
  )
}

export default Hero
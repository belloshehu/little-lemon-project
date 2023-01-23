import React from 'react'
import './Testimonial.css'
import Stars from '../Stars'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
 

const index = ({stars, userName, review, userImageUrl}) => {
  return (
    <article className='testimonial'>
         <div className='stars-wrapper'>
            <Stars stars={stars} />
        </div>
        <div className='image-wrapper'>
            <img src={userImageUrl} alt='user' className='user-image'/>
            <p><FaQuoteLeft className='text-gray'/> {review} <FaQuoteRight className='text-gray' /></p>
        </div>
        <h4 className='text-gray'>{userName}</h4>
    </article>
  )
}

export default index
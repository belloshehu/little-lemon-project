import React from 'react'
import { FaMotorcycle } from 'react-icons/fa'
import './index.css'


const FeaturedItem = ({imageUrl, name, price, description}) => {

  return (
    <article className='featured'>
        <img src={imageUrl} alt='meal' className='featured-image'/>
        <div className='detail'> 
            <div className='small-bold flex-row justify-between items-center'>
                <h4>{name}</h4>
                <h4 className='price'>${price}</h4>
            </div>
            <p>{description}</p>
            <div className='small-bold flex-row justify-between items-center'>
                <h4>Order a delivery</h4>
                <FaMotorcycle/>
            </div>
        </div>
    </article>
  )
}

export default FeaturedItem
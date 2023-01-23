import React from 'react'
import { FaStar } from 'react-icons/fa'
import './Stars.css'


const index = ({stars}) => {

    const starsList = [1, 2, 3, 4, 5].map( (star, index) =>{

        if(index < stars ){
            return <FaStar className='star text-gold' key={index}/>
        }else{
            return <FaStar className='star text-gray' key={index}/>
        }

    })
    return (
        <article>
            {starsList}
        </article>
    )
}

export default index
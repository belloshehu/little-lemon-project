import React, {useState} from 'react'
import FeaturedItem from '../FeaturedItem'
import './Featured.css'
import greekSaladImage from '../../assets/greek-salad.jpg'
import bruchettaImage from '../../assets/bruchetta.svg'
import lemonDesertImage from '../../assets/lemon-dessert.jpg'
import { Link } from 'react-router-dom'


const featuredItems = [
    {
        name: 'Greek Salad',
        price: 8.00,
        imageUrl: greekSaladImage,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus unde soluta impedit recusandae perspiciatis.'
    },
    {
        name: 'Brucheda',
        price: 10.00,
        imageUrl: bruchettaImage,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus unde soluta impedit recusandae perspiciatis.'
    },
    {
        name: 'Lemon Desert',
        price: 6.00,
        imageUrl: lemonDesertImage,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus unde soluta impedit recusandae perspiciatis.'
    },
]

const Featured = () => {
    const [items, setItems] = useState(featuredItems)
    const featuredList = items.map(item =><FeaturedItem {...item} key={item.name}/>)
    
    return (
        <section className='featured-section'>
            <div className='flex py-20'>
                <h3 className='sub-title'>This week's specials</h3>
                <Link to='/menu' className='btn bg-yellow'>Online menu</Link>
            </div>

            <div className='featured-container'>
                {featuredList}
            </div>
        </section>
    )
}

export default Featured
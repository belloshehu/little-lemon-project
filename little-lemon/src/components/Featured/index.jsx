import React, {useState} from 'react'
import FeaturedItem from '../FeaturedItem'
import './index.css'
import greekSaladImage from '../../assets/greek-salad.jpg'
import bruchettaImage from '../../assets/bruchetta.svg'
import lemonDesertImage from '../../assets/lemon-dessert.jpg'


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
        <section className='featured-container'>
            {featuredList}
        </section>
    )
}

export default Featured
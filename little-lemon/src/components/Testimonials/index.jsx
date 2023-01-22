import React from 'react'
import  './index.css'
import userImageUrl1 from '../../assets/user1.jpg'
import userImageUrl2 from '../../assets/user2.jpg'
import userImageUrl3 from '../../assets/user3.jpg'
import Testimonial from '../Testimonial'


const testimonials = [
    {
        id: 1,
        stars: 5,
        review: 'very satisfying, professional and clean service.',
        userImageUrl: userImageUrl1, 
        userName: 'James Hogan'
    }, 
    {
        id: 2,
        stars: 4,
        review: 'very satisfying, professional and clean service.',
        userImageUrl: userImageUrl2, 
        userName: 'Salisu Garba'
    },
    {
        id: 3,
        stars: 5,
        review: 'very satisfying, professional and clean service.',
        userImageUrl: userImageUrl3, 
        userName: 'Aliyu Anas'
    }
]
const index = () => {

    const testimonialList = testimonials.map( item => <Testimonial  {...item} key={item.id} />)

    return (
        <section className='testimonial-section'>
            <h3 className='sub-title'>Testimonials</h3>
            <div className='testimonial-container'>
                {testimonialList}
            </div>
        </section>
    )
}

export default index
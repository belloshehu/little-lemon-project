import React from 'react'
import { useGlobalContext } from '../../lib/context'
import './BookingForm.css'
import aboutImage1 from '../../assets/Mario-and-AdrianB.jpg'
import aboutImage2 from '../../assets/Mario-and-AdrianA.jpg'
import { useState } from 'react'


const BookingForm = () => {

    const {availableTimes} = useGlobalContext()
    const [reservation, setReservation] = useState({
        date: '',
        time: '',
        guests: 0,
        occasion: ''
    })

    const handleChange = (e) =>{
        e.preventDefault()
        setReservation(prev=>{return {...prev, [e.target.name]: e.target.value }})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(reservation)
    }

    return (
        <section className='booking-section'>
            <h3 className='sub-title'>Table Reservation</h3>

            <div className='form-wrapper'>

                <aside className='images-wrapper'>
                    <img src={aboutImage1} alt='restaurant-photo' className='image'/>
                    <img src={aboutImage2} alt='restaurant-photo' className='image'/>
                </aside>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="res-date">Choose date</label>
                        <input 
                            type='date' 
                            placeholder='Date' 
                            id='res-date' 
                            name='date'
                            value={reservation.date}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="res-time">Choose time</label>
                        <select 
                            id='res-time' 
                            name='time' 
                            value={reservation.time}
                            onChange={handleChange}
                        >
                            {
                                availableTimes.map(time => <option key={time}>{time}</option>)
                            }
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="guests">Number of guests</label>
                        <input 
                            type='number' 
                            id='guests' 
                            placeholder='Guests' 
                            min='1' 
                            max='10'
                            name='guests'
                            value={reservation.guests}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="occasion">Occasion</label>
                        <select 
                            id='occasion' 
                            name='occasion' 
                            value={reservation.occasion}
                            onChange={handleChange}
                        > 
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>

                    <input type='submit' role='button' value='Make your reservation'/>
                </form>
            </div>
        </section>
    )
}

export default BookingForm
import React from 'react'
import './BookingSlot.css'


const BookingSlot = ({time, borderStyle}) => {
  return (
    <article className={`slot ${borderStyle}`}>
        {time}
    </article>
  )
}

export default BookingSlot
import React from 'react'
import './BookedSlot.css'


const BookedSlot = ({time, borderStyle}) => {
  return (
    <article className={`slot ${borderStyle}`}>
        {time}
    </article>
  )
}

export default BookedSlot
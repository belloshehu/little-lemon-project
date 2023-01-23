import React from 'react'
import BookedSlot from '../BookedSlot'
import './BookedSlotItems.css'

const BookedSlotItems = ({slots, borderStyle}) => {
    const slotList = slots.map((slot, index)=>
        <BookedSlot 
            time={slot} borderStyle={borderStyle} key={index}/>
    )

    return (
        <section className='slots-wrapper'>{slotList}</section>
    )
}

export default BookedSlotItems
import React from 'react'
import BookingForm from '../../components/BookingForm'
import { useGlobalContext } from '../../lib/context'
import './BookingPage.css'

const timeSlots = [
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00'
]

const BookingPage = () => {

  return (
    <main>
      <BookingForm /> 
    </main>
  )
}

export default BookingPage
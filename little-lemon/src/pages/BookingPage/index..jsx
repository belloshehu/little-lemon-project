import React from 'react'
import BookingForm from '../../components/BookingForm'
import { useGlobalContext } from '../../lib/context'
import './BookingPage.css'


const BookingPage = () => {

  // const {availableTimes, updateAvailableTimes} = useGlobalContext()


  return (
    <main>
      <BookingForm />
    </main>
  )
}

export default BookingPage
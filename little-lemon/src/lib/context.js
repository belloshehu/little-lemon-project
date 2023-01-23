import {createContext, useContext, useState} from "react";

const timeSlots = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
]


const AppContext = createContext(null);

const AppContextProvider = ({children}) =>{
    // const [timeSlots, setTimeSlots] = useState(timeSlots)
    const [isOpen, setIsOpen] = useState(false)
    const [date, setDate] = useState('')
    const [reservations, setReservations] = useState([])
    const [availableTimes, setAvailableTimes] = useState(timeSlots)
    // const [bookedTimeSlots, setBookedTimeSlots] = useState([])
    const updateTimes = (date) =>{
      const reservationsOfTheDay = reservations.filter(reservation => reservation.date === date)
      const timesOfTheDay = reservationsOfTheDay.map(res => res.time)
      const filteredTimes = timeSlots.filter(time => !timesOfTheDay.includes(time))
      setAvailableTimes(filteredTimes)
      return filteredTimes
    }

    return (
        <AppContext.Provider value={{
            date,
            setDate,
            isOpen,
            updateTimes,
            reservations,
            availableTimes,
            bookedTimeSlots: ()=> timeSlots.filter(time => !availableTimes.includes(time)),
            openNav: ()=>{ setIsOpen(true)},
            closeNav: ()=>{ setIsOpen(false)},
            updateReservations: (reservation)=>{setReservations([...reservations, reservation])},
            updateAvailableTimes: (newTimes)=>{ setAvailableTimes(newTimes) }
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
export default AppContextProvider;
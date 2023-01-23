import {createContext, useContext, useState} from "react";

const AppContext = createContext(null);

const AppContextProvider = ({children}) =>{

    const [isOpen, setIsOpen] = useState(false)
    const [availableTimes, setAvailableTimes] = useState([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ])

    return (
        <AppContext.Provider value={{
            isOpen,
            availableTimes,
            openNav: ()=>{ setIsOpen(true)},
            closeNav: ()=>{ setIsOpen(false)},
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
export default AppContextProvider;
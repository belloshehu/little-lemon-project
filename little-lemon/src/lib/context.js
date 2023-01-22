import {createContext, useContext, useState} from "react";

const AppContext = createContext(null);

const AppContextProvider = ({children}) =>{

    const [isOpen, setIsOpen] = useState(false)

    return (
        <AppContext.Provider value={{
        isOpen,
            openNav: ()=>{ setIsOpen(true)},
            closeNav: ()=>{ setIsOpen(false)},
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
export default AppContextProvider;
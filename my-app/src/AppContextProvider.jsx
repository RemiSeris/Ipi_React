import React, { createContext, useState } from 'react'

export const AppContext = createContext({})

const AppContext = ({ children }) => {

    const [list, setList] = useState()
    const [items, setItems] = useState()



    const value = {
        list,
        setList,
        items,
        setItems
    }



    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider
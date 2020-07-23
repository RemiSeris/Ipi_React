import React, { createContext, useState, useEffect } from 'react'

export const CounterContext = createContext({})

const CounterContextProvider = ({ children }) => {
    const [nb, setNb] = useState(0)

    const inCrementNb = () => {
        setNb(nb+1)
    }

    const decrementNb = () => {
        setNb(nb-1)
    }
    
    const value = {
        inCrementNb,
        decrementNb,
        nb
    }

    return(
        <CounterContext.Provider value={value}>
        {children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider
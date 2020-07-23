import React, {createContext, useState} from 'react'

export const CounterContext = createContext({});

const CounterContextProvider = ({children}) => {
    const [nombre, setNombre] = useState(0);

    const inCrementNombre = () => {
        setNombre(nombre + 1)
    };

    const decrementNombre = () => {
        setNombre(nombre - 1)
    };
    const value = {
        inCrementNombre,
        decrementNombre,
        nombre
    };

    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    )
};

export default CounterContextProvider

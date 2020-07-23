import React from 'react'
import "./exo4.css"
import CounterMore from './components/CounterMore'
import CounterLess from './components/CounterLess'
import Counter from './components/Counter'


const Exo4 = () => {
    
    return (
        <CounterContextProvider>
            <div className={"exo4"}>
                <div className={"counterContainer"}>
                    <CounterMore />
                    <Counter />
                    <CounterLess />
                </div>
            </div>
        </CounterContextProvider>
    )
}

export default Exo4
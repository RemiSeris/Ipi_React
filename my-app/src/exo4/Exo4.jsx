import React from 'react'
import "./exo4.css"

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
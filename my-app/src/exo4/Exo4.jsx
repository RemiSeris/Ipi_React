import React from 'react'
import "./exo4.css"
import CounterContextProvider from "./CounterContextProvider";
import CounterMore from "./components/CounterMore";
import Counter from "./components/Counter";
import CounterLess from "./components/CounterLess";

const Exo4 = () => {
    return (
        <CounterContextProvider>
            <div className={"exo4"}>
                <div className={"counterContainer"}>
                    <CounterMore/>
                    <Counter/>
                    <CounterLess/>
                </div>
            </div>
        </CounterContextProvider>
    )
}

export default Exo4

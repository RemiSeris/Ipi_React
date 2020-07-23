import React from 'react'
import "./exo1.css"
import Header from "./component/Header"
import Content from "./component/Content"
import Footer from "./component/Footer"

const Exo1 = () => {
    return (
        <div className={"exo1"}>
            <Header appName={Header} />
            <Content content={Content} />
            <Footer legalMention={Footer} />
        </div>
    )
}

export default Exo1
import React from "react"
import reactLogo from '../images/react-icon-small.png'

export default function Navbar() {
    return (
        <nav>
           <img src={reactLogo} alt="react-logo" className="nav--icon" />
           <h2 className="nav--logo_text">ReactFacts</h2>
           <h3 className="nav--title">React Course - Project 1</h3>
        </nav>
    )
}
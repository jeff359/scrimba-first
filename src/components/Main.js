import React from "react"
import reactLogo from '../images/react-icon-large.png'

export default function Main() {
    return (
        <main>
            <h1 className="main--title">Fun facts about React</h1>
            <div className="list-img--div">
                <ul className="main--facts">
                <li>Was first released in 2007</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            {/* <img src={reactLogo}alt="react-logo" className="background--logo" /> */}
            </div>
        </main>
    )
}
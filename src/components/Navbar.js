import React from "react"
import AirBnbLogo from "../images/airbnb-logo.png"
import "../styles/Navbar.css"

export default function Navbar() {

    return (
        <nav className="Navbar">
            <img src={AirBnbLogo} className="Navbar--logo"/>    
        </nav>
    )

}
import React from "react"
import PhotoGrid from "../images/photo-grid.png"
import "../styles/Hero.css"

export default function Hero() {

    return (
        <section className="Hero">
            <img src={PhotoGrid} className="Hero--image"/> 
            <h1 className="Hero--h1">Online Experiences</h1>
            <p className="Hero--p">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )

}
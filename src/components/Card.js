import React from "react"
import CardImage from "../images/card-image.png"
import Star from "../images/star.png"
import "../styles/Card.css"

export default function Card() {

    return (
        <section className="Card">
            <img src={CardImage} className="Card--image"/> 
            <div className="Card--stats">
                <img src={Star} />
                <span>5.0</span>
                <span className="grey">(6) •</span>
                <span className="grey">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </section>
    )

}
import React from "react"
import Star from "../images/star.png"
import "../styles/Card.css"

export default function Card(props) {
    console.log(props)
    return (
        <section className="Card">
            <img src={props.img} className="Card--image"/> 
            <div className="Card--stats">
                <img src={Star} />
                <span>{props.rating}</span>
                <span className="grey">{props.reviewCount} • </span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </section>
    )
}
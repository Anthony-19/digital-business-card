import React from "react";
import CardImage from "../images/myProfilePicture.jpg"
import MessageIcon from "../images/envelope-fill.svg"
import LinkedlnIcon from "../images/linkedin.svg"
export default function CardTop() {
    return(
        <div className="cardTop">
            <img src={CardImage} className="image--tony" />
            <h2>Eze Anthony</h2>
            <h4>Frontend Developer</h4>
            <p>ezeanthony.website</p>
            <div className="button">
                <button className="email"><i className="bi bi-envelope"></i> Email</button>
                <button className="linkedln">
                    <img src={LinkedlnIcon} className="linkedln-icon" /> Linkedln</button>
            </div>
        </div>
    )
 }
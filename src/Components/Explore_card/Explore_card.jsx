import React from "react";
import './Explore_card.css'

export default function Explore_card(title, subtitle, img, btnText) {
    return (
        <div className="Explore_card">
            <div className="Explore_card_text">
                <h3 className="Explore_card_title">{title}</h3>
                <p className="Explore_card_subtitle">{subtitle}</p>   
            </div>
            <img className="Explore_card_img" src={img} alt="" />
            <div className="Explore_cardBtn">{btnText}</div>

        </div>
    )
}
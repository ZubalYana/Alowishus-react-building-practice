import React from "react";
import './BestCoffee_card.css';
export default function BestCoffee_card({img, numberSelling, coffeeName}) {
    return(
        <div className="BestCoffeeCard">
            <div className="card_topPart">
                <img className="card_img" src={img} alt="" />
                <div className="card_topText">
                    <div className="card_numberSelling">{numberSelling}</div>
                    <div className="card_coffeeName">{coffeeName}</div>
                </div>
                <div className="card_text">Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</div>
                <div className="card_priceBtnCon">
                    <div className="card_coffeePrice">$59.99</div>
                    <div className="card_orderBtn">Order now</div>
                </div>
            </div>
        </div>
    )
}
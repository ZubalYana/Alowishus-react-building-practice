import React from "react";
import "./CustomersReviewCard.css";

export default function CustomersReviewCard({img, name}){
    return(
        <div className="customersReview">
            <div className="imgCon">
                <img className="customersReview_img" src={img} alt="" />
            </div>
            <div className="nameAndRating">
                <h3 className="customersReview_name">{name}</h3>
                <div className="starsCon">
                    <img src={starSvg} alt="star" />
                    <img src={starSvg} alt="star" />
                    <img src={starSvg} alt="star" />
                    <img src={starSvg} alt="star" />
                    <img src={starSvg} alt="star" />
                </div>
            </div>
            <div className="reviewText">
            “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia”
            </div>
        </div>
    )
}
import React from "react";
import './Header.css'
import logo from '../../assets/logo.png'
import cartSvg from '../../assets/cart.svg'
export default function Header() {
    return (
        <div className="Header">
            <img className="logo" src={logo} alt="logo" />
            <div className="header_rightSide">
            <ul className="nav">
                <li>Cafe Munu</li>
                <li>About Us</li>
                <li>Find Us</li>
                <li>Alowishus Catering</li>
            </ul>
            <div className="cartBtn">
                <img src={cartSvg} alt="" />
            </div>
            <div className="buyBtn">Buy gift vouchers</div>
            </div>
        </div>
    );
}
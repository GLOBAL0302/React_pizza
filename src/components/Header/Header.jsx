import React from 'react';
import {Link} from "react-router-dom";
import SearchBtn from "../Search/SearchBtn";


const Header = () => {
    return(
        <header className='d-flex justify-between'>
            <Link to="/">
                <div className="header_left d-flex align-center">
                    <img src="img/header_logo.svg" alt="header_pizza_log" style={{marginRight:"17px"}}/>
                    <div>
                        <h2 style={{fontWeight:"800px"}}>REACT PIZZA</h2>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
            </Link>
            <SearchBtn/>
            <Link to="cart">
                <div className="header_right d-flex align-center">
                    <p className="total_price">520 AED</p>
                    <p>3</p>
                </div>
            </Link>
    </header>
    )
};

export default Header;
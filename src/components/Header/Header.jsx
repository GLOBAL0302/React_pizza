import React from 'react';

const Header = () => {
    return(
        <header className='d-flex justify-between'>
        <div className="header_left d-flex align-center">
            <img src="/img/header_logo.svg" alt="header_pizza_log" style={{marginRight:"17px"}}/>
            <div>
                <h2 style={{fontWeight:"800px"}}>REACT PIZZA</h2>
                <p>самая вкусная пицца во вселенной</p>
            </div>
        </div>
        <div className="header_right d-flex align-center">
            <p className="total_price">520 AED</p>
            <p>3</p>
        </div>
    </header>
    )
};

export default Header;
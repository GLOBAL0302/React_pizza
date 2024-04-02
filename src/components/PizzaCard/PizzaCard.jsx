import React from 'react';

const PizzaCard = ({title, price}) => {
    return (
        <div className="pizza_item" style={{width:"280px", height:"459px"}}>
            <img src="/img/all_pizzas/pizza_1.svg" alt=""/>
            <h3 className='text-center'>{title}</h3>
            <div className="pizza_info mb-15">
                <ul className='d-flex justify-around'>
                    <li>тонкое</li>
                    <li>традиционное</li>
                </ul>
                <ul className='d-flex justify-around'>
                    <li>26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                </ul>
            </div>
            <div className="pizza_item_bottom d-flex justify-between align-center">
                <p>from {price} AED</p>
                <button>Add to cart <span>2</span></button>
            </div>
        </div>
    );
};

export default PizzaCard;
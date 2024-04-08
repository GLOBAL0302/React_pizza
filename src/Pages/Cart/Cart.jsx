import React from 'react';
import style from "./Cart.scss"

const Cart = () => {
    return (
        <div className="cartWrapper d-flex justify-center align-center">
            <div className="cart_section">
                <div className="cart_header d-flex">
                    <h4>Cart</h4>
                    <span>Очистить корзину</span>
                </div>
                <div className="cart_content">
                    <div className="cart_item d-flex align-center justify-between">
                        <img src="/img/all_pizzas/pizza_1.svg" alt="" style={{width:"80px", height:"80px"}}/>
                        <p>Сырный цыпленок <br/><span>тонкое тесто, 26 см.</span></p>
                        <div className="cart_quantity d-flex align-center">
                            <button className="cart_decreseBtn"></button>
                            <p>2</p>
                            <button className="cart_increaseBtn"></button>
                        </div>
                        <p>770 AED</p>
                        <button className="cart_item_delete"></button>
                    </div>

                </div>
                <div className="cart_item_total d-flex">
                    <div className="cart_total_left">
                        <p>Всего пицц:  &nbsp; <span>3 шт.</span></p>
                        <button>Вернуться назад</button>
                    </div>
                    <div className="cart_total_right ml-auto">
                        <p>Сумма заказа:<span> 900 ₽</span></p>
                        <button>Оплатить сейчас</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Cart;
import React from 'react';
import style from "./Cart.scss"

const Cart = () => {
    return (
        <div className="cartWrapper">
            <div className="cart_Block">
                <div className="cartHeader d-flex justify-between mb-25">
                    <div className="d-flex">
                        <img src="/img/cartBlock_Cart.svg" alt="cart"/>
                        <h3>Cart</h3>
                    </div>
                    <div className="d-flex align-center">
                        <img src="/img/cartBlock_Trash.svg" alt="trash_icon"/>
                        <span>Clear the cart</span>
                    </div>
                </div>
                <div className="cart_content">
                    <table>
                        <tr>
                            <td className="cart_item_img"><img src="/img/all_pizzas/pizza_1.svg" alt="1"/></td>
                            <td className="cart_item_description">
                                <p>Сырный цыпленок</p>
                                <span>тонкое тесто, 26 см.</span>
                            </td>
                            <td className="cart_item_quantity"><div className="d-flex align-center">
                                <span></span>
                                <p>2</p>
                                <span></span></div></td>
                            <td className="cart_item_price"><p>770 AED</p></td>
                            <td className="cart_item_deleteBtn"><button><img src="/img/Cart_Block_removeBtn.png" alt=""/></button></td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
import React, { useContext } from 'react'
import CartItem from '../cartItem'
import DefaultContext from "../../contexts/DefaultContext";

const CartList = ({ cartList }) => {

    return (
        <div>
            <ol class="list-group list-group-numbered">
                {
                    cartList && cartList.map((product, index) => (
                        <CartItem
                            key={index}
                            productDetail={product} />
                    ))
                }
            </ol>
        </div>
    )
}

export default CartList
import React from 'react'
import CartItem from '../cartItem'

const CartList = ({ products }) => {
    return (
        <div>
            <ol class="list-group list-group-numbered">
                {
                    [...Array(3).keys()].map(p => (
                        <CartItem
                            key={p}
                            productDetail={{
                                name: "Tavuk Döner",
                                price: 90
                            }} />
                    ))
                }
            </ol>
        </div>
    )
}

export default CartList
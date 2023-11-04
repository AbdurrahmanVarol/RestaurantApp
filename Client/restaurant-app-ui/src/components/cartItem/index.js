import React from 'react'

const CartItem = ({ productDetail }) => {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="ms-2 me-auto">
                    {productDetail.name}
                </div>
                <span className="badge bg-primary rounded">{productDetail.price}&#8378;</span>
            </li>
        </>
    )
}

export default CartItem
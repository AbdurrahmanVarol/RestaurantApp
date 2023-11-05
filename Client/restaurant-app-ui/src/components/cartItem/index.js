import React from 'react'

const CartItem = ({ productDetail }) => {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="ms-2 me-auto">
                    {productDetail.product.name}
                </div>
                <p><span className="badge bg-primary rounded">{productDetail.quantity}</span> - <strong>{productDetail.product.price}&#8378;</strong></p>
            </li>
        </>
    )
}

export default CartItem
import React from 'react'
import CartList from '../components/cartList'
import { Button } from 'reactstrap'

const Cart = () => {
    return (
        <div>
            <h1>Sepetim</h1>
            <CartList />
            <hr></hr>
            <div className='d-flex justify-content-end'>
                <p>Toplam tutar: <strong>270&#8378;</strong></p>
            </div>
            <div className='d-flex justify-content-end'>
                <Button color='success'>Satın Al</Button>
            </div>

        </div>
    )
}

export default Cart
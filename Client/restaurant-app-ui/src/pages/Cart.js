import React, { useContext } from 'react'
import CartList from '../components/cartList'
import { Button } from 'reactstrap'
import DefaultContext from '../contexts/DefaultContext'
import axios from 'axios'
import alertify from 'alertifyjs'

const Cart = () => {
    const { token, getCartAsList, clearCart } = useContext(DefaultContext)
    const cartList = getCartAsList()

    const getTotalQuantity = () => {
        let quantity = 0
        for (let item of cartList) {
            quantity += item.quantity
        }
        return quantity
    }

    const getTotalPrice = () => {
        let price = 0
        for (let item of cartList) {
            price += (item.quantity * item.product.price)
        }
        return price
    }

    const purchase = () => {
        const data = {
            requests: cartList.map(p => ({ productId: p.product.id, quantity: p.quantity }))
        }
        console.log(data)
        axios({
            baseURL: process.env.REACT_APP_BASE_URL,
            url: '/orders',
            method: 'post',
            headers: {
                "Authorization": `Bearer ${token}`
            },
            data
        })
            .then(response => {
                clearCart()
                cartList.splice(0, cartList.length)
                alertify.success("Başarılı bir şekilde ürünler satın alındı.")
            })
            .catch(errors => {
                console.log(errors)
                alertify.error("Satın alma işleminde bir hata meydana geldi.Lütfen daha sonra tekrar deneyiniz.")
            })
    }
    return (
        <div>
            <h1>Sepetim</h1>
            <CartList cartList={cartList} />
            <hr></hr>
            <div className='d-flex justify-content-end'>
                <p>Toplam adet: <strong>{getTotalQuantity()}</strong> Toplam tutar: <strong>{getTotalPrice()}&#8378;</strong></p>
            </div>
            <div className='d-flex justify-content-end'>
                <Button color='success' onClick={() => purchase()}>Satın Al</Button>
            </div>

        </div>
    )
}

export default Cart
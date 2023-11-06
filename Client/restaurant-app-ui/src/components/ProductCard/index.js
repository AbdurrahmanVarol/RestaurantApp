import alertify from 'alertifyjs'
import React, { useContext } from 'react'
import DefaultContext from '../../contexts/DefaultContext'

const ProductCard = ({ width, productDetail }) => {
    const { cart, addToCart } = useContext(DefaultContext)
    const add = () => {
        addToCart(productDetail)
        console.log(cart)
        console.log(productDetail)
        alertify.success(`${productDetail.name} Sepete Eklendi`)
    }
    return (
        <div style={{ width }}>
            <div className="card" >
                <img src={productDetail.imageUrl} style={{ height: "30vh" }} className="card-img-top" alt={productDetail.name} />
                <div className="card-body">
                    <h5 className="card-title">{productDetail.name}</h5>
                    <p className="card-text" style={{ height: "5vh", textOverflow: "ellipsis", overflow: "hidden" }}>{productDetail.description}</p>
                    <div className='mb-2'><strong>Fiyat: {productDetail.price}&#8378;</strong></div>
                    <button className='btn btn-primary' onClick={add}>Sepete Ekle</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
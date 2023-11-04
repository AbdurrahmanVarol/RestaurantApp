import React from 'react'

const ProductCard = ({ width, productDetail }) => {
    return (
        <div style={{ width }}>
            <div className="card" >
                <img src={productDetail.imageUrl} className="card-img-top" alt={productDetail.name} />
                <div className="card-body">
                    <h5 className="card-title">{productDetail.name}</h5>
                    <p className="card-text">{productDetail.description}</p>
                    <div className='mb-2'><strong>Fiyat: {productDetail.price}&#8378;</strong></div>
                    <a href="#" className="btn btn-primary">Sepete Ekle</a>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
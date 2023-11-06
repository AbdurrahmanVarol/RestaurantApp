import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../ProductCard'
import axios from 'axios'

const ProductList = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    useEffect(() => {
        const baseURL = process.env.REACT_APP_BASE_URL
        axios(`${baseURL}/products`)
            .then(response => setProducts(response.data))
            .catch(errors => {
                if (errors.response.status === 500) {
                    navigate("/page500")
                }
            })

        return () => {
            console.log('asdasd');
        }
    }, [])
    return (
        <div className='w-100'>
            <div className='d-flex flex-wrap align-items-center gap-2 w-100'>

                {
                    products && products.length > 0 ?
                        (
                            products.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    width={"32%"}
                                    productDetail={product}
                                />
                            ))
                        ) :
                        (
                            <h1>Listelenecek Ürün Bulunamadu!!!</h1>
                        )
                }
            </div>
        </div>
    )
}

export default ProductList
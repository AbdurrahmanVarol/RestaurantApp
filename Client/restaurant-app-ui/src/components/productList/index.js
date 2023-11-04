import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from '../ProductCard'

const ProductList = () => {
    return (
        <div className='w-100'>
            <div className='d-flex flex-wrap align-items-center gap-2 w-100'>

                {
                    [...Array(11).keys()].map(p => (
                        <ProductCard
                            key={p}
                            width={"32%"}
                            productDetail={{
                                name: "Tavuk Döner",
                                description: "Hatay usulü soslu tavuk döner",
                                price: 90,
                                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8hqx6sFG6MaS52G7LXx1bNlI2sgz-jizLQ&usqp=CAU"
                            }}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList
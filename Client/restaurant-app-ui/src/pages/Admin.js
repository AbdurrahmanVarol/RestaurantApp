import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

const Admin = () => {
    const colors = [
        "#363062",
        "#435585",
        "#164863",
        "#FF6C22",
        "#2B3499",
        "#61A3BA",
        "#A2C579",
        "#3A4D39",
        "#FF5B22",
        "#0174BE",
        "#FFC436",
        "#0C356A",
        "#B15EFF",
        "#CE5A67",
        "#F4BF96",
        "#F875AA",
        "#190482",
        "#ED7D31",
        "#6C5F5B",
        "#6C5F5B",
        "#4F4A45",
        "#495E57",
        "#45474B",
        "#610C9F",
        "#940B92",
        "#DA0C81",
        "#E95793"
    ]
    return (
        <div className='d-flex align-items-center justify-content-center  w-100 h-100'>
            <div className='d-flex flex-wrap align-items-center gap-2'>
                <NavLink to="/createProduct" className="btn text-light d-flex justify-content-center align-items-center" style={{ width: "32%", minHeight: "100px", gap: "5px", backgroundColor: `${colors[Math.floor(Math.random() * colors.length)]}` }}>Ürün Ekle</NavLink>
                {
                    [...Array(11).keys()].map(p => (
                        <Button disabled style={{ width: "32%", minHeight: "100px", gap: "5px", backgroundColor: `${colors[Math.floor(Math.random() * colors.length)]}` }}>Deneme Button</Button>
                    ))
                }
            </div>
        </div>
    )
}

export default Admin
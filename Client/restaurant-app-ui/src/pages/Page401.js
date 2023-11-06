import React from 'react'
import { NavLink } from 'react-router-dom'

const Page401 = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
            <div className="text-center">
                <h1 className="text-danger fw-bold">Oooops</h1>
                <h5>401 - Yetkisiz Giriş</h5>
                <NavLink to="/" className="btn btn-outline-secondary"> Anasayfaya git</NavLink>
            </div>
        </div>
    )
}

export default Page401
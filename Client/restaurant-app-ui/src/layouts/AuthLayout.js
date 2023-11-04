import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 vh-100">
      <div className="rounded-3 shadow p-5 px-lg-5 " style={{ width: "min(50%,650px)" }}>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default AuthLayout
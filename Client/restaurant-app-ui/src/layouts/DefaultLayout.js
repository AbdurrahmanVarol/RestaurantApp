import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import DefaultContext from '../contexts/DefaultContext'
import Navi from '../components/navi'

const DefaultLayout = () => {
  const { token, expire, clearData } = useContext(DefaultContext)
  const navigate = useNavigate()

  useEffect(() => {
    // if (!token || token === "") {
    //   clearData();
    //   navigate("/login");
    //   return
    // }
    // let now = new Date().getTime();
    // let expireDate = new Date(expire).getTime();

    // if (now > expireDate) {
    //   //TODO:Refresh token eklenecek
    //   clearData();
    //   navigate("/login");
    //   return
    // }
  }, [token, expire]);
  return (
    <div className="default vh-100">
      <Navi></Navi>
      <div className="container p-5" style={{ height: "90%" }}>
        <Outlet></Outlet>
      </div>
    </div>

  )
}

export default DefaultLayout
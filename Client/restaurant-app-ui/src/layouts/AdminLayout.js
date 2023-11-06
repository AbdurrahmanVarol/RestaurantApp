import React, { useContext, useEffect } from 'react'
import DefaultContext from '../contexts/DefaultContext';
import { Outlet, useNavigate } from 'react-router-dom';

const AdminLayout = () => {
    const { userRole } = useContext(DefaultContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (userRole != 1) {
            navigate("/page401")
        }
    }, [userRole]);
    return (
        <>
            <Outlet></Outlet>
        </>

    )
}


export default AdminLayout
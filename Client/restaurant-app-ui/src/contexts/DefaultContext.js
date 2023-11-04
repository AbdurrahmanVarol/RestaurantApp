import React, { createContext, useEffect, useState } from "react";

const DefaultContext = createContext()

export const DefaultContextProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [expire, setExpire] = useState(localStorage.getItem("expire"));
    const [userName, setUserName] = useState(localStorage.getItem("userName"));
    const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));

    useEffect(() => {
        localStorage.setItem("token", token)
    }, [token])

    useEffect(() => {
        localStorage.setItem("expire", expire)
    }, [expire])

    useEffect(() => {
        localStorage.setItem("userName", userName)
    }, [userName])

    useEffect(() => {
        localStorage.setItem("userRole", userRole)
    }, [userRole])

    const clearData = () => {
        setToken('');
        setExpire('');
        setUserName('')
        setUserRole('');
    }

    const values = {
        token,
        expire,
        userName,
        userRole,
        setToken,
        setExpire,
        setUserName,
        setUserRole,
        clearData
    }
    return (
        <DefaultContext.Provider value={values}>{children}</DefaultContext.Provider>
    )
}

export default DefaultContext;
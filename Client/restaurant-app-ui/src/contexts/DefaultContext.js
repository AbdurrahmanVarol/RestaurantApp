import React, { createContext, useEffect, useState } from "react";

const DefaultContext = createContext()

export const DefaultContextProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [expire, setExpire] = useState(localStorage.getItem("expire"));
    const [userName, setUserName] = useState(localStorage.getItem("userName"));
    const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));
    const [cart, setCart] = useState(localStorage.getItem("cart") ?? JSON.stringify([]));

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

    useEffect(() => {
        console.log("worked")
        localStorage.setItem("cart", cart)
    }, [cart])

    const clearData = () => {
        setToken('');
        setExpire('');
        setUserName('')
        setUserRole('');
    }

    const addToCart = (product) => {
        let prevCart = JSON.parse(`${cart}`)

        const hasProduct = prevCart.some(p => p.product.id === product.id)

        let newCart = prevCart
        if (hasProduct) {
            newCart.find(p => p.product.id === product.id).quantity += 1
        } else {
            newCart.push({
                product,
                quantity: 1
            })
        }
        setCart(JSON.stringify(newCart))
    }

    const removeFromCart = (productId) => {
        let newCart = cart
        const deletedProduct = newCart.find(p => p.product.id === productId)
        var index = newCart.indexOf(deletedProduct);
        if (index !== -1) {
            newCart.splice(index, 1);
        }
        setCart(newCart)
    }

    const clearCart = () => {
        setCart(JSON.stringify([]))
    }

    const getCartLength = () => {
        let prevCart = JSON.parse(`${cart}`)
        return prevCart.length
    }

    const getCartAsList = () => {
        return JSON.parse(`${cart}`)
    }
    const values = {
        token,
        expire,
        userName,
        userRole,
        cart,
        setToken,
        setExpire,
        setUserName,
        setUserRole,
        clearData,
        addToCart,
        removeFromCart,
        clearCart,
        getCartLength,
        getCartAsList
    }

    return (
        <DefaultContext.Provider value={values}>{children}</DefaultContext.Provider>
    )
}

export default DefaultContext;
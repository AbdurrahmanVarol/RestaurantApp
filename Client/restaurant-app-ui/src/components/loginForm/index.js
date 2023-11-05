import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import validationSchema from "./validations"
import { useFormik } from 'formik'
import DefaultContext from '../../contexts/DefaultContext'
import axios from 'axios'
import alertify from 'alertifyjs'

const LoginForm = () => {
    const { setToken, setExpire, setUserName, setUserRole } = useContext(DefaultContext)
    const navigate = useNavigate()
    const { handleSubmit, handleChange, handleBlur, values, errors, touched, isSubmitting } = useFormik({
        initialValues: {
            userName: "",
            password: "",
            isKeepLoggedIn: true
        },
        onSubmit: async (values, bag) => {
            let a = { ...values, isKeepLoggedIn: true }
            axios({
                baseURL: process.env.REACT_APP_BASE_URL,
                url: '/auth/login',
                method: 'post',
                data: a
            })
                .then(response => {
                    console.log(response.data)
                    setToken(response.data.token)
                    setExpire(response.data.expire)
                    setUserName(response.data.userName)
                    setUserRole(response.data.userRole)
                    alertify.success("Başarılı bir şekilde giriş yapıldı.")
                    navigate("/")
                })
                .catch(errors => {
                    console.log(errors)
                    alertify.error("Kullanıcı adı ya da şifre hatalı.\nLütfen tekrar deneyiniz.")
                })

            bag.resetForm()
        },
        validationSchema
    })

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input
                        id="userName"
                        name="userName"
                        placeholder="Kullanıcı Adı"
                        value={values.userName}
                        onBlur={handleBlur("userName")}
                        onChange={handleChange}
                    ></Input>
                    {errors.userName && touched.userName && <div className="text-danger">{errors.userName}</div>}
                </FormGroup>
                <FormGroup>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Şifre"
                        value={values.password}
                        onBlur={handleBlur("password")}
                        onChange={handleChange}
                    ></Input>
                    {errors.password && touched.password && <div className="text-danger">{errors.password}</div>}
                </FormGroup>
                <Button type="submit" color="success" disabled={isSubmitting}>
                    Giriş Yap
                </Button>
            </Form>
            <div className="links">
                <strong className="text-dark-emphasis">Hesabınız yok mu?</strong>
                <NavLink
                    to="/register"
                >
                    <strong>Kayıt Ol</strong>
                </NavLink>
            </div>
        </div>
    )
}

export default LoginForm
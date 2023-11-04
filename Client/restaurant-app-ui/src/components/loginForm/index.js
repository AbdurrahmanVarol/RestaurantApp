import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import validationSchema from "./validations"
import { useFormik } from 'formik'
import DefaultContext from '../../contexts/DefaultContext'

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
            // let a = { ...values, isKeepLoggedIn: true }

            // const result = await loginRequest(a)

            // if (result.status == 200) {
            //     setToken(result.res.token)
            //     setExpire(result.res.expire)
            //     setBloodGroup(result.res.bloodGroup)
            //     setCity(result.res.city)
            //     setUserName(result.res.userName)
            //     setUserRole(result.res.userRole)
            //     navigate("/")
            //     return
            // }
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
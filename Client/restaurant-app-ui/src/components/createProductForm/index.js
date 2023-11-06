import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import validationSchema from "./validations"
import { useFormik } from 'formik'
import DefaultContext from '../../contexts/DefaultContext'
import CategorySelect from '../categorySelect'
import alertify from 'alertifyjs'
import axios from 'axios'

const CreateProductForm = () => {
    const { token } = useContext(DefaultContext)
    const navigate = useNavigate()

    const { handleSubmit, handleChange, handleBlur, values, errors, touched, isSubmitting } = useFormik({
        initialValues: {
            name: "",
            description: "",
            imageUrl: "",
            price: 0,
            categoryId: 0
        },
        onSubmit: async (values, bag) => {
            axios({
                baseURL: process.env.REACT_APP_BASE_URL,
                url: '/products',
                method: 'post',
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                data: values
            })
                .then(response => {
                    console.log(response.data)

                    alertify.success("Başarılı bir şekilde ürün oluşturuldu.")
                    bag.resetForm()
                })
                .catch(errors => {
                    console.log(errors)
                    if (errors.response.status === 500) {
                        navigate("/page500")
                    }
                    alertify.error("Lütfen ürün bilgilerini doğru biçinde giriniz.")
                })

        },
        validationSchema
    })

    return (
        <div className=''>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Ürün Adı"
                        value={values.name}
                        onBlur={handleBlur("name")}
                        onChange={handleChange}
                    ></Input>
                    {errors.name && touched.name && <div className="text-danger">{errors.name}</div>}
                </FormGroup>
                <FormGroup>
                    <textarea
                        rows="6"
                        className='form-control'
                        id="description"
                        name="description"
                        placeholder="description"
                        value={values.description}
                        onBlur={handleBlur("description")}
                        onChange={handleChange}
                    ></textarea>
                    {errors.description && touched.description && <div className="text-danger">{errors.description}</div>}
                </FormGroup>
                <FormGroup>
                    <Input
                        id="price"
                        name="price"
                        type='number'
                        placeholder="Ürün Fiyatı"
                        value={values.price}
                        onBlur={handleBlur("price")}
                        onChange={handleChange}
                    ></Input>
                    {errors.price && touched.price && <div className="text-danger">{errors.price}</div>}
                </FormGroup>
                <FormGroup>
                    <CategorySelect handleChange={handleChange} value={values.categoryId} />
                    {errors.categoryId && touched.categoryId && <div className="text-danger">{errors.categoryId}</div>}
                </FormGroup>
                <FormGroup>
                    <Input
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Resim Adresi..."
                        value={values.imageUrl}
                        onBlur={handleBlur("imageUrl")}
                        onChange={handleChange}
                    ></Input>
                    {errors.imageUrl && touched.imageUrl && <div className="text-danger">{errors.imageUrl}</div>}
                </FormGroup>
                <Button type="submit" color="success" disabled={isSubmitting}>
                    Ürünü Ekle
                </Button>
            </Form>
        </div>
    )
}

export default CreateProductForm
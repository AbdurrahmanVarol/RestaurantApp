import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import validationSchema from "./validations"
import { useFormik } from 'formik'
import DefaultContext from '../../contexts/DefaultContext'
import CategorySelect from '../categorySelect'

const CreateProductForm = () => {
    const { handleSubmit, handleChange, handleBlur, values, errors, touched, isSubmitting } = useFormik({
        initialValues: {
            name: "",
            description: "",
            imageUrl: "",
            price: 0,
            categoryId: 0
        },
        onSubmit: async (values, bag) => {
            console.log(values)
            //bag.resetForm()
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
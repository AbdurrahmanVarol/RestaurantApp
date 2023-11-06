import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, FormGroup, Input, Row, Table } from 'reactstrap'
import OrderDetailList from '../components/orderDetailList'
import moment from 'moment'
import axios from 'axios'
import DefaultContext from '../contexts/DefaultContext'
import { useNavigate } from 'react-router-dom'

const OrderDetail = () => {
    const defaultDate = moment(new Date()).format("YYYY-MM-DD")
    const navigate = useNavigate()
    const { token } = useContext(DefaultContext)
    const [orders, setOrders] = useState([])
    const [date, setDate] = useState({ startDate: defaultDate, endDate: defaultDate })


    const changeHandler = event => {
        let name = event.target.name
        let value = event.target.value
        setDate((prev) => ({ ...prev, [name]: value }))
    }

    const getOrders = () => {
        axios({
            baseURL: process.env.REACT_APP_BASE_URL,
            url: '/orders',
            method: 'get',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => {
                setOrders(response.data)
            })
            .catch(errors => {
                console.log(errors)
                if (errors.response.status === 500) {
                    navigate("/page500")
                }
            })
    }

    const getOrdersByDate = () => {
        axios({
            baseURL: process.env.REACT_APP_BASE_URL,
            url: `/orders/getByDate?startDate=${date.startDate}&endDate=${date.endDate}`,
            method: 'get',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => {
                setOrders(response.data)
                console.log(orders)
            })
            .catch(errors => {
                console.log(errors)
                if (errors.response.status === 500) {
                    navigate("/page500")
                }
            })
    }
    useEffect(() => {
        getOrders()
    }, [])

    const getTotalQuantity = () => {
        let quantity = 0
        for (let order of orders) {
            quantity += order.quantity
        }
        return quantity
    }

    const getTotalPrice = () => {
        let price = 0
        for (let order of orders) {
            price += (order.quantity * order.product.price)
        }
        return price
    }

    return (
        <div>
            <form>
                <Row>
                    <Col sm="4">
                        <FormGroup>
                            <label htmlFor='startDate'>Başlangıç:</label>
                            <Input
                                id='startDate'
                                name='startDate'
                                type='date'
                                defaultValue={defaultDate}
                                onChange={changeHandler}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="4">
                        <FormGroup>
                            <label htmlFor='endDate'>Bitiş:</label>
                            <Input
                                id='endDate'
                                name='endDate'
                                type='date'
                                defaultValue={defaultDate}
                                onChange={changeHandler}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="4" className='d-flex align-items-center  gap-3'>
                        <Button onClick={() => getOrdersByDate()}>Listele</Button>
                        <Button onClick={() => getOrders()}>Tümünü Listele</Button>
                    </Col>
                </Row>

            </form>
            <Table>
                <thead>
                    <tr>
                        <td>Tarih</td>
                        <td>Ürün</td>
                        <td>Adet</td>
                        <td>Ücret</td>
                    </tr>
                </thead>
                <tbody >
                    <OrderDetailList orderDetails={orders}></OrderDetailList>
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            Toplam adet: <strong>{getTotalQuantity()}</strong> Toplam tutar: <strong>{getTotalPrice()}&#8378;</strong>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}

export default OrderDetail
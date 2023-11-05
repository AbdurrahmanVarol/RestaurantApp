import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Col, FormGroup, Input, Row, Table } from 'reactstrap'
import OrderDetailList from '../components/orderDetailList'
import moment from 'moment'

const OrderDetail = () => {
    const orders = [
        {
            date: Date.now(),
            productName: "Tavuk Döner",
            price: 90
        },
        {
            date: Date.now(),
            productName: "Tavuk Döner",
            price: 90
        },
        {
            date: Date.now(),
            productName: "Tavuk Döner",
            price: 90
        }
    ]
    const date = moment(new Date()).format("DD.MM.yyyy")
    return (
        <div>
            <form>
                <Row>
                    <Col>
                        <FormGroup>
                            <label htmlFor='startDate'>Başlangıç:</label>
                            <Input
                                id='startDate'
                                type='date'
                                defaultValue={date}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <label htmlFor='endDate'>Bitiş:</label>
                            <Input
                                id='endDate'
                                type='date'
                            />
                        </FormGroup>
                    </Col>
                </Row>

            </form>
            <Table>
                <thead>
                    <tr>
                        <td>Tarih</td>
                        <td>Ürün</td>
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
                            toplam ücret: 90
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}

export default OrderDetail
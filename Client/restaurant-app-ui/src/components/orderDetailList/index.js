import moment from 'moment/moment'
import React from 'react'

const OrderDetailList = ({ orderDetails }) => {
  return (
    <>
      {
        orderDetails.map((orderDetail, index) => (
          <tr key={index}>
            <td>{moment(orderDetail.createdAt).format("DD/MM/yyyy HH:mm:ss")}</td>
            <td>{orderDetail.product.name}</td>
            <td>{orderDetail.quantity}</td>
            <td>{orderDetail.product.price}</td>
          </tr>
        ))
      }
    </>
  )
}

export default OrderDetailList
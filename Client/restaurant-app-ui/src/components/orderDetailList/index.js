import moment from 'moment/moment'
import React from 'react'

const OrderDetailList = ({ orderDetails }) => {
  return (
    <>
      {
        orderDetails.map((orderDetail, index) => (
          <tr key={index}>
            <td>{moment(orderDetail.date).format("DD/MM/yyyy HH:mm:ss")}</td>
            <td>{orderDetail.productName}</td>
            <td>{orderDetail.price}</td>
          </tr>
        ))
      }
    </>
  )
}

export default OrderDetailList
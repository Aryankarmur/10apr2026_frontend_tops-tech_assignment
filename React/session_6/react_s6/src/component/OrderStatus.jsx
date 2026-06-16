import React from 'react'

const OrderStatus = ({isDelivered}) => {
  return (
    <div>
        <p> {isDelivered ? "Order Delivered 🎉":"Order on the way 🚚"} </p>
    </div>
  )
}

export default OrderStatus
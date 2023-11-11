import React from 'react'
import styles from './Orders.module.css'
import { useRouteLoaderData } from 'react-router'
import OrderCard from './OrderCard/OrderCard'
const Orders = () => {
  const { orders } = useRouteLoaderData('userRoot')
  console.log(orders)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.ordersHeading}>Your orders</div>
        <div className={styles.ordersContainer}>
          {orders.length === 0 ? (
            <div className={styles.empty}>No match found</div>
          ) : (
            <OrderCard />
          )}
        </div>
      </div>
    </>
  )
}

export default Orders

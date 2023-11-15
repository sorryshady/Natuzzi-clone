import React from 'react'
import styles from './Wishlist.module.css'
import useDynamicTitle from '../../../../hooks/useDynamicTitle'
const Wishlist = () => {
  useDynamicTitle()
  const wishList = []
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wishHeading}>Wishlist</div>
        <div className={styles.header}>
          Here's the list of your favorite products
        </div>
        <div className={styles.wishContainer}>
          {wishList.length === 0 ? (
            <div className={styles.empty}>No match found</div>
          ) : (
            <div>Cards enter here</div>
          )}
        </div>
      </div>
    </>
  )
}

export default Wishlist

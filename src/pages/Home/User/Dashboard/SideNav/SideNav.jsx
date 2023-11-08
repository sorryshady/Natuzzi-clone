import React from 'react'
import styles from './SideNav.module.css'
import { useDispatch } from 'react-redux'
import { globalActions } from '../../../../../store/global-slice'
import axios from 'axios'
import { config } from '../../../../../App'
import { enqueueSnackbar } from 'notistack'
import { useNavigate } from 'react-router'
const SideNav = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${config.endpoint}/auth/logout`, {
        withCredentials: true,
      })
      if (response.status === 200) {
        localStorage.removeItem('firstName')
        localStorage.removeItem('id')
        console.log(response)
        enqueueSnackbar(response.data.message, { variant: 'success' })
        dispatch(globalActions.setNavigating(true))
        setTimeout(() => {
          navigate('/login')
          dispatch(globalActions.setNavigating(false))
        }, 1000)
      }
    } catch (error) {
      console.log(error)
      enqueueSnackbar('Something went wrong.', { variant: 'error' })
    }
  }
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles['your-services']}>Your Services</div>
        <div className={styles['your-account']}>
          <div className={styles.heading}>YOUR ACCOUNT</div>
          <div className={styles.link}>Profile and preferences</div>
        </div>
        <div className={styles['your-products']}>
          <div className={styles.heading}>YOUR PRODUCTS</div>
          <div className={styles.link}>Wishlist</div>
          <div className={styles.link}>Saved Products</div>
        </div>
        <div className={styles['your-products']}>
          <div className={styles.heading}>NEED HELP</div>
          <div className={styles.link}>Help and contacts</div>
        </div>
      </div>
      <button className={styles.logout} onClick={handleLogout}>
        Logout
      </button>
    </>
  )
}

export default SideNav

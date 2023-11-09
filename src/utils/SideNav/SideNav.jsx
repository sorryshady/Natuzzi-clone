import React from 'react'
import styles from './SideNav.module.css'
import { useDispatch } from 'react-redux'
import { globalActions } from '../../store/global-slice'
import axios from 'axios'
import { config } from '../../App'
import { enqueueSnackbar } from 'notistack'
import { useNavigate } from 'react-router'
import Underline from '../Underline/Underline'
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
        <div className={styles['your-services']}>
          <Underline>Your Services</Underline>
        </div>
        <div className={styles.content}>
          <div className={styles.heading}>YOUR ACCOUNT</div>
          <div className={styles.link}>
            <Underline>Profile and preferences</Underline>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.heading}>YOUR PRODUCTS</div>
          <div className={styles.link}>
            <Underline>Wishlist</Underline>
          </div>
          <div className={styles.link}>
            <Underline>Saved Products</Underline>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.heading}>NEED HELP</div>
          <div className={styles.link}>
            <Underline>Help and contacts</Underline>
          </div>
        </div>
      </div>
      <button className={styles.logout} onClick={handleLogout}>
        Logout
      </button>
    </>
  )
}

export default SideNav

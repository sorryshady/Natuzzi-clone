import React from 'react'
import styles from './SignUp.module.css'
import CustomInput from '../../../../utils/CustomInput/CustomInput'
const PrivateForm = ({ data }) => {
  return (
    <>
      <div className={styles.nameInputs}>
        <CustomInput
          type={'text'}
          text={'first name*'}
          name={'firstName'}
          form={'userForm'}
          formType={'signup'}
        />
        <CustomInput
          type={'text'}
          text={'last name*'}
          name={'lastName'}
          form={'userForm'}
          formType={'signup'}
        />
      </div>
      <div className={styles.emailInput}>
        <CustomInput
          type={'text'}
          text={'email*'}
          name={'email'}
          form={'userForm'}
          formType={'signup'}
        />
      </div>
      <div className={styles.passwordInputs}>
        <CustomInput
          type={'password'}
          text={'Password*'}
          name={'password'}
          form={'userForm'}
          formType={'signup'}
        />
        <CustomInput
          type={'password'}
          text={'Confirm password*'}
          name={'confirmPassword'}
          form={'userForm'}
          formType={'signup'}
        />
      </div>
    </>
  )
}

export default PrivateForm

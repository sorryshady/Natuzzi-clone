import React from 'react'
import styles from './SignUp.module.css'
import CustomInput from '../../../../utils/CustomInput/CustomInput'
const PrivateForm = ({ data, onChange, passState }) => {
  return (
    <>
      <div className={styles.nameInputs}>
        <CustomInput
          type={'text'}
          text={'first name*'}
          name={'firstName'}
          form={'userForm'}
          value={data.firstName}
          onChange={onChange}
          dataText={'private'}
        />
        <CustomInput
          type={'text'}
          text={'last name*'}
          name={'lastName'}
          form={'userForm'}
          value={data.lastName}
          onChange={onChange}
          dataText={'private'}
        />
      </div>
      <div className={styles.emailInput}>
        <CustomInput
          type={'text'}
          text={'email*'}
          name={'email'}
          form={'userForm'}
          value={data.email}
          onChange={onChange}
          dataText={'private'}
        />
      </div>
      <div className={styles.passwordInputs}>
        <CustomInput
          type={passState ? 'text' : 'password'}
          text={'Password*'}
          name={'password'}
          form={'userForm'}
          value={data.password}
          onChange={onChange}
          dataText={'private'}
        />
        <CustomInput
          type={passState ? 'text' : 'password'}
          text={'Confirm password*'}
          name={'confirmPassword'}
          form={'userForm'}
          value={data.confirmPassword}
          onChange={onChange}
          dataText={'private'}
          passwordData={data.password}
        />
      </div>
    </>
  )
}

export default PrivateForm

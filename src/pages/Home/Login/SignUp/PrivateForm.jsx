import React from 'react'
import styles from './SignUp.module.css'
import Input from '../../../../utils/Input/Input'
import { useSelector } from 'react-redux'
const PrivateForm = ({ submit }) => {
  const { password } = useSelector((state) => state.register.privateData)
  return (
    <>
      <div className={styles.nameInputs}>
        <Input
          type={'text'}
          formType={'private'}
          registerType='signup'
          name={'firstName'}
          placeholder={'first name*'}
          submit={submit}
        />
        <Input
          type={'text'}
          formType={'private'}
          registerType='signup'
          name={'lastName'}
          placeholder={'last name*'}
          submit={submit}
        />
      </div>
      <div className={styles.emailInput}>
        <Input
          type={'email'}
          formType={'private'}
          registerType='signup'
          name={'email'}
          placeholder={'email*'}
          submit={submit}
        />
      </div>
      <div className={styles.passwordInputs}>
        <Input
          type={'password'}
          formType={'private'}
          registerType='signup'
          name={'password'}
          placeholder={'password*'}
          submit={submit}
        />
        <Input
          type={'password'}
          formType={'private'}
          registerType='signup'
          name={'confirmPassword'}
          placeholder={'confirm password*'}
          value={password}
          submit={submit}
        />
      </div>
    </>
  )
}

export default PrivateForm

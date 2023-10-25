import React from 'react'
import styles from './SignUp.module.css'
import CustomInput from '../../../../utils/CustomInput/CustomInput'
const CompanyForm = ({ data }) => {
  return (
    <>
      <div className={styles.companyInputs}>
        <CustomInput
          type={'text'}
          text={'company*'}
          name={'company'}
          form={'userForm'}
          formType={'signup'}
        />
        <CustomInput
          type={'text'}
          text={'VAT*'}
          name={'vat'}
          form={'userForm'}
          formType={'signup'}
        />
      </div>
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
      <div className={styles.addressInput}>
        <CustomInput
          type={'text'}
          text={'address*'}
          name={'address'}
          form={'userForm'}
          formType={'signup'}
        />
      </div>
      <div className={styles.locationInput}>
        <CustomInput
          type={'text'}
          text={'city*'}
          name={'city'}
          form={'userForm'}
          formType={'signup'}
        />
        <CustomInput
          type={'text'}
          text={'zip code*'}
          name={'zipCode'}
          form={'userForm'}
          formType={'signup'}
        />
      </div>
      <div className={styles.countryInput}>
        <CustomInput
          type={'text'}
          text={'country*'}
          name={'country'}
          form={'userForm'}
          formType={'signup'}
        />
        <CustomInput
          type={'text'}
          text={'state*'}
          name={'state'}
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

export default CompanyForm

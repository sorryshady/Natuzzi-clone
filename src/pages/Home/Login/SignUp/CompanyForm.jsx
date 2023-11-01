import React from 'react'
import styles from './SignUp.module.css'
import CustomInput from '../../../../utils/CustomInput/CustomInput'
const CompanyForm = ({ data, onChange, passState }) => {
  return (
    <>
      <div className={styles.companyInputs}>
        <CustomInput
          type={'text'}
          text={'company*'}
          name={'company'}
          form={'userForm'}
          value={data.company}
          onChange={onChange}
          dataText={'company'}
        />
        <CustomInput
          type={'text'}
          text={'VAT*'}
          name={'vat'}
          form={'userForm'}
          value={data.vat}
          onChange={onChange}
          dataText={'company'}
        />
      </div>
      <div className={styles.nameInputs}>
        <CustomInput
          type={'text'}
          text={'first name*'}
          name={'firstName'}
          form={'userForm'}
          value={data.firstName}
          onChange={onChange}
          dataText={'company'}
        />
        <CustomInput
          type={'text'}
          text={'last name*'}
          name={'lastName'}
          form={'userForm'}
          value={data.lastName}
          onChange={onChange}
          dataText={'company'}
        />
      </div>
      <div className={styles.addressInput}>
        <CustomInput
          type={'text'}
          text={'address*'}
          name={'address'}
          form={'userForm'}
          value={data.address}
          onChange={onChange}
          dataText={'company'}
        />
      </div>
      <div className={styles.locationInput}>
        <CustomInput
          type={'text'}
          text={'city*'}
          name={'city'}
          form={'userForm'}
          value={data.city}
          onChange={onChange}
          dataText={'company'}
        />
        <CustomInput
          type={'text'}
          text={'zip code*'}
          name={'zipCode'}
          form={'userForm'}
          value={data.zipCode}
          onChange={onChange}
          dataText={'company'}
        />
      </div>
      <div className={styles.countryInput}>
        <CustomInput
          type={'text'}
          text={'country*'}
          name={'country'}
          form={'userForm'}
          value={data.country}
          onChange={onChange}
          dataText={'company'}
        />
        <CustomInput
          type={'text'}
          text={'state*'}
          name={'state'}
          form={'userForm'}
          value={data.state}
          onChange={onChange}
          dataText={'company'}
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
          dataText={'company'}
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
          dataText={'company'}
        />
        <CustomInput
          type={passState ? 'text' : 'password'}
          text={'Confirm password*'}
          name={'confirmPassword'}
          form={'userForm'}
          value={data.confirmPassword}
          onChange={onChange}
          dataText={'company'}
          passwordData={data.password}
        />
      </div>
    </>
  )
}

export default CompanyForm

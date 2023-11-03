import React from 'react'
import styles from './SignUp.module.css'
import Input from '../../../../utils/Input/Input'
import { useSelector } from 'react-redux'
const CompanyForm = ({ submit }) => {
  const { password } = useSelector((state) => state.register.companyData)
  return (
    <>
      <div className={styles.companyInputs}>
        <Input
          type={'text'}
          formType={'company'}
          registerType='signup'
          name={'company'}
          placeholder={'company*'}
          submit={submit}
        />
        <Input
          type={'text'}
          formType={'company'}
          registerType='signup'
          name={'vat'}
          placeholder={'VAT*'}
          submit={submit}
        />
      </div>
      <div className={styles.nameInputs}>
        <Input
          type={'text'}
          formType={'company'}
          registerType='signup'
          name={'firstName'}
          placeholder={'first name*'}
          submit={submit}
        />
        <Input
          type={'text'}
          formType={'company'}
          registerType='signup'
          name={'lastName'}
          placeholder={'last name*'}
          submit={submit}
        />
      </div>
      <div className={styles.addressInput}>
        <Input
          type={'text'}
          formType={'company'}
          registerType='signup'
          name={'address'}
          placeholder={'address*'}
          submit={submit}
        />
      </div>
      <div className={styles.locationInput}>
        <Input
          type={'text'}
          formType={'company'}
          registerType='signup'
          name={'city'}
          placeholder={'city*'}
          submit={submit}
        />
        <Input
          type={'text'}
          formType={'company'}
          registerType='signup'
          name={'zipCode'}
          placeholder={'zip code*'}
          submit={submit}
        />
      </div>
      <div className={styles.countryInput}>
        <Input
          type={'text'}
          formType={'company'}
          registerType='signup'
          name={'country'}
          placeholder={'country*'}
          submit={submit}
        />
        <Input
          type={'text'}
          formType={'company'}
          registerType='signup'
          name={'state'}
          placeholder={'state*'}
          submit={submit}
        />
      </div>
      <div className={styles.emailInput}>
        <Input
          type={'email'}
          formType={'company'}
          registerType='signup'
          name={'email'}
          placeholder={'email*'}
          submit={submit}
        />
      </div>
      <div className={styles.passwordInputs}>
        <Input
          type={'password'}
          formType={'company'}
          registerType='signup'
          name={'password'}
          placeholder={'password*'}
          submit={submit}
        />
        <Input
          type={'password'}
          formType={'company'}
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

export default CompanyForm

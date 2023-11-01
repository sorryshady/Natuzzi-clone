import React, { useState } from 'react'
import styles from './SignUp.module.css'
import commonStyles from '../Login.module.css'
import { Oval } from 'react-loader-spinner'
import Checkbox from '../../../../utils/Checkbox/Checkbox'
import PrivateForm from './PrivateForm'
import CompanyForm from './CompanyForm'

const initialPrivateData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}
const initialCompanyData = {
  company: '',
  vat: '',
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  zipCode: '',
  country: '',
  state: '',
  email: '',
  password: '',
  confirmPassword: '',
}
const initialAccountType = {
  private: true,
  company: false,
}
const initialConditions = {
  conditions: false,
  offers: false,
}
const SignUp = () => {
  const [loading, setLoading] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [accountType, setAccountType] = useState(initialAccountType)
  const [userAgreements, setUserAgreements] = useState(initialConditions)

  const [privateData, setPrivateData] = useState(initialPrivateData)
  const [companyData, setCompanyData] = useState(initialCompanyData)

  const handleValidityCheck = (data) => {
    const isDataValid = Object.values(data).every((value) => value)
    const isPasswordValid = isPasswordValidCheck(
      data.password,
      data.confirmPassword
    )
    const isEmailValid = isEmailValidCheck(data.email)
    return (
      isDataValid &&
      isPasswordValid &&
      isEmailValid &&
      userAgreements.conditions
    )
  }

  const isEmailValidCheck = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailRegex.test(email)
  }

  const isPasswordValidCheck = (password, confirmPassword) => {
    if (password.length < 6) {
      return false
    }
    if (password !== confirmPassword) {
      return false
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).+$/
    if (!passwordRegex.test(password)) {
      return false
    }
    return true
  }

  const buttonValidity = accountType.private
    ? handleValidityCheck(privateData)
    : handleValidityCheck(companyData)

  const handleCheckboxChange = (name) => {
    if (name === 'private') {
      setAccountType({ private: true, company: false })
    } else if (name === 'company') {
      setAccountType({ private: false, company: true })
    } else {
      setUserAgreements((prevData) => ({
        ...prevData,
        [name]: !prevData[name],
      }))
    }
  }

  const handleChange = (e) => {
    const dataText = e.target.getAttribute('data-text')
    const data = dataText === 'private' ? privateData : companyData
    data[e.target.name] = e.target.value
    dataText === 'private'
      ? setPrivateData({ ...data })
      : setCompanyData({ ...data })
  }

  const signUpSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const newData = {
      ...userAgreements,
      accountType: accountType.private ? 'private' : 'company',
      privateData: accountType.private ? { ...privateData } : '',
      companyData: accountType.company ? { ...companyData } : '',
    }
    setTimeout(() => {
      console.log(newData)
      setPrivateData(initialPrivateData)
      setCompanyData(initialCompanyData)
      setAccountType(initialAccountType)
      setUserAgreements(initialConditions)
      setLoading(false)
    }, 2000)
  }

  return (
    <div className={styles.signUpContainer}>
      <div className={commonStyles['section-heading']}>Create an Account</div>
      <form
        className={`${styles['signUp-form']} ${
          loading && commonStyles.loading
        }`}
        onSubmit={signUpSubmit}
      >
        <div className={styles.accountType}>
          <Checkbox
            form={'userForm'}
            isChecked={accountType.private}
            onClick={() => handleCheckboxChange('private')}
          >
            Private
          </Checkbox>
          <Checkbox
            form={'userForm'}
            isChecked={accountType.company}
            onClick={() => handleCheckboxChange('company')}
          >
            Company
          </Checkbox>
        </div>
        <div className={styles.inputs}>
          {accountType.private ? (
            <PrivateForm
              data={privateData}
              onChange={handleChange}
              passState={passwordVisible}
            />
          ) : (
            <CompanyForm
              data={companyData}
              onChange={handleChange}
              passState={passwordVisible}
            />
          )}
        </div>
        <div className={styles.passwordActions}>
          <div className={styles.passwordErrors}>{errorMsg}</div>

          <div
            className={`${styles.showPassword} ${
              passwordVisible ? styles.passActive : ''
            }`}
            onClick={() => setPasswordVisible((prevValue) => !prevValue)}
          >
            Show
          </div>
        </div>
        <div className={styles.userAgreements}>
          <Checkbox
            form={'userForm'}
            isChecked={userAgreements.conditions}
            onClick={() => handleCheckboxChange('conditions')}
          >
            I have seen the <span className={styles.links}>Privacy Policy</span>{' '}
            and{' '}
            <span className={styles.links}>Terms and Conditon of sales*</span>
          </Checkbox>
          <Checkbox
            form={'userForm'}
            isChecked={userAgreements.offers}
            onClick={() => handleCheckboxChange('offers')}
          >
            I wish to receive communications and personalised offers from
            Natuzzi.
          </Checkbox>
        </div>
        <div className={styles.button}>
          <button
            disabled={!buttonValidity}
            className={`${commonStyles.button} ${
              buttonValidity ? commonStyles.active : commonStyles.invalid
            }`}
          >
            {loading ? (
              <Oval
                height={21}
                width={21}
                strokeWidth={5}
                strokeWidthSecondary={5}
                color='#000'
                secondaryColor='#fff'
              />
            ) : (
              <span>Create a new account</span>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp

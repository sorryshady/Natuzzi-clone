import React, { useState } from 'react'
import styles from './SignUp.module.css'
import commonStyles from '../Login.module.css'
import { Oval } from 'react-loader-spinner'
import Checkbox from '../../../../utils/Checkbox/Checkbox'
import PrivateForm from './PrivateForm'
import CompanyForm from './CompanyForm'
const SignUp = () => {
  const [loading, setLoading] = useState(false)
  const [accountType, setAccountType] = useState({
    private: true,
    company: false,
  })
  const [userAgreements, setUserAgreements] = useState({
    conditions: false,
    offers: false,
  })
  let privateDataValid = false
  let companyDataValid = false
  const [privateData, setPrivateData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [companyData, setCompanyData] = useState({
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
  })
  const handleValidityCheck = (data) => {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (key === 'email') {
          const emailRegex = /@.*\.[a-zA-Z]+/
          if (!emailRegex.test(data[key])) {
            return false
          }
        } else if (key === 'password' || key === 'confirmPassword') {
          if (
            data.password !== data.confirmPassword ||
            !data.password ||
            data.password.length < 6
          ) {
            return false
          }
        } else if (data[key] === '') {
          return false
        }
      }
    }
    return true
  }

  let buttonValidity = false
  if (
    accountType.private &&
    handleValidityCheck(privateData) &&
    userAgreements.conditions
  ) {
    privateDataValid = true
    buttonValidity = true
  } else if (
    accountType.company &&
    handleValidityCheck(companyData) &&
    userAgreements.conditions
  ) {
    companyDataValid = true
    buttonValidity = true
  }

  const handleCheckboxChange = (name) => {
    if (name === 'private' || name === 'company') {
      if (name === 'private') {
        setAccountType((prevData) => ({
          ...prevData,
          private: prevData.private ? prevData.private : !prevData.private,
          company: prevData.private ? prevData.company : !prevData.company,
        }))
      }
      if (name === 'company') {
        setAccountType((prevData) => ({
          ...prevData,
          private: prevData.company ? prevData.private : !prevData.private,
          company: prevData.company ? prevData.company : !prevData.company,
        }))
      }
    } else {
      if (name === 'conditions') {
        setUserAgreements((prevData) => ({
          ...prevData,
          conditions: !prevData.conditions,
        }))
      }
      if (name === 'offers') {
        setUserAgreements((prevData) => ({
          ...prevData,
          offers: !prevData.offers,
        }))
      }
    }
  }
  const handleChange = (e) => {
    const dataText = e.target.getAttribute('data-text')
    if (dataText === 'private') {
      setPrivateData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }))
    }
    if (dataText === 'company') {
      setCompanyData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }))
    }
  }

  const signUpSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const newData = { ...userAgreements }
    if (accountType.private) {
      newData.accountType = 'private'
      newData.privateData = { ...privateData }
    } else if (accountType.company) {
      newData.accountType = 'company'
      newData.companyData = { ...companyData }
    }
    setTimeout(() => {
      console.log(newData)
      setPrivateData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
      setCompanyData({
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
      })
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
            <PrivateForm data={privateData} onChange={handleChange} />
          ) : (
            <CompanyForm data={companyData} onChange={handleChange} />
          )}
        </div>
        {/* {errorText && <div>Error here</div>} */}
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

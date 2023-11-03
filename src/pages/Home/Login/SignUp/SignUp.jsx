import React, { useState } from 'react'
import styles from './SignUp.module.css'
import commonStyles from '../Login.module.css'
import { Oval } from 'react-loader-spinner'
import Checkbox from '../../../../utils/Checkbox/Checkbox'
import PrivateForm from './PrivateForm'
import CompanyForm from './CompanyForm'
import { useSelector } from 'react-redux'

const SignUp = () => {
  const privateState = useSelector((state) => state.register.privateData)
  const companyState = useSelector((state) => state.register.companyData)

  const [submit, setSubmit] = useState(false)
  const initialAccountType = {
    private: true,
    company: false,
  }
  const initialConditions = {
    conditions: false,
    offers: false,
  }
  const [loading, setLoading] = useState(false)
  const [accountType, setAccountType] = useState(initialAccountType)
  const [userAgreements, setUserAgreements] = useState(initialConditions)

  const validityCheck = (data) => {
    for (const key in data) {
      if (data.hasOwnProperty(key) && !data[key]) {
        return false
      }
    }
    return true
  }

  const buttonValidity =
    userAgreements.conditions &&
    (accountType.private
      ? validityCheck(privateState)
      : validityCheck(companyState))

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

  const signUpSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setSubmit(true)
    const newData = {
      ...userAgreements,
      accountType: accountType.private ? 'private' : 'company',
      data: {
        ...(accountType.private ? { ...privateState } : { ...companyState }),
      },
    }
    setTimeout(() => {
      console.log(newData)
      setUserAgreements(initialConditions)
      setSubmit(false)
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
            <PrivateForm submit={submit} />
          ) : (
            <CompanyForm submit={submit} />
          )}
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

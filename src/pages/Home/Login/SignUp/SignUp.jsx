import React, { useState } from 'react'
import styles from './SignUp.module.css'
import commonStyles from '../Login.module.css'
import CustomInput from '../../../../utils/CustomInput/CustomInput'
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
    
  }
  return (
    <div className={styles.signUpContainer}>
      <div className={commonStyles['section-heading']}>Create an Account</div>
      <form
        className={`${styles['signUp-form']} ${
          loading && commonStyles.loading
        }`}
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
            <PrivateForm data={privateData} />
          ) : (
            <CompanyForm data={companyData} />
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
          <button className={`${commonStyles.button}`}>
            Create a new account
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp

import React, { useState } from 'react'
import styles from './SignUp.module.css'
import commonStyles from '../Login.module.css'
import { Oval } from 'react-loader-spinner'
import Checkbox from '../../../../utils/Checkbox/Checkbox'
import PrivateForm from './PrivateForm'
import CompanyForm from './CompanyForm'
import { useDispatch, useSelector } from 'react-redux'
import { config } from '../../../../App'
import axios from 'axios'
import { enqueueSnackbar } from 'notistack'
import { useNavigate } from 'react-router'
import { globalActions } from '../../../../store/global-slice'
import { persistUserInfo } from '../../../../utils/utilFunctions/persistUserInfo'

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const privateState = useSelector((state) => state.register.privateData)
  const companyState = useSelector((state) => state.register.companyData)

  const modifiedPrivateState = { ...privateState }
  delete modifiedPrivateState.confirmPassword
  const modifiedCompanyState = { ...companyState }
  delete modifiedCompanyState.confirmPassword

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

  const performAPICall = async (data) => {
    try {
      setLoading(true)
      const response = await axios.post(
        `${config.endpoint}/auth/register`,
        data,
        { withCredentials: true }
      )
      setLoading(false)
      if (!response.data.code) {
        dispatch(globalActions.setNavigating(true))
        return response
      } else {
        if (response.data.code < 400)
          enqueueSnackbar(response.data.message, { variant: 'warning' })
        if (response.data.code >= 400)
          enqueueSnackbar(response.data.message, { variant: 'error' })
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const signUpSubmit = async (e) => {
    e.preventDefault()
    const newData = {
      accountType: accountType.private ? 'private' : 'company',
      offers: userAgreements.offers,
      data: {
        ...(accountType.private
          ? { ...modifiedPrivateState }
          : { ...modifiedCompanyState }),
      },
    }
    const response = await performAPICall(newData)
    if (response) {
      setSubmit(true)
      enqueueSnackbar('registered succesfully', { variant: 'success' })
      setUserAgreements(initialConditions)
      // console.log(response)
      persistUserInfo(response.data.user, response.data.tokenExpiry)

      setTimeout(() => {
        navigate('/user/dashboard')
        setSubmit(false)
        dispatch(globalActions.setNavigating(false))
      }, 1000)
    }
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

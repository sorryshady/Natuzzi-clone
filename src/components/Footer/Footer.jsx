import React, { useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import styles from './Footer.module.css'
import NLogo from '../../assets/Images/NLogo.svg'
import CustomButton from '../../utils/CustomButton/CustomButton'
import Checkbox from '../../utils/Checkbox/Checkbox'
import FooterLinksSection from './FooterLinksSection/FooterLinksSection'
import Input from '../../utils/Input/Input'
import { useSelector } from 'react-redux'
const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  let submitTimer
  const { email } = useSelector((state) => state.loginSub.subscribe)
  const [submit, setSubmit] = useState(false)
  const [userAgreements, setUserAgreements] = useState({
    conditions: false,
    offers: false,
  })
  const formValidity = email && userAgreements.conditions

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmit(true)
    const formData = {
      email,
      ...userAgreements,
    }
    console.log(formData)
    clearTimeout(submitTimer)
    submitTimer = setTimeout(() => {
      setSubmit(false)
    }, 500)

    setUserAgreements({
      conditions: false,
      offers: false,
    })
  }

  const handleCheckboxChange = (checkboxName) => {
    setUserAgreements((prevData) => ({
      ...prevData,
      [checkboxName]: !prevData[checkboxName],
    }))
  }

  return (
    <>
      <footer className={`${styles.footer}`}>
        <div className={`${styles['first-section']}`}>
          <div className={styles.logo}>
            <img src={NLogo} alt='company logo' />
          </div>

          <div className={styles.form}>
            <div className={styles.text}>
              <span className={styles.bold}>sign up </span>for the latest
              <br />
              Natuzzi campaigns, <br />
              collections and inspirations.
            </div>
            <form
              className={`${styles['sign-up']} flex`}
              onSubmit={handleSubmit}
            >
              <Input
                type={'email'}
                formType={'subscribe'}
                registerType='subscribe'
                name={'email'}
                placeholder={'email*'}
                submit={submit}
              />
              <div className={styles.actionArea}>
                <Checkbox
                  onClick={() => handleCheckboxChange('conditions')}
                  isChecked={userAgreements.conditions}
                  form={'subForm'}
                >
                  I have read and understood the{' '}
                  <span className={styles.privacy}>Privacy Policy</span>*
                </Checkbox>
                <Checkbox
                  onClick={() => handleCheckboxChange('offers')}
                  isChecked={userAgreements.offers}
                  form={'subForm'}
                >
                  I wish to receive communications and personalised offers from
                  Natuzzi
                </Checkbox>

                <button
                  disabled={!formValidity}
                  className={`${styles.submit} ${
                    formValidity ? styles.active : styles.invalid
                  }`}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className={styles.button} onClick={scrollToTop}>
            <div className={styles['btn-txt']}>back to Top</div>
            <CustomButton />
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles['second-section']}>
          <FooterLinksSection />
        </div>

        <div className={styles.stocks}>Natuzzi S.p.A. 03513760722</div>
      </footer>
    </>
  )
}

export default Footer

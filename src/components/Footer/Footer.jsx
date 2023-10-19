import React, { useState } from 'react'
import styles from './Footer.module.css'
import NLogo from '../../assets/Images/NLogo.svg'
import CustomButton from '../../utils/CustomButton/CustomButton'
import Checkbox from '../../utils/Checkbox/Checkbox'
const Footer = () => {
  const [formData, setFormData] = useState({
    email: '',
    conditions: false,
    offers: false,
  })
  const [focus, setFocus] = useState(false)
  const regex = /@.*\.[a-zA-Z]+/
  let formValidity = false
  let startTyping = false
  let emailValid = false

  if (regex.test(formData.email)) {
    emailValid = true
    if (formData.conditions) {
      formValidity = true
    }
  }
  if (focus && formData.email.trim().length > 0) {
    startTyping = true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData({
      email: '',
      conditions: false,
      offers: false,
    })
  }

  const emailChange = (e) => {
    setFocus(true)
    setFormData((prevData) => ({
      ...prevData,
      email: e.target.value,
    }))
  }

  const handleCheckboxChange = (checkboxName) => {
    setFormData((prevData) => ({
      ...prevData,
      [checkboxName]: !prevData[checkboxName],
    }))
  }

  return (
    <footer className={styles.footer}>
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
          <form className={`${styles['sign-up']} flex`} onSubmit={handleSubmit}>
            <div className={styles['input-container']}>
              <input
                type='text'
                placeholder=' '
                className={styles.email}
                value={formData.email}
                onChange={emailChange}
                name='email'
              />
              <span>email*</span>
            </div>
            {!emailValid && startTyping && (
              <div className={styles.errorEmail}>check email format</div>
            )}
            <Checkbox
              onClick={() => handleCheckboxChange('conditions')}
              isChecked={formData.conditions}
            >
              I have read and understood the{' '}
              <span className={styles.privacy}>Privacy Policy</span>*
            </Checkbox>
            <Checkbox
              onClick={() => handleCheckboxChange('offers')}
              isChecked={formData.offers}
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
          </form>
        </div>

        <div className={styles.button}>
          <div className={styles['btn-txt']}>
            back to <br />
            Top
          </div>
          <CustomButton />
        </div>
      </div>

      <div className={styles.divider}></div>

      <div>Second Section</div>

      <span className={styles.stocks}>Natuzzi S.p.A. 03513760722</span>
    </footer>
  )
}

export default Footer

import React, { useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import styles from './Footer.module.css'
import NLogo from '../../assets/Images/NLogo.svg'
import CustomButton from '../../utils/CustomButton/CustomButton'
import CustomLink from '../../utils/CustomLink/CustomLink'
import Checkbox from '../../utils/Checkbox/Checkbox'
const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

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

        <div className={styles.button} onClick={scrollToTop}>
          <div className={styles['btn-txt']}>back to Top</div>
          <CustomButton />
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles['second-section']}>
        <div className={styles['grid-columns']}>
          <div className={styles['column-heading']}>Natuzzi Italia</div>
          <div className={`${styles['footer-links']} flex`}>
            <CustomLink dest={'/shop/natuzzi-italia/living-sofas-sectionals'}>
              Living
            </CustomLink>
            <CustomLink dest={'/shop/natuzzi-italia/dining-tables'}>
              Dining
            </CustomLink>
            <CustomLink dest={'/shop/natuzzi-italia/bedroom-accessories'}>
              Bedroom
            </CustomLink>
            <CustomLink dest={'/shop/natuzzi-italia/decor-lighting'}>
              Decor
            </CustomLink>
            <CustomLink dest={'/shop/natuzzi-italia/new-collection'}>
              New Collection
            </CustomLink>
            <CustomLink dest={'/'}>Sale</CustomLink>
            <CustomLink dest={'/'}>Quick Ship</CustomLink>
            <CustomLink dest={'/natuzzi-italia/about-natuzzi-italia'}>
              About Natuzzi Italia
            </CustomLink>
            <CustomLink dest={'/natuzzi-italia/warranty-natuzzi-italia'}>
              Warranty Natuzzi Italia
            </CustomLink>
            <CustomLink
              dest={
                'https://static.natuzzi.com/production/files/CARE_MAINTENANCE_NATUZZI_ITALIA.pdf'
              }
              newTab={true}
            >
              Care and Maintenance
            </CustomLink>
          </div>
        </div>
        <div className={styles['grid-columns']}>
          <div className={styles['column-heading']}>Natuzzi Editions</div>
          <div className={`${styles['footer-links']} flex`}>
            <CustomLink dest={'/shop/natuzzi-editions/living-sofas-sectionals'}>
              Living
            </CustomLink>
            <CustomLink dest={'/shop/natuzzi-editions/dining-tables'}>
              Dining
            </CustomLink>
            <CustomLink dest={'/shop/natuzzi-editions/bedroom-beds'}>
              Bedroom
            </CustomLink>
            <CustomLink dest={'/shop/natuzzi-editions/traveller-collection'}>
              Traveller Collection
            </CustomLink>
            <CustomLink dest={'/shop/natuzzi-editions/most-loved'}>
              Most Loved
            </CustomLink>
            <CustomLink dest={'/natuzzi-editions/about-natuzzi-editions'}>
              About Natuzzi Editions
            </CustomLink>
            <CustomLink dest={'/natuzzi-editions/warranty-natuzzi-editions'}>
              Warranty Natuzzi Editions
            </CustomLink>
            <CustomLink
              dest={
                'https://static.natuzzi.com/production/files/CARE_MAINTENANCE_NATUZZI_EDITIONS.pdf'
              }
              newTab={true}
            >
              Care and Maintenance Editions
            </CustomLink>
          </div>
        </div>
        <div className={styles['grid-columns']}>
          <div className={styles['column-heading']}>Corporate</div>
          <div className={`${styles['footer-links']} flex`}>
            <CustomLink dest={'/dealer-program'}>Dealer Program</CustomLink>
            <CustomLink dest={'/meet-natuzzi'}>Meet Natuzzi</CustomLink>
            <CustomLink dest={'/contact-us'}>Contact Us</CustomLink>
            <CustomLink
              dest={
                'https://www.linkedin.com/company/natuzzi/?originalSubdomain=it'
              }
              newTab={true}
            >
              Careers
            </CustomLink>
            <CustomLink dest={'/ir/corporate-governance'}>
              Governance
            </CustomLink>
            <CustomLink dest={'/ir/investors'}>Investors</CustomLink>
            <CustomLink dest={'/whistleblowing'}>Whistleblowing</CustomLink>
          </div>
        </div>
        <div className={styles['grid-columns']}>
          <div className={styles['column-heading']}>Service</div>
          <div className={`${styles['footer-links']} flex`}>
            <CustomLink dest={'/privacy-policy'}>Privacy Policy</CustomLink>
            <CustomLink dest={'/cookie-policy'}>Cookie Policy</CustomLink>
            <CustomLink dest={'/terms-and-conditions'}>
              Terms and Conditions
            </CustomLink>
          </div>
        </div>
      </div>

      <div className={styles.stocks}>Natuzzi S.p.A. 03513760722</div>
    </footer>
  )
}

export default Footer

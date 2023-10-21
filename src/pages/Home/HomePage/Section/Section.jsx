import React, { useEffect } from 'react'
import styles from './Section.module.css'
import CustomLink from '../../../../utils/CustomLink/CustomLink'
const Section = ({
  src,
  alt,
  styleClass,
  dataText,
  img,
  dest,
  textOne,
  textTwo,
}) => {
  useEffect(() => {
    const imgContainers = document.querySelectorAll(`.${styles.imgContainer}`)
    const optionsContainers = document.querySelectorAll(`.${styles.options}`)
    const contentElements = document.querySelectorAll(`.${styles.content}`)

    imgContainers.forEach((imgContainer, index) => {
      imgContainer.addEventListener('mouseover', () => {
        contentElements[index].style.transform = 'scaleX(1)'
      })

      imgContainer.addEventListener('mouseout', () => {
        contentElements[index].style.transform = 'scaleX(0)'
      })
    })
    optionsContainers.forEach((optionsContainer, index) => {
      optionsContainer.addEventListener('mouseover', () => {
        contentElements[index].style.transform = 'scaleX(1)'
      })

      optionsContainer.addEventListener('mouseout', () => {
        contentElements[index].style.transform = 'scaleX(0)'
      })
    })
  }, [])
  return (
    <>
      <div
        className={`${styles.section} ${
          styleClass === 'one' ? styles.one : styles.two
        }`}
        data-text={dataText}
      >
        <div className={styles.content}></div>
        <div
          className={`${styles.options} ${
            styleClass === 'one' ? styles.italia : styles.editions
          }`}
        >
          <CustomLink dest={dest}>
            <img src={img} alt={alt} />
            <div className={styles['options-text']}>
              {textOne} <br />
              <span>{textTwo}</span>
            </div>
          </CustomLink>
        </div>
        <div className={styles.imgContainer}>
          <img src={src} alt={alt} />
        </div>
      </div>
    </>
  )
}

export default Section

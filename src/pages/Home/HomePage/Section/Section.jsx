import React, { useEffect, useState } from 'react'
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
  const [hover, setHover] = useState(false)
  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }
  const contentStyles = {
    transform: hover ? 'scaleX(1)' : 'scaleX(0)',
  }
  const imgContainerStyles = {
    transform: hover ? 'scale(1.03)' : 'scale(1)',
  }
  const editionsImgStyles = {
    transform: hover ? 'scale(1.04)' : 'scale(1)',
  }
  return (
    <>
      <div
        className={`${styles.section} ${
          styleClass === 'one' ? styles.one : styles.two
        }`}
        data-text={dataText}
      >
        <div className={styles.content} style={contentStyles}></div>
        <div
          className={`${styles.options} ${
            styleClass === 'one' ? styles.italia : styles.editions
          }`}
        >
          <CustomLink dest={dest}>
            <div
              className={styles.optionDesc}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={img} alt={alt} />
              <div className={styles['options-text']}>
                {textOne} <br />
                <span>{textTwo}</span>
              </div>
            </div>
          </CustomLink>
        </div>
        <div className={styles.imgContainer} style={imgContainerStyles}>
          <CustomLink dest={dest}>
            <img
              src={src}
              alt={alt}
              style={editionsImgStyles}
              className={styles['editions-img']}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </CustomLink>
        </div>
      </div>
    </>
  )
}

export default Section

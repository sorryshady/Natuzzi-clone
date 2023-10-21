import React, { useEffect, useState } from 'react'
import styles from './Section.module.css'
import CustomLink from '../../../../utils/CustomLink/CustomLink'
import { useCursor } from '../../../../hooks/useCursor'
import Cursor from '../../../../utils/Cursor/Cursor'
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
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if (parseFloat(window.innerWidth) <= 768) {
      setMobile(true)
    }
  }, [])

  const {
    mousePosition,
    hovering,
    handleMouseEnter,
    handleMouseLeave,
    hoveredText,
  } = useCursor()

  const contentStyles = {
    transform: hovering ? 'scaleX(1)' : '',
  }
  const imgContainerStyles = {
    transform: hovering ? 'scale(1.03)' : 'scale(1)',
  }
  const editionsImgStyles = {
    transform: hovering ? 'scale(1.04)' : 'scale(1)',
  }
  const optionDescStyles = {
    transform: hovering
      ? styleClass === 'one'
        ? 'translateX(-15px)'
        : 'translateX(15px)'
      : 'none',
  }
  return (
    <>
      <div
        className={`${styles.section} ${
          styleClass === 'one' ? styles.one : styles.two
        }`}
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
              style={optionDescStyles}
              onMouseEnter={(e) => handleMouseEnter(e)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={img} alt={alt} data-text={dataText} />
              <div data-text={dataText} className={styles['options-text']}>
                {textOne} <br />
                <div data-text={dataText} className={styles.underline}>
                  {textTwo}
                </div>
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
              data-text={dataText}
              className={styles['editions-img']}
              onMouseEnter={(e) => handleMouseEnter(e)}
              onMouseLeave={handleMouseLeave}
            />
          </CustomLink>
        </div>
      </div>
      <Cursor
        mousePosition={mousePosition}
        hovering={hovering}
        text={hoveredText}
        mobile={mobile}
      />
    </>
  )
}

export default Section

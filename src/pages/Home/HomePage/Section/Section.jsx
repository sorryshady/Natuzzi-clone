import React, { useState } from 'react'
import styles from './Section.module.css'
import CustomLink from '../../../../utils/CustomLink/CustomLink'
import { useDispatch } from 'react-redux'
import { cursorActions } from '../../../../store/cursor-slice'
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
  const [localHover, setLocalHover] = useState(false)

  const dispatch = useDispatch()

  const contentStyles = {
    transform: localHover ? 'scaleX(1)' : '',
  }
  const imgContainerStyles = {
    transform: localHover ? 'scale(1.03)' : 'scale(1)',
  }
  const editionsImgStyles = {
    transform: localHover ? 'scale(1.04)' : 'scale(1)',
  }
  const optionDescStyles = {
    transform: localHover
      ? styleClass === 'one'
        ? 'translateX(-15px)'
        : 'translateX(15px)'
      : 'none',
  }

  const mouseEnter = (e) => {
    const text = e.target.getAttribute('data-text')
    setLocalHover(true)
    dispatch(cursorActions.setHoveredText(text))
    dispatch(cursorActions.setHoverState())
  }
  const mouseLeave = () => {
    setLocalHover(false)
    dispatch(cursorActions.setHoveredText(''))
    dispatch(cursorActions.setHoverState())
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
              // onMouseEnter={(e) => handleMouseEnter(e)}
              onMouseEnter={(e) => mouseEnter(e)}
              onMouseLeave={mouseLeave}
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
              onMouseEnter={(e) => mouseEnter(e, 'hello')}
              onMouseLeave={mouseLeave}
            />
          </CustomLink>
        </div>
      </div>
    </>
  )
}

export default Section

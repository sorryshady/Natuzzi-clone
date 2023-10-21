import React, { useEffect } from 'react'
import styles from './HomePage.module.css'
import { useCursor } from '../../../hooks/useCursor'
import Section from './Section/Section'
import CustomLink from '../../../utils/CustomLink/CustomLink'
import Italia from '../../../assets/Images/Italia.svg'
import Editions from '../../../assets/Images/Editions.svg'
const HomePage = () => {
  const {
    mousePosition,
    hovering,
    handleMouseEnter,
    handleMouseLeave,
    hoveredText,
  } = useCursor()

  useEffect(() => {
    const imgContainers = document.querySelectorAll(`.${styles.imgContainer}`)
    const contentElements = document.querySelectorAll(`.${styles.content}`)

    imgContainers.forEach((imgContainer, index) => {
      imgContainer.addEventListener('mouseover', () => {
        contentElements[index].style.transform = 'scaleX(1)'
      })

      imgContainer.addEventListener('mouseout', () => {
        contentElements[index].style.transform = 'scaleX(0)'
      })
    })
  }, [])

  return (
    <div className={styles.container}>
      {/* <div className={`${styles.section} ${styles.one}`}>
        <div className={styles.content}></div>
        <div className={styles.imgContainer}>
          <img
            src='https://static.natuzzi.com/production/0108883_Italia.png'
            alt='natuzzi italia'
          />
        </div>
      </div> */}
      {/* <CustomLink dest={'/natuzzi-italia'} styleClass={'flex-grow'}> */}
      <Section
        src={'https://static.natuzzi.com/production/0108883_Italia.png'}
        alt={'natuzzi italia'}
        styleClass={'one'}
        dataText='explore'
        img={Italia}
        dest={'/natuzzi-italia'}
        textOne={'made in italy'}
        textTwo={'luxury design.'}
      />
      {/* </CustomLink> */}
      {/* <CustomLink dest={'/natuzzi-editions'} styleClass={'flex-grow'}> */}
      <Section
        src={
          'https://static.natuzzi.com/production/0103226_Natuzzi_PORTENTO-3-POSTI_PART-BRACCIOLO.jpeg'
        }
        alt={'natuzzi editions'}
        styleClass={'two'}
        dataText='shop now'
        img={Editions}
        dest={'/natuzzi-editions'}
        textOne={'best contemporary'}
        textTwo={'design for everyone'}
      />
      {/* </CustomLink> */}
      {/* <div className={`${styles.section} ${styles.two}`}>
        <div className={styles.imgContainer}>
          <img
            src='https://static.natuzzi.com/production/0103226_Natuzzi_PORTENTO-3-POSTI_PART-BRACCIOLO.jpeg'
            alt='natuzzi italia'
          />
        </div>
        <div className={styles.content}></div>
      </div> */}
    </div>
  )
}

export default HomePage

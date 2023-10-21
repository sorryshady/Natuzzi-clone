import React, { useEffect } from 'react'
import styles from './HomePage.module.css'
import Section from './Section/Section'
import Italia from '../../../assets/Images/Italia.svg'
import Editions from '../../../assets/Images/Editions.svg'
import Socials from '../../../utils/Socials/Socials'
import Facebook from '../../../assets/Images/Facebook.svg'
import Instagram from '../../../assets/Images/Instagram.svg'
import Youtube from '../../../assets/Images/Youtube.svg'
import Linkedin from '../../../assets/Images/Linkedin.svg'
import Pinterest from '../../../assets/Images/Pinterest.svg'
const HomePage = () => {
  return (
    <>
      <div className={styles.container}>
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
      </div>
      <div className={styles.socials}>
        <div className={styles.socialsContainer}>
          <div className={styles.followTxt}>follow us</div>
          <div className={styles.logoFlex}>
            <Socials
              src={Facebook}
              name={'facebook'}
              dest={'https://www.facebook.com/Natuzzi'}
              newTab={true}
            />
            <Socials
              src={Instagram}
              name={'instagram'}
              dest={'https://www.instagram.com/natuzzi/'}
              newTab={true}
            />
            <Socials
              src={Youtube}
              name={'youtube'}
              dest={'https://www.youtube.com/Natuzzi'}
              newTab={true}
            />
            <Socials
              src={Linkedin}
              name={'linkedin'}
              dest={
                'https://www.linkedin.com/company/natuzzi/?trk=top_nav_home'
              }
              newTab={true}
            />
            <Socials
              src={Pinterest}
              name={'pinterest'}
              dest={'https://www.pinterest.it/natuzzi/'}
              newTab={true}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage

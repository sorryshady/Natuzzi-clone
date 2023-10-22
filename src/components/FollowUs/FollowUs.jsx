import React from 'react'
import styles from './FollowUs.module.css'
import Facebook from '../../assets/Images/Facebook.svg'
import Instagram from '../../assets/Images/Instagram.svg'
import Youtube from '../../assets/Images/Youtube.svg'
import Linkedin from '../../assets/Images/Linkedin.svg'
import Pinterest from '../../assets/Images/Pinterest.svg'
import Socials from '../../utils/Socials/Socials'
const FollowUs = () => {
  return (
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
            dest={'https://www.linkedin.com/company/natuzzi/?trk=top_nav_home'}
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
  )
}

export default FollowUs

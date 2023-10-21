import React, { useEffect } from 'react'
import styles from './HomePage.module.css'
import Section from './Section/Section'
import Italia from '../../../assets/Images/Italia.svg'
import Editions from '../../../assets/Images/Editions.svg'
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
    </>
  )
}

export default HomePage

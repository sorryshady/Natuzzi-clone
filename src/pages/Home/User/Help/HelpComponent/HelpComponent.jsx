import React, { useState } from 'react'
import styles from './HelpComponent.module.css'
import RadioButtons from '../../../../../utils/RadioButtons/RadioButtons'
const HelpComponent = () => {
  const [storeType, setStoreType] = useState({
    italia: true,
    editions: false,
  })
  const handleClick = (name) => {
    if (name === 'italia') {
      setStoreType({ italia: true, editions: false })
    } else if (name === 'editions') {
      setStoreType({ italia: false, editions: true })
    }
  }
  return (
    <div className={styles.helpSection}>
      <div className={styles.helpHeading}>Contact The Store</div>
      <div className={styles.options}>
        <RadioButtons
          text={'Natuzzi Italia'}
          selected={storeType.italia}
          onClick={() => handleClick('italia')}
        />
        <RadioButtons
          text={'Natuzzi Editions'}
          selected={storeType.editions}
          onClick={() => handleClick('editions')}
        />
      </div>
      <div className={styles.message}>
        <div className={styles.store}>No favorite store selected</div>
        <button className={styles.sendMessage}>Send message</button>
      </div>
    </div>
  )
}

export default HelpComponent

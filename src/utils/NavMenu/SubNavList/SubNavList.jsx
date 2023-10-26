import React from 'react'
import styles from './SubNavList.module.css'
import { motion } from 'framer-motion'
import { italiaSubList, editionsSubList } from './Data/Data'
import CustomLink from '../../CustomLink/CustomLink'
const SubNavList = ({ onClick, version }) => {
  let subListArray = version === 'italia' ? italiaSubList : editionsSubList

  const handleClick = () => {
    setTimeout(() => {
      onClick()
    }, 500)
  }
  return (
    <motion.div
      key={'subList'}
      className={`${styles.mainContainer} ${
        version === 'italia' ? styles.italia : styles.editions
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      {subListArray.map((item, index) => (
        <CustomLink key={index} dest={Object.values(item)[0]}>
          <span className={styles.subLink} onClick={handleClick}>
            {Object.keys(item)[0]}
          </span>
        </CustomLink>
      ))}
    </motion.div>
  )
}

export default SubNavList

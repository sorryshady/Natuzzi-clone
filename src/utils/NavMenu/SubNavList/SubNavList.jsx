import React from 'react'
import styles from './SubNavList.module.css'
import { motion } from 'framer-motion'
import { italiaSubList, editionsSubList } from './Data/Data'
import CustomLink from '../../CustomLink/CustomLink'
import CustomButton from '../../CustomButton/CustomButton'
import { useDispatch } from 'react-redux'
import { menuActions } from '../../../store/menu-slice'
const SubNavList = ({ onClick, version }) => {
  let subListArray = version === 'italia' ? italiaSubList : editionsSubList
  const dispatch = useDispatch()

  let timer
  const handleClick = () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      onClick()
    }, 500)
  }

  const goBack = () => {
    dispatch(menuActions.setHovering(false))
    dispatch(menuActions.setVersion(''))
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
      <div className={styles.goBack} onClick={goBack}>
        <CustomButton />
      </div>
      <div className={styles.subLinks}>
        {subListArray.map((item, index) => (
          <CustomLink key={index} dest={Object.values(item)[0]}>
            <span className={styles.subLink} onClick={handleClick}>
              {Object.keys(item)[0]}
            </span>
          </CustomLink>
        ))}
      </div>
    </motion.div>
  )
}

export default SubNavList

import React from 'react'
import styles from './SavedProjects.module.css'
import useDynamicTitle from '../../../../hooks/useDynamicTitle'
const SavedProjects = () => {
  useDynamicTitle()
  return (
    <>
      <div className={styles.container}>
        <div className={styles.projectsHeading}>Saved Projects</div>
        <div className={styles.header}>
          Resume the configuration of your projects
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.empty}>No match found</div>
        </div>
      </div>
    </>
  )
}

export default SavedProjects

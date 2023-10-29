import React from 'react'
import styles from '../Home/home.module.scss'
import LeftSideBar from 'components/LeftSideBar/LeftSideBar'

const Tags = () => {
  return (
    <div className={styles.homeContainer}>
      <LeftSideBar/>
      <div className={styles.contentContainer}>
        Tags
      </div>
    </div> 
  )
}

export default Tags
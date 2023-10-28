import React from 'react'
import styles from '../Home/home.module.scss'
import QGlossary from 'components/QuestionGlossary/QGlossary'
import LeftSideBar from 'components/LeftSideBar/LeftSideBar'
import RightSideBar from 'components/RightSideBar/RightSideBar'

const Questions = () => {
  return (
    <div className={styles.homeContainer}>
      <LeftSideBar/>
      <div className={styles.contentContainer}>
        <QGlossary/>
        <RightSideBar/>
      </div>
    </div> 
  )
}

export default Questions
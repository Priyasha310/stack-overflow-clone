import LeftSideBar from 'components/LeftSideBar/LeftSideBar'
import RightSideBar from 'components/RightSideBar/RightSideBar'
import React from 'react'
import styles from '../Home/home.module.scss'
import QuestionDetails from './QuestionDetails'

const DisplayQuestion = () => {
  return (
    <div className={styles.homeContainer}>
      <LeftSideBar/>
      <div className={styles.contentContainer}>
        <QuestionDetails/>
        <RightSideBar/>
      </div>
    </div>
  )
}

export default DisplayQuestion
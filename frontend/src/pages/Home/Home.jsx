import React from 'react'
import styles from './home.module.scss'
import RightSideBar from '../../components/RightSideBar/RightSideBar'
import QGlossary from '../../components/QuestionGlossary/QGlossary'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'

const Home = () => {
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

export default Home
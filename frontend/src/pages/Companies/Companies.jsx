import React from 'react'
import styles from '../Home/home.module.scss'
import LeftSideBar from 'components/LeftSideBar/LeftSideBar'
import CompanyGlossary from 'components/Companies/CompanyGloassary'

const Companies = () => {
  return (
    <div className={styles.homeContainer}>
      <LeftSideBar/>
      <div className={styles.contentContainer}>
        <CompanyGlossary/>
      </div>
    </div> 
  )
}

export default Companies
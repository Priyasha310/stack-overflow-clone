import React from 'react'
import styles from '../Home/home.module.scss'
import LeftSideBar from 'components/LeftSideBar/LeftSideBar'
import TagGlossary from 'components/Tags/TagGlossary'

const Tags = () => {
  return (
    <div className={styles.homeContainer}>
      <LeftSideBar/>
      <div className={styles.contentContainer}>
        <TagGlossary/>
      </div>
    </div> 
  )
}

export default Tags
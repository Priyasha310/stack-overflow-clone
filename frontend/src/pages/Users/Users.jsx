import React from 'react'
import styles from '../Home/home.module.scss'
import LeftSideBar from 'components/LeftSideBar/LeftSideBar'
import UsersList from './UsersList'


const Users = () => {
  return (
    <div className={styles.homeContainer}>
      <LeftSideBar/>
      <div className={styles.contentContainer}>
        <UsersList/>
      </div>
    </div> 
  )
}

export default Users
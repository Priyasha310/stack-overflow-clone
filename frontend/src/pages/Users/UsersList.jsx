import React from 'react'
import User from './User'
import styles from './user.module.scss'

const UsersList = ({userslist}) => {
  return (
    <div className={styles.usersList}>
      {userslist.map((user) => (
        <User user={user} key={user._id}/>
      ))}
    </div>
  )
}

export default UsersList
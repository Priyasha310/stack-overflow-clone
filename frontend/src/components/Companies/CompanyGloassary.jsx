import React from 'react'
import styles from './company.module.scss'

const CompanyGloassary = () => {
  return (
    <div className={styles.comContainer}>
        <div className={styles.comHeader}>
            <h1>Companies</h1>
            <p>Learn about what it's like to work at companies</p>
            <h5>companies</h5>
        </div>
        <hr className='my-4'/>
    </div>
  )
}

export default CompanyGloassary
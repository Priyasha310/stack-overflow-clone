import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import styles from './left.module.scss'
import globe from '../../assets/Globe.svg'

const LeftSideBar = () => {


  return (
    <div className={styles.leftSidebar}>
      <nav className={styles.sideNav}>
        <NavLink to='/' className={(props)=>`${props.isActive? styles.active: ''} ${styles.sideNavLinks}`}>        
        <p>Home</p></NavLink>
        
        <div className={styles.sideNavDiv}>
          <div className={styles.divHeading}><p>Public</p></div>
            <NavLink to='/questions' className={(props)=>`${props.isActive? styles.active: ''} ${styles.sideNavLinks}`}>
              <img src={globe} alt='Globe'/>
              <p>Questions</p>
            </NavLink>
            
            <NavLink to='/tags' className={(props)=>`${props.isActive? styles.active: ''} ${styles.sideNavLinks}`}>
              <p className='pl-5'>Tags</p>
            </NavLink>
            
            <NavLink to='/users' className={(props)=>`${props.isActive? styles.active: ''} ${styles.sideNavLinks}`}>            
              <p className='pl-5'>Users</p>
            </NavLink>
            
            <NavLink to='/companies' className={(props)=>`${props.isActive? styles.active: ''} ${styles.sideNavLinks}`}>            
              <p className='pl-5'>Companies</p>
            </NavLink>
        </div>

        <div className={styles.sideNavDiv}>
          <div className={styles.divHeading}>Collectives</div>
          <NavLink to='/explore-collectives'  className={(props)=>`${props.isActive? styles.active: ''} ${styles.sideNavLinks}`}>          
            <p className='pl-5'>Explore Collectives</p>
          </NavLink>
        </div>
        
        <div className={styles.sideNavDiv}>
          <div className={styles.divHeading}>Labs</div>
          <NavLink to='/discussions'  className={(props)=>`${props.isActive? styles.active: ''} ${styles.sideNavLinks}`}>          
            <p className='pl-5'>Discussions</p>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default LeftSideBar
import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import styles from './left.module.scss'
import globe from '../../assets/Globe.svg'

const LeftSideBar = () => {

  const [isActive, setIsActive] = useState('Home');

  const setTabActive = (tabName) => {
    setIsActive(tabName);
  };


  return (
    <div className={styles.leftSidebar}>
      <nav className={styles.sideNav}>
        <NavLink to='/'  className={`${styles.sideNavLinks} ${isActive === 'Home'?styles.active:''}`}  onClick={()=>setIsActive('Home')}>        
        <p>Home</p></NavLink>
        
        <div className={styles.sideNavDiv}>
          <div className={styles.divHeading}><p>Public</p></div>
            <NavLink to='/Questions' className={`${styles.sideNavLinks} ${isActive === 'Questions'?styles.active:''}`} onClick={()=>setIsActive('Questions')}>
              <img src={globe} alt='Globe'/>
              <p>Questions</p>
            </NavLink>

            <NavLink to='/' className={`${styles.sideNavLinks} ${isActive === 'Tags'?styles.active:''}`} 
            onClick={()=>setIsActive('Tags')}><p className='pl-5'>Tags</p></NavLink>
            
            <NavLink to='/' className={`${styles.sideNavLinks} ${isActive === 'Users'?styles.active:''}`} onClick={()=>setIsActive('Users')}>            
            <p className='pl-5'>Users</p></NavLink>
            
            <NavLink to='/' className={`${styles.sideNavLinks} ${isActive === 'Companies'?styles.active:''}`} onClick={()=>setIsActive('Companies')}>            
            <p className='pl-5'>Companies</p></NavLink>
        </div>

        <div className={styles.sideNavDiv}>
          <div className={styles.divHeading}>Collectives</div>
          
          <NavLink to='/' className={`${styles.sideNavLinks} ${isActive === 'Explore'?styles.active:''}`} onClick={()=>setIsActive('Explore')}>          
          <p className='pl-5'>Explore Collectives</p></NavLink>
        </div>
        <div className={styles.sideNavDiv}>
          <div className={styles.divHeading}>Labs</div>
          
          <NavLink to='/' className={`${styles.sideNavLinks} ${isActive === 'Discussions'?styles.active:''}`} onClick={()=>setIsActive('Discussions')}>          
          <p className='pl-5'>Discussions</p></NavLink>
        </div>
      </nav>
    </div>
  )
}

export default LeftSideBar
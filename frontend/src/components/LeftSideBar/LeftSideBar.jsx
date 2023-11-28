import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './left.module.scss'
import { IoMdHome } from "react-icons/io";
import { IoMdPricetags } from "react-icons/io";
import { ImUsers } from "react-icons/im";
import { IoBag } from "react-icons/io5";
import { IoMdBookmark } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";
import { SiAskubuntu } from "react-icons/si";
import { TiStarburst } from "react-icons/ti";
import { GoStarFill } from "react-icons/go";

const LeftSideBar = () => {


  return (
    <div className={styles.leftSidebar}>
      <nav className={styles.sideNav}>
        <NavLink to='/' className={(props)=>`${props.isActive? styles.active: ''} ${styles.sideNavLinks}`}>  
        <div className='flex items-center justify-center gap-1'>
          <IoMdHome size={18}/>      
          <p>Home</p>
        </div>  
          
        </NavLink>
        
        <div className={styles.sideNavDiv}>
          <div className={styles.divHeading}><p>Public</p></div>
            <NavLink to='/questions' className={(props)=>`${props.isActive? styles.active: ''} ${styles.sideNavLinks}`}>
            <div className='flex items-center justify-center gap-1'>
              <SiAskubuntu size={15}/>
              <p>Questions</p>
            </div>  
              
            </NavLink>
            
            <NavLink to='/tags' className={(props)=>`${props.isActive? styles.active: ''} ${styles.sideNavLinks}`}>
              <div className='flex items-center justify-center gap-1'>
                <IoMdPricetags size={15}/>
                <p>Tags</p>
              </div>  
            </NavLink>
            
            {/* <NavLink to='/saves' className={(props)=>`${props.isActive? styles.active: ''} ${styles.sideNavLinks}`}>
              <div className='flex items-center justify-center gap-1'>
                <IoMdBookmark size={15}/>
                <p>Saves</p>
              </div>  
            </NavLink> */}
            
            <NavLink to='/users' className={(props)=>`${props.isActive? styles.active: ''} ${styles.sideNavLinks}`}>            
              <div className='flex items-center justify-center gap-1'>
                <ImUsers size={15}/>
                <p>Users</p>
              </div>  
            </NavLink>
            
            <NavLink to='/companies' className={(props)=>`${props.isActive? styles.active: ''} ${styles.sideNavLinks}`}>            
              <div className='flex items-center justify-center gap-1'>
                <IoBag size={15}/>
                <p>Companies</p>
              </div>  
            </NavLink>
        </div>

        <div className={styles.sideNavDiv}>
          <div className={styles.divHeading}>Collectives</div>
          <NavLink to='/explore-collectives'  className={(props)=>`${props.isActive? styles.active: ''} ${styles.sideNavLinks}`}>          
            <div className='flex items-center justify-center gap-1'>
              <div className='absolute z-0 left-[71px] pt-3'>
                <TiStarburst size={19} color='#ef8236'/>
              </div>
                <div className='absolute z-10 left-[75px] pt-3'>
                  <GoStarFill  size={11} color='white'/>
                </div>
              <p className='absolute left-[90px] pt-3'>Explore Collectives</p>
            </div>
          </NavLink>
        </div>
        
        <div className={styles.sideNavDiv}>
          <div className={styles.divHeading}>Labs</div>
          <NavLink to='/discussions'  className={(props)=>`${props.isActive? styles.active: ''} ${styles.sideNavLinks}`}>          
            <div className='flex items-center justify-center gap-1'>
            <IoChatbox size={15}/>
            <p>Discussions</p>
            </div>   
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default LeftSideBar
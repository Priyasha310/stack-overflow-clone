import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import bars from '../../assets/bars-solid.svg'
import search from "../../assets/search-solid.svg";
import styles from './navbar.module.scss'
import Avatar from '../Avatar/Avatar';

const Navbar = () => {

  var user = "Pri";
  return (
    <div className={styles.navContainer}>
      <div className={styles.navbar}>
        <button className={`${styles.slideIcon} ${styles.navItem}`} onClick={console.log('fhdl')}>
          <img src={bars} alt="bars" width="18 " />
        </button>
        <div className={styles.links}>
          <Link to='/' className={`${styles.navItem} ${styles.navLogo}`}>
            <img src={logo} alt='logo'></img> 
          </Link> 
          <Link to='/' className={`${styles.navItem} ${styles.navLinks}`}>About</Link> 
          <Link to='/' className={`${styles.navItem} ${styles.navLinks}`}>Products</Link> 
          <Link to='/' className={`${styles.navItem} ${styles.navLinks}`}>For Teams</Link>
          <form>
            <input type='text' placeholder='Search...'/>
            <img src={search} width="15" alt='search' className={`${styles.searchIcon}`} />
          </form>
        </div>
        <div className={`${styles.authControl}`}>
          {user === null ?(
            <Link to="/Auth"  className={`${styles.navItem} ${styles.navBtn}`} >Log In</Link>
          ):(
            <>
              <Avatar backgroundColor='#009dff' px='10px' py='5px' borderRadius='50%' >
                <Link to='/Auth'>M</Link>
              </Avatar>
              <button className={`${styles.navItem} ${styles.navBtn}`} >Log out</button>
            </>
          )}
            
        </div>
      </div>
    </div>
  )
}

//for smaller screen change logo to icon.png

export default Navbar
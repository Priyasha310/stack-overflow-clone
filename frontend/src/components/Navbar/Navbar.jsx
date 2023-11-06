import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import bars from '../../assets/bars-solid.svg'
import search from "../../assets/search-solid.svg";
import styles from './navbar.module.scss'
import Avatar from '../Avatar/Avatar';

const Navbar = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('user_data')) {
      const userData = JSON.parse(localStorage.getItem("user_data")||'null')
      setCurrentUser(userData);
      // console.log("User data found in local storage:", userData);  
    }
  }, [navigate]);

  const handleLogout =  () => {
    localStorage.clear();
    navigate("/auth");
  }

  return (
    <div className={styles.navContainer}>
      <div className={styles.navbar}>
        <button className={`${styles.slideIcon} ${styles.navItem}`} onClick={(e)=>console.log('navbar button clicked')}>
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
          {currentUser === null ?(
            <Link to="/auth"  className={`${styles.navItem} ${styles.navBtn}`} >Log In</Link>
          ):(
            <div className={styles.user}>
              <Avatar backgroundColor='#009dff' px='10px' py='5px' borderRadius='50%' >
                <Link to='/auth'>{currentUser.name.charAt(0)}</Link>
              </Avatar>
              <button className={`${styles.navItem} ${styles.navBtn}`} onClick={handleLogout}>Log out</button>
            </div>
          )}
            
        </div>
      </div>
    </div>
  )
}

//for smaller screen change logo to icon.png

export default Navbar
import React, { useEffect, useState } from 'react'
import styles from '../Home/home.module.scss'
import LeftSideBar from 'components/LeftSideBar/LeftSideBar'
import UsersList from './UsersList'
import axios from 'axios'
import { getUsersRoute } from 'utils/APIRoutes'
import loader from '../../assets/loader-unscreen.gif'


const Users = () => {

  const [usersList, setUsersList] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(getUsersRoute);
        setUsersList(response.data.users);
        console.log("RESPONSE TO FETCH USERS: ", response);
        // console.log("USERS LIST: ", usersList);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <LeftSideBar/>
      {usersList === null?(
        <div className='w-full flex justify-center items-center'>
          <img src={loader} alt='loading' width={100} height={100}/>
        </div>
        ):(
        <>
          <UsersList userslist = {usersList}/>
        </>
      )}
    </div> 
  )
}

export default Users
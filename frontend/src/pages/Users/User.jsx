import React from 'react'
import styles from './user.module.scss'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Avatar from 'components/Avatar/Avatar'

const User = ({user}) => {
  
  const getBackgroundColor = (firstCharacter) => {
    const colorGroups = {
      group1: ['A', 'F', 'K', 'Q', 'U'],
      group2: ['B', 'G', 'L', 'P', 'V'],
      group3: ['C', 'H', 'M', 'R', 'W'],
      group4: ['D', 'I', 'N', 'T', 'X'],
      group5: ['E', 'J', 'O', 'S', 'Y', 'Z'],
    };
  

    for (const groupName in colorGroups) {
      if (colorGroups[groupName].includes(firstCharacter.toUpperCase())) {
        return groupName;
      }
    }

  };

  const group = getBackgroundColor(user.name?.charAt(0));
  const colorMap = {
    group1: 'purple',
    group2: 'skyblue',
    group3: 'limegreen',
    group4: 'orange',
    group5: 'darkSalmon',
    default: 'gray',
  };

  const randomColor = colorMap[group];

  return (
    <Link to={`/Users/${user._id}`} className={styles.userProfileLink}>
      <div className={styles.users} key={user._id}>
          <Avatar backgroundColor={randomColor} width='40px' height='' px='' py='5px' borderRadius='10%' >
            <h3 className='text-xl'>{user.name.charAt(0)}</h3>
          </Avatar>
          <div className={styles.userTitle}>
              <p>{user.name}</p>
              <p>{moment(user.joinedOn).fromNow()}</p>
          </div>          
      </div>
    </Link>
  )
}

export default User
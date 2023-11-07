import React, { useEffect, useState } from 'react'
import styles from './question.module.scss'
import voteDown from '../../assets/sort-down.svg'
import voteUp from '../../assets/sort-up.svg'
import { Link, useNavigate } from 'react-router-dom'
import Avatar from 'components/Avatar/Avatar'
import moment from 'moment'

const DisplayAnswers = ({key, question, handleShare}) => {
  
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserName, setCurrentUserName] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem('user_data')) {
        const userData = await JSON.parse(localStorage.getItem("user_data"))
        setCurrentUser(userData); 
      }
      else{
        navigate('/auth')
      }
    }
    fetchData();
  },[]);

  useEffect(()=>{
    if(currentUser){
      setCurrentUserName(currentUser.name);
      setCurrentUserId(currentUser._id);
      console.log("CURRENT USER: NAME, ID \n", currentUserName, currentUserId);
    }
  },[currentUser, currentUserName, currentUserId])

  return (
    <section>
    <h1 className='ml-8'>{question.noOfAnswers} {question.noOfAnswers > 1? "Answers": "Answer"}</h1>
    {question.answer.map(ans => (
      <>
      <div key={key} className={styles.questions}>
        <div className={styles.count}>
          <img src={voteUp} alt='vote-up'/>
          <p>{ans.upVotes - ans.downVotes}</p>
          <img src={voteDown} alt='vote-down'/>
        </div>
        <div className={styles.answerBody}>
          <h5>{ans.answerBody}</h5>        
        </div>
      </div> 

      <div className={styles.sharePosted}>
        <div className='flex gap-4'>
          <button onClick={handleShare}>Share</button>
          {
            currentUserId === ans.userId && (
              <button onClick={(e)=>console.log(currentUserId, ans.userId)}>Delete</button> 
            )
          }
        </div>
        <div className={styles.user}>
          <p>answered {moment(ans.answeredOn).fromNow()}</p>
          <Link to={`/Users/${question.userId}`}style={{ color: "#0086d8" }}>
            <div className='flex flex-row gap-2 my-1'>
              <Avatar backgroundColor="orange" px="8px" py="4px" fontSize='14px' borderRadius="4px">
                {ans.userAnswered.charAt(0).toUpperCase()}
              </Avatar>
              <div>{ans.userAnswered}</div>
            </div>
          </Link>
        </div>
        </div>
        <hr className='m-2'/>
         </>
      ))}
    </section>
  )
}

export default DisplayAnswers
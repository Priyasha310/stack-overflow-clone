import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import styles from './qGlossary.module.scss'
import QuestionList from './QList';
import loader from '../../assets/loader-unscreen.gif'
import { getQuestionRoute } from 'utils/APIRoutes';
import axios from 'axios';

const QGlossary = () => {
  
  const location = useLocation();  
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [questionsList, setQuestionsList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem('user_data')) {
        const userData = await JSON.parse(localStorage.getItem("user_data"))
        setCurrentUser(userData);
        // console.log("User data found in local storage:", userData); 
        // console.log("CURRENT USER ", currentUser);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(getQuestionRoute);
        setQuestionsList(response.data);
        console.log("RESPONSE TO FETCH QUESTIONS: ", response);
      } catch (error) {
        console.error("Error fetching questions: ", error);
      }
    };
    fetchQuestions();
  }, []);

  const checkAuth = ()=>{
    if(currentUser === null){
      // console.log("You need to login to ask a question");
      navigate('/auth');
    }else{
      // console.log("routing........");
      navigate('/questions/ask')
    }
  }

  return (
    <div className={styles.qContainer}>
      <div className={styles.qHeader}>
        {location.pathname === "/" ? (
          <h4>Top Questions</h4>
        ) : (
          <h4>All Questions</h4>
        )}
        <button type='submit' onClick={checkAuth}>Ask Question</button>
      </div>
      <div className='flex flex-row'>
        {questionsList ? (<h1 className='w-full ml-7 mt-2'>{questionsList.length} {questionsList.length > 1? "questions": "question"}</h1>  ): <h1 className='w-full ml-7 mt-2'>0 question</h1>}
        <div className={styles.filter}>
          <p>Interesting</p>
          <p>Bountied</p>
          <p>Hot</p>
          <p>Week</p>
          <p>Month</p>
        </div>
      </div>
        
      <hr className='mx-2 my-4'/>
      <div>
        {questionsList === null?(
          <div className='w-full flex justify-center items-center'>
            <img src={loader} alt='loading' width={100} height={100}/>
          </div>
          ):(
          <>
            <QuestionList questionsList={questionsList}/>
          </>
         )}
      </div>
       
    </div>
  )
}

export default QGlossary
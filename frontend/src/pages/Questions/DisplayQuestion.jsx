import LeftSideBar from 'components/LeftSideBar/LeftSideBar'
import RightSideBar from 'components/RightSideBar/RightSideBar'
import React, { useEffect, useState } from 'react'
import styles from '../Home/home.module.scss'
import QuestionDetails from './QuestionDetails'
import axios from 'axios'
import loader from '../../assets/loader-unscreen.gif'
import { getQuestionRoute } from 'utils/APIRoutes'
import { useParams } from 'react-router-dom'

const DisplayQuestion = () => {
  const [questionsList, setQuestionsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams();
  
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(getQuestionRoute);
        setQuestionsList(response.data);
        setIsLoading(false)
        console.log("RESPONSE TO FETCH QUESTIONS: ", response);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <LeftSideBar/>
      <div className={styles.contentContainer}>
        {isLoading?(
          <div className='w-full h-screen flex justify-center items-center'>
            <img src={loader} alt='loading' width={100} height={100}/>
          </div>
        ):(
          <>
          {
            questionsList?.filter(question => question._id === id).map(question => (
              <QuestionDetails question={question} id={id}/>
            ))
          }
          </>
        )}
        <RightSideBar/>
      </div>
    </div>
  )
}

export default DisplayQuestion
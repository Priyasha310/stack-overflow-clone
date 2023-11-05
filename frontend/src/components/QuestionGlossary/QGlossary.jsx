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
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [questionsList, setQuestionsList] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem('user_data')) {
      navigate('/auth') 
    }
    setIsLoading(false) 
  },[isLoading, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem('user_data')) {
        const userData = await JSON.parse(localStorage.getItem("user_data"))
        setCurrentUser(userData);
        console.log("User data found in local storage:", userData); 
        console.log("CURRENT USER ", currentUser);
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
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, []);

  const checkAuth = ()=>{
    if(currentUser === null){
      console.log("You need to login to ask a question");
      navigate('/auth');
    }else{
      console.log("routing........");
      navigate('/questions/ask')
    }
  }

  // var questionsList = [
  //   {
  //       _id:1,
  //       userId:1,
  //       upVotes:2,
  //       downVotes: 3,
  //       noOfAnswers:2,
  //       questionTitle: "convert unicode text",
  //       questionBody: "How to convert unicode text to readable text",
  //       questionTags: ['java', 'nodejs', 'reactjs',],
  //       userPosted: 'Anonymous',
  //       askedOn: 'jan 1 2023',
  //       answer: [{
  //         answerBody: "Answer for 1st question of unicode",
  //         userAnswered: "Priyasha",
  //         'answeredOn': "feb 20 2023",
  //         'userId':2,
  //         upVotes:10,
  //         downVotes: 3,
  //       },{
  //         answerBody: "Answer v2",
  //         userAnswered: "Priyasha",
  //         'answeredOn': "Jan 10 2023",
  //         'userId':2,
  //         upVotes:10,
  //         downVotes: 3,
  //       },
  //     ]
  //   },
  //   {
  //       _id:2,
  //       userId:1,
  //       upVotes:2,
  //       downVotes: 3,
  //       noOfAnswers:2,
  //       questionTitle: "Can't find stylesheet to import",
  //       questionBody: "",
  //       questionTags: ['java', 'nodejs', 'reactjs',],
  //       userPosted: 'Parnavi',
  //       askedOn: 'jan 1 2023',
  //       answer: [{
  //         answerBody: "Answer",
  //         userAnswered: "Priyasha",
  //         'answeredOn': "Jan 10 2023",
  //         'userId':2,
  //         upVotes:2,
  //         downVotes: 3,
  //       }]
  //   },
  //   {
  //       _id:3,
  //       userId:1,
  //       upVotes:20,
  //       downVotes: 3,
  //       noOfAnswers:2,
  //       questionTitle: "TS2504: Type 'ReadableStream<Uint8Array>' must have a '[Symbol.asyncIterator]()' method that returns an async iterator ",
  //       questionBody: "",
  //       questionTags: ['java', 'nodejs', 'reactjs',],
  //       userPosted: 'Ritu',
  //       askedOn: 'jan 1 2023',
  //       answer: [{
  //         answerBody: "Answer",
  //         userAnswered: "Priyasha",
  //         'answeredOn': "Jan 10 2023",
  //         'userId':2,
  //         upVotes:2,
  //         downVotes: 3,
  //       }]
  //   },
  //   {
  //       _id:4,
  //       userId:1,
  //       upVotes:20,
  //       downVotes: 3,
  //       noOfAnswers:2,
  //       questionTitle: "Docker does not start when using swagger-ui image in docker",
  //       questionBody: "",
  //       questionTags: ['java', 'nodejs', 'reactjs',],
  //       userPosted: 'Varsha',
  //       askedOn: 'jan 1 2023',
  //       answer: [{
  //         answerBody: "Answer",
  //         userAnswered: "Priyasha",
  //         'answeredOn': "Jan 10 2023",
  //         'userId':2,
  //         upVotes:2,
  //         downVotes: 3,
  //       }]
  //   },
  // ]

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
        {questionsList &&  (<h1 className='w-full ml-7 mt-2'>{questionsList.length} {questionsList.length > 1? "questions": "question"}</h1>  )}
        <div className={styles.filter}>
          <p>Interesting</p>
          <p>Bountied</p>
          <p>Hot</p>
          <p>Week</p>
          <p>Month</p>
        </div>
      </div>
      {/* <h1 className='ml-8'>{questionsList.length} {questionsList.length > 1? "questions": "question"}</h1>  */}
        
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
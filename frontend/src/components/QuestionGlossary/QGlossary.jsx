import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import styles from './qGlossary.module.scss'
import QuestionList from './QList';
import loader from '../../assets/loader.gif'

const QGlossary = () => {
  
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();

  const checkAuth = ()=>{
      if(user === null){
        alert("You need to login to ask a question");
        navigate('/auth');
      }else{
        navigate('/question/ask')
      }
  }

  var questionsList = [
    {
        _id:1,
        userId:1,
        upVotes:2,
        downVotes: 3,
        noOfAnswers:2,
        questionTitle: " convert unicode text",
        qBody: "How to convert unicode text to readable text",
        qTags: ['java', 'nodejs', 'reactjs',],
        userPosted: 'Anonymous',
        askedOn: 'jan 1 2023',
        answer: [{
          answerBody: "Answer for 1st question of unicode",
          userAnswered: "Priyasha",
          'answeredOn': "feb 20 2023",
          'userId':2,
          upVotes:10,
          downVotes: 3,
        },{
          answerBody: "Answer v2",
          userAnswered: "Priyasha",
          'answeredOn': "Jan 10 2023",
          'userId':2,
          upVotes:10,
          downVotes: 3,
        },
      ]
    },
    {
        _id:2,
        userId:1,
        upVotes:2,
        downVotes: 3,
        noOfAnswers:2,
        questionTitle: "Can't find stylesheet to import",
        qBody: "",
        qTags: ['java', 'nodejs', 'reactjs',],
        userPosted: 'Parnavi',
        askedOn: 'jan 1 2023',
        answer: [{
          answerBody: "Answer",
          userAnswered: "Priyasha",
          'answeredOn': "Jan 10 2023",
          'userId':2,
          upVotes:2,
          downVotes: 3,
        }]
    },
    {
        _id:3,
        userId:1,
        upVotes:20,
        downVotes: 3,
        noOfAnswers:2,
        questionTitle: "TS2504: Type 'ReadableStream<Uint8Array>' must have a '[Symbol.asyncIterator]()' method that returns an async iterator ",
        qBody: "",
        qTags: ['java', 'nodejs', 'reactjs',],
        userPosted: 'Ritu',
        askedOn: 'jan 1 2023',
        answer: [{
          answerBody: "Answer",
          userAnswered: "Priyasha",
          'answeredOn': "Jan 10 2023",
          'userId':2,
          upVotes:2,
          downVotes: 3,
        }]
    },
    {
        _id:4,
        userId:1,
        upVotes:20,
        downVotes: 3,
        noOfAnswers:2,
        questionTitle: "Docker does not start when using swagger-ui image in docker",
        qBody: "",
        qTags: ['java', 'nodejs', 'reactjs',],
        userPosted: 'Varsha',
        askedOn: 'jan 1 2023',
        answer: [{
          answerBody: "Answer",
          userAnswered: "Priyasha",
          'answeredOn': "Jan 10 2023",
          'userId':2,
          upVotes:2,
          downVotes: 3,
        }]
    },
  ]

  return (
    <div className={styles.qContainer}>
      <div className={styles.qHeader}>
        {location.pathname === "/" ? (
          <h4>Top Questions</h4>
        ) : (
          <h4>All Questions</h4>
        )}
        <button className={styles.askBtn} type='submit' onClick={checkAuth}>Ask Question</button>
      </div>
      <div className={styles.filter}>
        <p>Interesting</p>
        <p>Bountied</p>
        <p>Hot</p>
        <p>Week</p>
        <p>Month</p>
      </div>

      <hr className='my-4'/>
      <div>
        {questionsList === null?(<img src={loader} alt='loading'/>):(
          <>
            <QuestionList questionsList={questionsList}/>
          </>
        )}
      </div>
       
    </div>
  )
}

export default QGlossary
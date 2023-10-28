import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import styles from './qGlossary.module.scss'
import QuestionList from './QList';

const QGlossary = () => {
  
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();

  var questionsList = [
    {
    id:1,
    votes:2,
    noOfAnswers:2,
    views:20,
    questionTitle: "How to /convert unicode text to readable text",
    qBody: "",
    qTags: ['java', 'nodejs', 'reactjs',],
    userPosted: 'Priyasha',
    askedOn: 'jan 1 2023',
  },
    {
    id:2,
    votes:2,
    noOfAnswers:2,
    views:20,
    questionTitle: "Can't find stylesheet to import",
    qBody: "",
    qTags: ['java', 'nodejs', 'reactjs',],
    userPosted: 'Parnavi',
    askedOn: 'jan 1 2023',
  },
    {
    id:3,
    votes:20,
    noOfAnswers:2,
    views:20,
    questionTitle: "TS2504: Type 'ReadableStream<Uint8Array>' must have a '[Symbol.asyncIterator]()' method that returns an async iterator ",
    qBody: "",
    qTags: ['java', 'nodejs', 'reactjs',],
    userPosted: 'Ritu',
    askedOn: 'jan 1 2023',
  },
    {
    id:4,
    votes:2,
    noOfAnswers:2,
    views:20,
    questionTitle: "Docker does not start when using swagger-ui image in docker",
    qBody: "",
    qTags: ['java', 'nodejs', 'reactjs',],
    userPosted: 'Varsha',
    askedOn: 'jan 1 2023',
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
        <button className={styles.askBtn} type='submit'>Ask Question</button>
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
        {questionsList === null?(
        <h1>d</h1>
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
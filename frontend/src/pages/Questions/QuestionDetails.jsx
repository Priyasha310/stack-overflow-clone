import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './question.module.scss'
import voteDown from '../../assets/sort-down.svg'
import voteUp from '../../assets/sort-up.svg'
import Avatar from 'components/Avatar/Avatar'
import moment from 'moment'
import DisplayAnswers from './DisplayAnswers'
import copy from 'copy-to-clipboard'
import { useLocation } from 'react-router-dom'

const QuestionDetails = () => {

  const {id} = useParams();
  const location = useLocation();
  const url = "http://localhost:3000";
  
  const handleShare = () => {
    copy(url + location.pathname);
    alert("URL Copied");
  };
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
      userPosted: 'Priyasha',
      askedOn: 'jan 1 2023',
      answer: [{
        answerBody: "Answer",
        userAnswered: "Priyasha",
        'answeredOn': "Jan 10 2023",
        'userId':2,
      }]
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
      }]
  },
  ]

  return (
    <div className={styles.displayPage}>
      {questionsList === null?(<h1>d</h1>):(
      <>
      {questionsList.filter(question => question._id == id).map(question => (
        <div key={question._id}>
          <section>
            <h1 className={styles.questionTitle}>{question.questionTitle}</h1>
            <hr className='m-2'/>
            <div className={styles.questions}>
              <div className={styles.count}>
                <img src={voteUp} alt='vote-up'/>
                <p>{question.upVotes}</p>
                <img src={voteDown} alt='vote-down'/>
              </div>
              <div className={styles.questionBody}>
                <h5>{question.qBody}</h5>
                <div className={styles.tags}>
                  <div className='flex flex-row'>
                    {
                      question.qTags.map((tag)=> (
                        <p className={styles.tag} key={tag}>{tag}</p>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className={styles.sharePosted}>
              <div>
                <button onClick={handleShare}>Share</button>
              </div>
              <div  className={styles.user}>
                <p>asked {moment(question.askedOn).fromNow()}</p>
                <Link
                  to={`/Users/${question.userId}`}
                  className="user-link"
                  style={{ color: "#0086d8" }}
                >
                <div className='flex flex-row gap-2 my-1'>
                  <Avatar
                    backgroundColor="orange"
                    px="8px"
                    py="4px"
                    fontSize='14px'
                    borderRadius="4px"
                  >
                    {question.userPosted.charAt(0).toUpperCase()}
                  </Avatar>
                  <div>{question.userPosted}</div></div>
                </Link>
              </div>
              
            </div>
            <hr className='m-2'/>
          </section>

          {question.noOfAnswers !== 0 && (
            <section className={styles.showAns}>
              {/* <h3>{question.noOfAnswers} Answers</h3> */}
              <DisplayAnswers
                key={question._id}
                question={question}
                handleShare={handleShare}
              />
            </section>
          )}
          <hr className='m-2'/>

          <section className={styles.postAns}>
            <h1>Your answer</h1>
            <form>
              <label htmlFor='answer-question'>
                <textarea id='answer-question' />
              </label>
              <button className='bg-link-color'type='submit'>Post Your Answer</button>
            </form>
          </section>
          
          <hr className='m-2'/>
        </div>
        ))
      }
      </>
      )}
    </div>
  )
}

export default QuestionDetails
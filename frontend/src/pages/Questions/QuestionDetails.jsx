import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styles from './question.module.scss'
import voteDown from '../../assets/sort-down.svg'
import voteUp from '../../assets/sort-up.svg'
import Avatar from 'components/Avatar/Avatar'
import moment from 'moment'
import DisplayAnswers from './DisplayAnswers'
import copy from 'copy-to-clipboard'
import { useLocation } from 'react-router-dom'
import loader from '../../assets/loader-unscreen.gif'
import { getQuestionRoute } from 'utils/APIRoutes'
import axios from 'axios'

const QuestionDetails = () => {
  const [currentUserName, setCurrentUserName] = useState(null);
  const [questionsList, setQuestionsList] = useState([]);
  const [answer, setAnswer] = useState("");

  const {id} = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const url = "http://localhost:3000";
  
  const handleShare = () => {
    copy(url + location.pathname);
    alert("URL Copied");
  };

  useEffect(() => {
    if (localStorage.getItem('user_data')) {
      const userData = JSON.parse(localStorage.getItem("user_data")||'null')
      setCurrentUserName(userData.name);
      console.log("User data found in local storage:", userData);  
    }
    else{
      navigate('/')
    }
  }, [navigate]);
    
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


  const handleSubmit = async (e, answerLength) => {
    e.preventDefault();
    if(answer === ""){
      alert("Enter answer");
    }else{
      const {data} = await axios.patch(postAnswerRoute, {
        noOfAnswers: answerLength + 1,
          answerBody:answer, userAnswered:currentUserName
      });
      if(data.status === false) console.log("error setting answer");
      else{ 
        setAnswer(answer);
        console.log("ANSWER SET");
      }; 
    }
  };

  const host = 'http://localhost:5000'
  const generatePostAnswerRoute = (id) => `${host}/answers/post/${id}`;
  const postAnswerRoute = generatePostAnswerRoute(id);

  // var questionsList = [
  //   {
  //       _id:1,
  //       userId:1,
  //       upVotes:2,
  //       downVotes: 3,
  //       noOfAnswers:2,
  //       questionTitle: " convert unicode text",
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
  //         answerBody: "Answer v1",
  //         userAnswered: "Priyasha",
  //         'answeredOn': "Jan 10 2023",
  //         'userId':2,
  //         upVotes:5,
  //         downVotes: 0,
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
    <div className={styles.displayPage}>
      {questionsList === null?(
        <div className='w-full mt-16 flex justify-center items-center'>
            <img src={loader} alt='loading' width={100} height={100}/>
          </div>
        ):(
      <>
      {questionsList?.filter(question => question._id === id).map(question => (
        <div key={question._id}>
          <section>
            <h1 className={styles.questionTitle}>{question.questionTitle}</h1>
            <hr className='m-2'/>
            <div className={styles.questions}>
              <div className={styles.count}>
                <img src={voteUp} alt='vote-up'/>
                <p>{question.upVotes - question.downVotes}</p>
                <img src={voteDown} alt='vote-down'/>
              </div>
              <div className={styles.questionBody}>
                <h5>{question.questionBody}</h5>
                <div className={styles.tags}>
                  <div className='flex flex-row'>
                    {
                      question.questionTags.map((tag)=> (
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
                <button onClick={handleShare}>Delete</button>
              </div>
              <div  className={styles.user}>
                <p>asked {moment(question.askedOn).fromNow()}</p>
                <Link
                  to={`/Users/${question.userId}`}
                  className="user-link"
                  style={{ color: "#0086d8" }}
                >
                <div className='flex flex-row gap-2 my-1'>
                  <Avatar backgroundColor="orange" px="8px" py="4px" fontSize='14px' borderRadius="4px">
                    {question.userPosted?.charAt(0).toUpperCase()}
                  </Avatar>
                  <div>{question.userPosted}</div></div>
                </Link>
              </div>
              
            </div>
            <hr className='m-2'/>
          </section>

          {question.answer.length !== 0 && (
            <section>
              {/* <h3>{question.noOfAnswers} Answers</h3> */}
              <DisplayAnswers
                key={question._id}
                question={question}
                handleShare={handleShare}
              />
            <hr className='m-2'/>
            </section>
          )}

          <section className={styles.postAns}>
            <h1>Your answer</h1>
            <form onSubmit = {(e) => {handleSubmit(e, question.answer.length)}}>
              <label htmlFor='answer-question'>
                <textarea id='answer-question' name='answer' value={answer} onChange={(e)=>setAnswer(e.target.value)}  />
              </label>
              <button type='submit'>Post Your Answer</button>
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
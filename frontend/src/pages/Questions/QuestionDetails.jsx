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
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [currentUserName, setCurrentUserName] = useState(null);
  const [questionsList, setQuestionsList] = useState([]);
  const [answer, setAnswer] = useState("");
  const [answerError, setAnswerError] = useState("");

  const {id} = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const url = "http://localhost:3000";

  useEffect(() => {
    if (localStorage.getItem('user_data')) {
      const userData = JSON.parse(localStorage.getItem("user_data")||'null')
      setCurrentUser(userData);
      setCurrentUserId(userData._id);
      setCurrentUserName(userData.name);
      console.log("User data found in local storage:", userData);
      console.log("CURRENT USER: ", currentUser);  
    }
    else{
      console.log("You need to login to check question details.")
      navigate('/auth')
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
    
  const handleShare = () => {
    copy(url + location.pathname);
    alert("URL Copied");
  };

  const handleSubmit = async (e, answerLength) => {
    e.preventDefault();
    if(answer === ""){
      setAnswerError("Enter your answer");
    }else{
      const {data} = await axios.patch(postAnswerRoute, {
        noOfAnswers: answerLength + 1, answerBody: answer, userAnswered: currentUserName, userId: currentUserId,
      });
      if(data.status === false) console.log("error setting answer");
      else{ 
        setAnswer(answer);
        // console.log("ANSWER SET");
        setAnswer("");
        setAnswerError("");
      }; 
    }
  };

  const host = 'http://localhost:5000'
  const generatePostAnswerRoute = (id) => `${host}/answers/post/${id}`;
  const postAnswerRoute = generatePostAnswerRoute(id);

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
                {
                  currentUser._id === question.userId && (
                    <button onClick={(e)=>console.log(currentUser._id, question.userId)}>Delete</button> 
                  )
                }
                
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
              <DisplayAnswers
                key={question.answer._id}
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
                <span className='text-error-red text-[10px]'>{answerError}</span>
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
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
// import loader from '../../assets/loader-unscreen.gif'
// import { getQuestionRoute } from 'utils/APIRoutes'
import axios from 'axios'

const QuestionDetails = ({question, id}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [currentUserName, setCurrentUserName] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [questionsList, setQuestionsList] = useState([]);
  const [answer, setAnswer] = useState("");
  const [answerError, setAnswerError] = useState("");
  const [upVote, setUpVote] = useState(question.upVotes);
  const [downVote, setDownVote] = useState(question.downVotes);
  const [makeTheLineVisible, setMakeTheLineVisible] = useState(false);

  // const {id} = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const url = "http://localhost:3000";
  const host = 'http://localhost:5000'

  useEffect(() => {
    if (localStorage.getItem('user_data')) {
      const userData = JSON.parse(localStorage.getItem("user_data")||'null')
      setCurrentUser(userData);
      setCurrentUserId(userData._id);
      setCurrentUserName(userData.name);
      // console.log("User data found in local storage:", userData);
      // console.log("CURRENT USER: ", currentUser);  
    }
    else{
      console.log("You need to login to check question details.")
      navigate('/auth')
    }
  }, [navigate]);

    
  const handleShare = () => {
    copy(url + location.pathname);
    alert("URL Copied");
  };
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter" ) {
      setMakeTheLineVisible(true)
    }
  };

  const handleDelete = async (e) => {
    console.log("deleting question");
    try {
      const {data} = await axios.delete(`${host}/questions/delete/${id}`);
      navigate('/');
      if(data.status === true) {console.log("deleted question", data);}
      else console.log("error deleting", data);
    } catch (error) {
      console.log(error);
    }
    
  };

  const handleSubmit = async (e, answerLength) => {
    e.preventDefault();
    if(answer === ""){
      setAnswerError("Enter your answer");
    }else{
      const {data} = await axios.patch(`${host}/answers/post/${id}`, {
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

  const handleUpVote = async (upvote, downvote) => {
    console.log("handleUpVote........ question.upvotes: ", upvote);
    
    const {data} = await axios.patch(`${host}/questions/vote/${id}`, {
      upVotes: upvote + 1,
      downVotes: downvote,
   });
    if(data.status === true){ 
      setUpVote(data.upVotes);
      setDownVote(data.downVotes);
      console.log("upvoted........... from useState", data.upVotes); 
    }
    else console.log("error upvoting");
  };

  const handleDownVote = async (upvote, downvote) => {
    console.log("handleDownVote........ question.downvotes: ", downvote);
    
    const {data} = await axios.patch(`${host}/questions/vote/${id}`, {
      upVotes: upvote,
      downVotes: downvote + 1,
   });
    if(data.status === true){ 
      setUpVote(data.upVotes);
      setDownVote(data.downVotes);
      console.log("downvoted........... from useState", data.downVotes); 
    }
    else console.log("error downvoting");
  };

  return (
    <div className={styles.displayPage}>
      {/* {isLoading?(
        <div className='w-full h-fit flex justify-center items-center'>
            <img src={loader} alt='loading' width={100} height={100}/>
          </div>
        ):( */}
      <>
       {/*{questionsList?.filter(question => question._id === id).map(question => ( */}
        <div key={question._id}>
          <section>
            <h1 className={styles.questionTitle}>{question.questionTitle}</h1>
            <hr className='m-2'/>
            <div className={styles.questions}>
              <div className={styles.count}>
                <img src={voteUp} alt='vote-up' onClick={(e)=>handleUpVote(upVote, downVote)}/>
                <p>{upVote-downVote}</p>
                <img src={voteDown} alt='vote-down' onClick={(e)=>handleDownVote(upVote, downVote)}/>
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
                  currentUser?._id === question.userId && (
                    <button onClick={(e)=>handleDelete(e)}>Delete</button> 
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
                  <Avatar backgroundColor="tomato" px="8px" py="4px" fontSize='14px' borderRadius="4px">
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
            </section>
          )}

          <section className={styles.postAns}>
            <h1>Your answer</h1>
            <form onSubmit = {(e) => {handleSubmit(e, question.answer.length)}}>
              <label htmlFor='answer-question'>
                <textarea id='answer-question' name='answer' value={answer} onChange={(e)=>setAnswer(e.target.value)} onKeyDown={handleKeyDown}/>
                <span className='text-error-red text-[10px]'>{answerError}</span>
              </label>
              <button type='submit'>Post Your Answer</button>
            </form>
          </section>
          
          <hr className='m-2'/>
        </div>
        {/* ))
      } */}
      </>
      {/* )} */}
    </div>
  )
}

export default QuestionDetails
import React, { useEffect, useState } from 'react'
import styles from './askQuestions.module.scss'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { askQuestionRoute } from 'utils/APIRoutes'

const AskQuestions = () => {

    const navigate = useNavigate();
    const [questionTitle, setQuestionTitle] = useState('')
    const [questionBody, setQuestionBody] = useState('')
    const [questionTags, setQuestionTags] = useState([])
    const [questionTitleError, setQuestionTitleError] = useState('')
    const [questionBodyError, setQuestionBodyError] = useState('')
    const [questionTagsError, setQuestionTagsError] = useState('')
    
    const [currentUser, setCurrentUser] = useState(null);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [currentUserName, setCurrentUserName] = useState(null);
  
    useEffect(() => {
        const fetchData = async () => {
          if (localStorage.getItem('user_data')) {
            const userData = await JSON.parse(localStorage.getItem("user_data"))
            setCurrentUser(userData); 
            // console.log("CURRENT USER ", currentUser);
          }
        }
        fetchData();
    },[]);

    useEffect(()=>{
        if(currentUser){
            setCurrentUserName(currentUser.name);
            setCurrentUserId(currentUser._id);
        }
    },[currentUser])

    const handleValidation = () => {
        let isValid = true;
    
        if(!questionTitle){
            setQuestionTitleError('Please enter required details.')
            isValid = false;
        }
        if (questionBody.length < 20) {
          setQuestionBodyError('Question body must be of minimum 20 characters.');
          isValid = false;
        }        
        if (questionTags.length > 5) {
            setQuestionTagsError('Maximum of 5 tags must be provided.');
            isValid = false;
        }
        // else if(questionTags.every(tag => tag.length < 2)){
        //     setQuestionTagsError('Each tag must be atleast 2 characters long.')
        //     isValid = false;
        // }        
        return isValid;
      }

    const handleSumbit = async (e) => {
        e.preventDefault();
        if(handleValidation()){
            const {data} = await axios.post(askQuestionRoute, 
                {questionTitle, questionBody, questionTags, currentUserName, currentUserId},
            );
            if (data.status === true) navigate("/");
            
            setQuestionTitle("")
            setQuestionBody('')
            setQuestionTags([])
        }
        
        
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" ) {
            e.preventDefault();
            setQuestionBody(questionBody + '\n');
        }
    };

    return (
        <div className='bg-gray-100 min-w-screen min-h-screen pb-4'>
            <div className={styles.ask}>
                <h1>Ask a public question</h1>
                <div  className={styles.instructions}>
                    <h2>Writing a good question</h2>
                    <h6>You’re ready to <span>ask</span> a <span>programming-related question</span> and this form will help guide you through the process.</h6>
                    <h6>Looking to ask a non-programming question? See <span>the topics here</span> to find a relevant site.</h6>
                    
                    <p>Steps<br/></p>
                    <li>Summarize your problem in a one-line title.</li>
                    <li>Describe your problem in more detail.</li>
                    <li>Describe what you tried and what you expected to happen.</li>
                    <li>Add “tags” which help surface your question to members of the community.</li>
                    <li>Review your question and post it to the site.</li>
                </div>

                <div  className={styles.title}>
                    <form onSubmit={handleSumbit}>
                        <label htmlFor='ask-title'>
                            <h5>Title</h5>
                            <p>Be specific and imagine you’re asking a question to  another person.</p>
                            <input id='ask-title' type='text' name='title' placeholder='e.g. Is there an R function for finding the index of an element in a vector?'onChange={(e)=> {setQuestionTitle(e.target.value)}}/>
                            <span className='text-error-red text-[10px]'>{questionTitleError}</span>
                        </label>

                        <label htmlFor='ask-body'>   
                            <h5>What are the details of your problem?</h5>
                            <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                            <textarea id='ask-body' name='body' rows={10} onChange={(e)=> {setQuestionBody(e.target.value)}} onKeyDown={handleKeyDown}/>
                            <span className='text-error-red text-[10px]'>{questionBodyError}</span>
                        </label>

                        <label htmlFor='ask-tags'>
                            <h5>Tags</h5>
                            <p>Add up to 5 tags to describe what your question is about. Make sure to provide only one space among tags and no space at end.</p>
                            <input id='ask-tags' type='text' name='tags' onChange={(e)=> {setQuestionTags(e.target.value.split(" "))}}/>
                            <span className='text-error-red text-[10px]'>{questionTagsError}</span>
                        </label>


                        <button className='bg-link-color' type='submit'>Post your question</button>
                    </form>
                </div>
            </div>

            
        </div>
    )
}

export default AskQuestions
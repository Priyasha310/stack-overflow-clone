import React, { useEffect, useState } from 'react'
import styles from './askQuestions.module.scss'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { askQuestionRoute } from 'utils/APIRoutes'

const AskQuestions = () => {

    const [questionTitle, setQuestionTitle] = useState('')
    const [questionBody, setQuestionBody] = useState('')
    const [questionTags, setQuestionTags] = useState([])
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const [currentUserName, setCurrentUserName] = useState(null);
  
    useEffect(() => {
      if (localStorage.getItem('user_data')) {
        const userData = JSON.parse(localStorage.getItem("user_data")||'null')
        console.log("User data found in local storage:", userData);  
      }
      else{
        console.log("User data found in local storage:", currentUser);        
      }
      setIsLoading(false) 
    });

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
    },[]);

    useEffect(()=>{
        if(currentUser){
            setCurrentUserName(currentUser.name);
            console.log("CURRENT USER NAME ",currentUserName);
        }
    },[currentUser, currentUserName])

    const handleSumbit = async (e) => {
        e.preventDefault();
        console.log({questionTitle, questionBody, questionTags});

        const {data} = await axios.post(askQuestionRoute, 
            {questionTitle, questionBody, questionTags, currentUserName},
        );
        if (data.status === true) {
            navigate("/");
        }        

        setQuestionTitle("")
        setQuestionBody('')
        setQuestionTags([])
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" ) {
            e.preventDefault();
            setQuestionBody(questionBody + '\n');
        }
        // if (e.key === "Enter"  && !e.shiftKey) {
        //     e.preventDefault();
        //     setQuestionBody(questionBody + '\n');
        // }
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
                        </label>

                        <label htmlFor='ask-body'>   
                            <h5>What are the details of your problem?</h5>
                            <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                            <input id='ask-body' type='text' name='body' onChange={(e)=> {setQuestionBody(e.target.value)}} onKeyDown={handleKeyDown}/>
                        </label>

                        <label htmlFor='ask-tags'>
                            <h5>Tags</h5>
                            <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
                            <input id='ask-tags' type='text' name='tags' onChange={(e)=> {setQuestionTags(e.target.value.split(" "))}}/>
                        </label>


                        <button className='bg-link-color'type='submit'>Post your question</button>
                    </form>
                </div>
            </div>

            
        </div>
    )
}

export default AskQuestions
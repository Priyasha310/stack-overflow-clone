import React from 'react'
import styles from './askQuestions.module.scss'

const AskQuestions = () => {

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
                    <form>
                        <label htmlFor='ask-title'>
                            <h5>Title</h5>
                            <p>Be specific and imagine you’re asking a question to  another person.</p>
                            <input id='ask-title' type='text' placeholder='e.g. Is there an R function for finding the index of an element in a vector?'/>
                        </label>

                        <label htmlFor='ask-body'>   
                            <h5>What are the details of your problem?</h5>
                            <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                            <input id='ask-body' type='text' />
                        </label>

                        <label htmlFor='ask-tags'>
                            <h5>Tags</h5>
                            <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
                            <input id='ask-tags' type='text' />
                        </label>


                        <button className='bg-link-color'type='submit'>Post your question</button>
                    </form>
                </div>
            </div>

            
        </div>
    )
}

export default AskQuestions
import React from 'react'
import styles from './qGlossary.module.scss'
import { Link } from 'react-router-dom'
import moment from "moment";

const Question = ({question}) => {
  return (
      <>
        <div className={styles.questions} key={question._id}>
          <div className={styles.count}>
            <p>{question.upVotes - question.downVotes} votes</p>
            <p>{question.answer.length} answers</p>
            <p>{question.views} views</p>
          </div>
          <div className={styles.questionTitle}>
            <Link to={`/questions/${question._id}`} >{question.questionTitle}</Link>
            <div className={styles.timeStamp}>
              <div className='flex flex-row'>
              {
                question.questionTags.map((tag)=> (
                  <p className={styles.tag} key={tag}>{tag}</p>
                ))
              }
              </div>
              <p><span className={styles.name}> {question.userPosted} </span>
              asked {moment(question.askedOn).fromNow()}</p>
            </div>
          </div>
          
        </div>
        <hr className='my-3'/>
      </>
  )
}

export default Question
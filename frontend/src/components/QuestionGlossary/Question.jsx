import React from 'react'
import styles from './qGlossary.module.scss'
import { Link } from 'react-router-dom'
import moment from "moment";

const Question = ({question, key}) => {
  return (
      <>
        <div className={styles.questions}>
          <div className={styles.count}>
            <p>{question.upVotes}-{question.downVotes} votes</p>
            <p>{question.noOfAnswers} answers</p>
            <p>{question.views} views</p>
          </div>
          <div className={styles.questionTitle}>
            <Link to={`/questions/${question.id}`} className=''>{question.questionTitle}</Link>
            <div className={styles.timeStamp}>
              <div className='flex flex-row'>
              {
                question.qTags.map((tag)=> (
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
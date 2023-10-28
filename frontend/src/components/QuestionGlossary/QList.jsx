import React from 'react'
import Question from './Question'

const QuestionList = ({questionsList}) => {
  return (
    <div>
      {questionsList.map((question) => (
        <Question question={question} key={question.id}/>
      ))}
    </div>
  )
}

export default QuestionList
import React from 'react'
import { useParams } from 'react-router-dom'

const QuestionDetails = () => {

    const {id} = useParams();
    var questionsList = [
    {
        _id:1,
        userId:1,
        upVotes:2,
        downVotes: 3,
        noOfAnswers:2,
        questionTitle: "How to /convert unicode text to readable text",
        qBody: "",
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
        <div>
            {questionsList === null?(
            <h1>d</h1>
            ):(
            <>
                {
                    questionsList.filter(question => question._id == id).map(question => (
                        <div key={question._id}>
                            <section>

                                <h1>{question.questionTitle}</h1>
                                {/* <h1>{question._id}</h1>
                                <h1>{id}</h1> */}
                            </section>
                        </div>
                    ))
                }
            </>
            )}
        </div>
    )
}

export default QuestionDetails
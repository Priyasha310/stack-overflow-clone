import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from 'pages/Questions/Questions'
import AskQuestions from 'pages/AskQuestions/AskQuestions'
import DisplayQuestion from 'pages/Questions/DisplayQuestion'
import Tags from 'pages/Tags/Tags'
import Users from 'pages/Users/Users'
import Companies from 'pages/Companies/Companies'

const RoutesComponent = () => {

  return (
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/auth' element={<Auth/>} />
          <Route path='/questions' element={<Questions/>} />
          <Route path='/tags' element={<Tags/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/companies' element={<Companies/>} />
          <Route path='/questions/:id' element={<DisplayQuestion/>} />
          <Route path='/questions/ask' element={<AskQuestions/>} />
          {/* <Route path='/discussions' element={<Companies/>} /> */}
      </Routes>
  )
}

export default RoutesComponent
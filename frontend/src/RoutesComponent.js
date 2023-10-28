import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import WidgetTags from 'components/RightSideBar/WidgetTags'
import Questions from 'pages/Questions/Questions'

const RoutesComponent = () => {

  return (
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Auth' element={<Auth/>} />
          <Route path='/Questions' element={<Questions/>} />
          <Route path='/Tags' element={<WidgetTags/>} />
          {/* <Route path='/Users' element={<Users/>} /> */}
      </Routes>
  )
}

export default RoutesComponent
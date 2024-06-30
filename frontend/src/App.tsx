import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import React from 'react'
import Landing from './Screens/Landing'
import { Game } from './Screens/Game'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/game' element={<Game/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
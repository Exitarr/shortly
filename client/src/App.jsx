import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element = {<Home />} />
          <Route path="/"  element = {<Signup />}/>
          <Route path="/login" element = {<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

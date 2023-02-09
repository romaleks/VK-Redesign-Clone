import Home from './pages/home/Home'
import Signup from './pages/auth/Signup'
import Signin from './pages/auth/Signin'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/signin' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </Router>
  )
}

export default App

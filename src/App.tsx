import './App.css'
import {Route,Routes,Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Conversation from './pages/Conversation'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/conversation/:id' element={<Conversation/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App

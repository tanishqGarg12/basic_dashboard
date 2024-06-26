import { useState } from 'react'
import Login from './Login'
import Logout from './Logout'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Logout />} />
      <Route path="/login" element={<Login />} />

    </Routes>
    </>
  )
}

export default App


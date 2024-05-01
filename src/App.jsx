import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"

////Components
import Navbar from './components/Navbar'

////Pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Tecnologias from './pages/Tecnologias'

function App() {

  return (
      <div>

      <BrowserRouter>
      
        <Routes>
          
        <Route path='/' element={<Home/>}></Route>

        <Route path='/about' element={<About/>}></Route>

        <Route path='/tecnologia' element={<Tecnologias/>}></Route>

        <Route path='*' element={<NotFound/>}></Route>

        </Routes>

      </BrowserRouter>

      </div>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StarshipsComponent from './components/StarshipsComponent.jsx'
import StarshipCardComponent from './components/StarshipCardComponent.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/starships' element={<StarshipsComponent />} />
        {/* <Route path='/starships' element={localStorage.getItem ('user') ?<StarshipsComponent /> : <Login />} /> */}
        <Route path='/starships/:shipId' element={<StarshipCardComponent />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

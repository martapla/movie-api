import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StarshipsComponent from './components/StarshipsComponent.jsx'
import StarshipCardComponent from './components/StarshipCardComponent.jsx'
import Home from './components/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/starships' element={<StarshipsComponent />} />
        <Route path='/starships/:shipId' element={<StarshipCardComponent />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

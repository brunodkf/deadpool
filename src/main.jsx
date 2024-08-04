import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Deadpool from './pages/Deadpool';
import Wolverine from './pages/Wolverine'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='deadpool' element={<Deadpool />} />
          <Route path='wolverine' element={<Wolverine />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

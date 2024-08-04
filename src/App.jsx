import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import Container from './components/Container'


import Logo from './../public/logo.png'
import Marvel from './../public/marvel_logo.png'

import './App.scss'
import { Socials } from './components/Socials'


function App() {
  return (
    <div className="App">
      <Container>
        <div className="header">
          <img className='header__img' src={Logo} alt="Logo Deadpool" />
          <a className='header__btn' href="#">Ingressos</a>
        </div>



        <Navbar />

        <div className="footer">
            <div className="footer__trailer"></div>
            <div className="footer__links">
              <img src={Marvel} alt="Logo Marvel" />
              <Socials/>
            </div>
        </div>
      </Container>

      <Outlet />
    </div>
  )
}

export default App

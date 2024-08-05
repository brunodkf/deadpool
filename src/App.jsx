import { Outlet } from 'react-router'
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaRegCirclePlay } from "react-icons/fa6";
import { Socials } from './components/Socials'
import Navbar from './components/Navbar'
import Container from './components/Container'

import Logo from '/logo.png'
import Marvel from '/marvel_logo.png'

import './App.scss'





function App() {

  const [trailer, setTrailer] = useState('')
  const location = useLocation();

  useEffect(() => {
    if (location.pathname != '/') {
      setTrailer('footer__notTrailer')
    } else {
      setTrailer('')
    }
  }, [location]);

  return (
    <div className="App">
      <Container>
        <div className="header">
          <img className='header__img' src={Logo} alt="Logo Deadpool" />
          <a className='header__btn' href="#">Ingressos</a>
        </div>

        <Navbar page={location.pathname}/>

        <div className={`footer ${trailer}`}>
          <div className={`footer__trailer`}>
            <FaRegCirclePlay />
          </div>

          <div className="footer__links">
            <img src={Marvel} alt="Logo Marvel" />
            <Socials />
          </div>
        </div>
      </Container>

      <Outlet />
    </div>
  )
}

export default App

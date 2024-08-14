import { Outlet } from 'react-router'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaRegCirclePlay } from "react-icons/fa6";
import { Socials } from './components/Socials'
import Navbar from './components/Navbar'
import Container from './components/Container'
import Modal from './components/Modal';

import Logo from '/logo.png'
import Marvel from '/marvel_logo.png'

import './App.scss'

const apiKey = import.meta.env.VITE_API_KEY;
const movieURL = import.meta.env.VITE_API; //informações do filme
const movieVideos = import.meta.env.VITE_API_VIDEOS;

function App() {

  const [cardTrailer, setCardTrailer] = useState('') //Controla se o card de trailer aparece ou não na página
  const location = useLocation();
  useEffect(() => {
    if (location.pathname != '/') {
      setCardTrailer('footer__notTrailer')
    } else {
      setCardTrailer('')
    }
  }, [location]);


  const [trailer, setTrailer] = useState([]) // Controla a chamada da API

  useEffect(() => {
    fetch(`${movieVideos}${apiKey}`)
      .then(resposta => resposta.json())
      .then(dados => setTrailer(dados))
  }, [])


  const [openModal, setOpenModal] = useState(false); //Controla o estado do Modal
  function closeModal(){
    setOpenModal(false);
  }

  return (
    <div className="App">
      <Container>
        <div className="header">
          <img className='header__img' src={Logo} alt="Logo Deadpool" />
          <a className='header__btn' target='_blank' href="https://www.ingresso.com/filme/deadpool-e-wolverine">Ingressos</a>
        </div>

        <Navbar isOpen={openModal}/>

        <div className={`footer ${cardTrailer}`}>
          <div className={`footer__trailer`} onClick={() => setOpenModal(true)}>
            <FaRegCirclePlay />
          </div>

          <div className="footer__links">
            <img src={Marvel} alt="Logo Marvel" />
            <Socials />
          </div>
        </div>
      </Container>

      <Modal isOpen={openModal} trailer={trailer} closeModal={closeModal}/>

      <Outlet />
    </div>
  )
}

export default App

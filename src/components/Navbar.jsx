import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import { IoMdVolumeHigh } from "react-icons/io";
import { IoMdVolumeOff } from "react-icons/io";

import Som from '/song.mp3'
import './style.scss';



const Navbar = ({ isOpen }) => {

    const music = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);

    const [wolv, setWolv] = useState('');

    const mostra = () => {
        setIsPlaying(true)
        music.current.audioEl.current.play();
    }
    const esconde = () => {
        setIsPlaying(false)
        music.current.audioEl.current.pause();
    }

    useEffect(() => {
        setIsPlaying(false)
        music.current.audioEl.current.pause();
    }, [isOpen])


    const linksMenu = document.querySelectorAll('.navbar__item')
    function buscaClasse(e) {
        linksMenu.forEach( item => item.classList.contains('navbar__decoration') ? item.classList.remove('navbar__decoration') : null);
        e.target.parentElement.classList.add('navbar__decoration');
    }

    return (
        <nav className='navbar'>

            <span onClick={isPlaying ? esconde : mostra}>

                {isPlaying ? <IoMdVolumeHigh /> : <IoMdVolumeOff />}

                <ReactAudioPlayer
                    ref={music}
                    src={Som}
                    style={{ display: 'none' }}
                />
            </span>

            <ul className='navbar__list'>
                <li className='navbar__item'>
                    <Link to={'/'} onClick={buscaClasse}>
                        Início
                    </Link>
                </li>
                <li className='navbar__item' >
                    <Link to={'/deadpool'} onClick={buscaClasse}>
                        Deadpool
                    </Link>
                </li>
                <li className='navbar__item' >
                    <Link to={'/wolverine'} onClick={buscaClasse}>
                        Wolverine
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
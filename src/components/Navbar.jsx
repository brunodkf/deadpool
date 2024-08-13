import { Link } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import { IoMdVolumeHigh } from "react-icons/io";
import { IoMdVolumeOff } from "react-icons/io";

import Som from './../assets/song.mp3'
import './style.scss';
import { useRef, useState, useEffect } from 'react';


const Navbar = ({isOpen}) => {

    const music = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);

    const mostra = ()=>{
        setIsPlaying(true)
        music.current.audioEl.current.play();
    }
    const esconde = () =>{
        setIsPlaying(false)
        music.current.audioEl.current.pause();
    }

    useEffect(()=>{
        setIsPlaying(false)
        music.current.audioEl.current.pause();
    }, [isOpen])


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
                <li className='navbar__item  navbar__decoration'>
                    <Link to={'/'}>
                        Início
                    </Link>
                </li>
                <li className='navbar__item'>
                    <Link to={'/deadpool'}>
                        Deadpool
                    </Link>
                </li>
                <li className='navbar__item'>
                    <Link to={'/wolverine'}>
                        Wolverine
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
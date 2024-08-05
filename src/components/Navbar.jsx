import { Link } from 'react-router-dom';
import { IoMdVolumeHigh } from "react-icons/io";
import './style.scss';


const Navbar = () => {
    return (
        <nav className='navbar'>

            <span>
                <IoMdVolumeHigh />
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
import { Link } from 'react-router-dom';
import './style.scss';


const Navbar = () => {
    return (
        <nav className='navbar'>
            
            <span></span>

            <ul className='navbar__list'>
                <li className='navbar__item'>
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
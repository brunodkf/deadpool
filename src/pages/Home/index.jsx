import Hero from './assets/wolvPool.png';

import './style.scss'
export default function Home() {
    return (
        <div className="home page">
            <div className="home__content">
                <img src={Hero} alt="" />
            </div>
        </div>
    )
}
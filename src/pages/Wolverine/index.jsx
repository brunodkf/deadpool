import Hero from './assets/logan.webp'
import HeroMobile from './assets/wolvMobile.webp'
import './style.scss';


export default function Wolverine() {
    return (
        <div className="wolverine page">
            <div className="wolverine__content container">
                <div className="wolverine__content__hero">
                    <picture>
                        <source media="(max-width: 768px )" srcset={HeroMobile} type="image/webp" />
                        <img src={Hero} alt="Wolverine" />
                    </picture>
                </div>
                <div className="wolverine__content__text">
                    <h1>WOLVERINE</h1>

                    <p><b>James Howlett</b></p>

                    <p>"Eu sou Wolverine. Sou o melhor no que faço, mas o que faço melhor não é nada agradável." - Logan</p>

                    <p>Amaldiçoado com uma fúria berserker, o violento mutante conhecido como Wolverine tem a reputação tanto de um super-herói excepcional quanto de um assassino letal.</p>

                </div>

            </div>
        </div>
    )
}
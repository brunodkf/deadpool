import Hero from './assets/hero.webp';
import HeroMobile from './assets/deadMobile.webp'
import HeroTab from './assets/deadpoolTAB.webp'
import './style.scss';


export default function Deadpool() {
    return (
        <div className="deadpool page">
            <div className="deadpool__content container">
                <div className="deadpool__content__text">
                    <h1>DEADPOOL</h1>

                    <p> <b>Wade Wilson</b>, é isso ai, letras iguais...</p>
                    <p>Peter Parker, Bruce Banner, Matt Murdock, SIM SABICHÃO, mas não vamos focar nisso, continuando..</p>

                    <p>Tudo começou quando uma aranha radioativa me picou e me deu poderes de aranha, assim eu me tornei o amigo da vizinhança o Deadpool.</p>

                    <p>Precisa de mais? Você me conhece já, olha o site, dá uma volta. Tem até musiquinha...</p>
                </div>
                <div className="deadpool__content__hero">
                    <picture>
                        <source media="(max-width: 500px )" srcset={HeroMobile} type="image/webp" />
                        <source media="(min-width: 500px ) and (max-width: 768px)" srcset={HeroTab} type="image/webp" />
                        <img src={Hero} alt="Deadpool" />
                    </picture>
                </div>
            </div>
        </div>
    )
}
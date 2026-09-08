import './Landing.css';
import girl from './girl.png'

function Landing() {
    return (
        <section className='landing'>
            <div className="landing__container">
                <div className="landing__content">
                    <h1 className="landing__title">ROBO SCHOOL</h1>

                    <p className="landing__description">
                        Курсы повышения квалификации по робототехнике для педагогов начальной школы
                    </p>
                    <div className="landing__nav">
                        <a href="#">Записаться на курс</a>
                    </div>
                </div>

                <div className="landing__image"><img src={girl} alt="" /></div>
            </div>
        </section>
    )
}

export default Landing;
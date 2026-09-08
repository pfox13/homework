import './Coaches.css';
import irina from './irina.png';
import marina from './marina.png';
import maxim from './maxim.png'

function Coaches() {
    return (
        <section className='coaches'>
            <div className="coaches__container">

                <div className="coaches__container-title">
                    <h2>Профессиональные тренеры</h2>
                </div>

                <div className="coaches__container-block">
                    <div className="coaches__card">
                        <div className="coaches__card-image">
                            <img src={irina} alt="" />
                        </div>
                        <div className="coaches__card-info">
                            <h3>Ирина Лайм</h3>
                            <p>преподаватель по робототехнике</p>
                            <a href="#">Подробнее</a>
                        </div>
                    </div>

                    <div className="coaches__card">
                        <div className="coaches__card-image">
                            <img src={marina} alt="" />
                        </div>
                        <div className="coaches__card-info">
                            <h3>Марина Орлова</h3>
                            <p>преподаватель по робототехнике</p>
                            <a href="#">Подробнее</a>
                        </div>
                    </div>

                    <div className="coaches__card">
                        <div className="coaches__card-image">
                            <img src={maxim} alt="" />
                        </div>
                        <div className="coaches__card-info">
                            <h3>Максим Петров</h3>
                            <p>преподаватель по программированию</p>
                            <a href="#">Подробнее</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Coaches
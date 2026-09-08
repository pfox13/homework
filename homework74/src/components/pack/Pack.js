import './Pack.css';

function Pack() {
    return (
        <section className="pack">
            <div className="pack__container">
                <div className="pack__container-title">
                    <h2>Выберите нужный пакет</h2>
                </div>

                <div className="pack__container-block">
                    <div className="pack__block-card">
                        <h3>PRO</h3>
                        <div className="block__card-price">20.000 ₽</div>
                        <p>УМК по робототетхнике и программированию</p>
                        <a href="#">Оставить заявку</a>
                    </div>

                    <div className="pack__block-card">
                        <h3>ROBO</h3>
                        <div className="block__card-price">15.000 ₽</div>
                        <p>УМК по робототетхнике</p>
                        <a href="#">Оставить заявку</a>
                    </div>

                    <div className="pack__block-card">
                        <h3>PROG</h3>
                        <div className="block__card-price">10.000 ₽</div>
                        <p>УМК по программированию</p>
                        <a href="#">Оставить заявку</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pack
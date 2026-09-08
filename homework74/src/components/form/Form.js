import './Form.css';

function Form() {
    return (
        <section className="form">
            <div className="form__container">

                <div className="form__content">
                    <h2>Запишитесь на курс со скидкой 10%</h2>
                    <p>Акция действительна до 10 марта 2022 года</p>
                </div>

                <div className="form__form">
                    <form action="" method="post">
                        <input
                            className="form__input"
                            type="text"
                            name="name"
                            placeholder="Имя"
                            required
                        />
                        <input
                            className="form__input"
                            type="tel"
                            name="phone"
                            placeholder="Телефон"
                            required
                        />
                        <input
                            className="form__input"
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            required
                        />
                        <button className="form__button" type="submit">
                            Оформить заявку
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Form
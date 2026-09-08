import './Information.css';

function Information(){
    return (
        <section className='information'>
            <div className="container__information">

                <div className="content__information">
                    <p><span>Robo School</span> – учреждение для формирования кадрового педагогического резерва в сфере робототехникии программирования</p>
                </div>

                <div className="content__info">
                    <div className='content__info-block'>
                        <h2>10</h2>
                        <p>УМК по различным направлениям по робототехнике</p>
                    </div>
                    <div className='content__info-block'>
                        <h2>20</h2>
                        <p>Школ, в которых запущена робототехника</p>
                    </div>
                    <div className='content__info-block'>
                        <h2>100</h2>
                        <p>Педагогов прошедших курсы повышения квалификации</p>
                    </div>
                    <div className='content__info-block'>
                        <h2>10 000</h2>
                        <p>Обученных детей на базе собственных центров</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Information;
import './CourseBenefits.css';

function CourseBenefits() {
    return (
        <section className='course-benefits'>

            <div className="course-benefits__container">

                <div className="course-benefits__content-title">
                    <h2>Что вы получите после курса</h2>
                </div>

                <div className="course-benefits__content-block">
                    <div className="course-benefits__block-info">
                        <h3>Удостоверение</h3>
                        <p>Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях</p>
                    </div>
                    <div className="course-benefits__block-info">
                        <h3>Знания</h3>
                        <p>По основам разработки учебно-методических комплексов
                            по робототехнике и программированию</p>
                    </div>
                    <div className="course-benefits__block-info">
                        <h3>Практику</h3>
                        <p>Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default CourseBenefits;

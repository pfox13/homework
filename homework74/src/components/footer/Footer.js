import './Footer.css';
import logo from './logo.svg'

function Footer() {
    return (
        <footer>
            <div className="footer__left">
                <img src={logo} alt="logo" className="header__logo" />
                <p>© ROBO.SCHOOL</p>
            </div>

            <div className="footer__right">
                <a href="#" className="header__phone">+7 800 000 11 22</a>
            </div>

        </footer>
    )
}

export default Footer
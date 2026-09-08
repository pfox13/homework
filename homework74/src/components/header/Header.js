import "./Header.css";
import logo from './logo.svg';

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" className="header__logo" />

            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li><a href="#" className="header__nav-link">О школе</a></li>
                    <li><a href="#" className="header__nav-link">Тренеры</a></li>
                    <li><a href="#" className="header__nav-link">Стоимость</a></li>
                </ul>
            </nav>

            <a href="#" className="header__phone">+7 800 000 11 22</a>
        </header >
    )
}

export default Header;
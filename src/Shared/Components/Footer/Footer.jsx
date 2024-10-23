
import logo from '../../Images/logo.svg';
import { Link } from 'react-router-dom';
import './styles/footer.scss'
import logo1 from '../../Images/logo.svg';
import logo2 from '../../Images/logo.svg';
import logo3 from '../../Images/logo.svg';
import logo4 from '../../Images/logo.svg'



const Footer = () => {

    return (
        <div className="container container-f">
            <footer className='footer'>
                <div className="footer-container">
                    <div className="logo">
                        <img src={logo} alt="Logo" className="logo-img" />
                    </div>
                    <div className="footer-nav">
                        <h1 className='nav-h1'>Навигация</h1>
                        <nav className="footer__nav">
                            <ul>
                                <li><Link className='nav' to="/">Главная</Link></li>
                                <li><Link className='nav' to="/community">О Сообществе</Link></li>
                                <li><Link className='nav' to="/nav3">Мероприятие</Link></li>
                                <li><Link className='nav' to="/nav4">Членство</Link></li>
                                <li><Link className='nav' to="/nav5">Образование и сертификаты</Link></li>
                                <li><Link className='nav' to="/nav6">Вакансии и заказы</Link></li>
                                <li><Link className='nav' to="/ambassadorship">Амбассадорство</Link></li>
                                <li><Link className='nav' to="/nav8">Участие и волонтерство</Link></li>
                                <li><Link className='nav' to="/contact">Контакты</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer-col">
                        <h1>Контакты</h1>
                        <a href="tel:+996559044072">+996 559 044 072</a>
                        <a href="mailto:example@example.com">saske8182@gmail.com</a>
                        <div className="footer-col-logo">
                            <img className='logo-footer-col' src={logo1} alt="r" />
                            <img className='logo-footer-col' src={logo2} alt="rr" />
                            <img className='logo-footer-col' src={logo3} alt="rrr" />
                            <img className='logo-footer-col' src={logo4} alt="rrrr" />
                        </div>
                    </div>
                </div>
                <hr />

            </footer>
            
        </div>
    );
}

export default Footer;

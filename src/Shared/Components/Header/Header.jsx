import "./Header.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../Images/logo.svg";

function Header() {
  return (
    <div className="Header">
      <div className="Header-topline">
        <div className="Header-topline__logo">
          <img src={Logo} />
        </div>
        <div className="Header-topline__options">
          <div className="Header-topline__options-btn">Свяжитесь с нами</div>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Главное
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/community"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              О сообществе
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Мероприятие
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/memdership"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Членство
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/education"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Образование и сертификаты
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Услуги
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ambassadorship"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Амбассадорство
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/participation"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Участие и волонтерство
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contats"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;


import '../Header/Header.css'
import 'feather-icons/dist/feather';
import feather from 'feather-icons';

feather.replace();


export default function Header() {
    return (
      <div className="header">
      <div className="header__logo">
        <strong>LOGO</strong>
      </div>
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="home" />
              <span>Home</span>{" "}
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="target" />
              <span>Catalog</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="user" />
              <span>Profile</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="log-in" />
              <span>Login</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="user-plus" />
              <span>Register</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="log-out" />
              <span>Logout</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="file-plus" />
              <span>Create</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    
    )
}

import '../Header/Header.css'

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
              <i data-feather="message-square" />
              <span>Messages</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="users" />
              <span>Customers</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="folder" />
              <span>Projects</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="archive" />
              <span>Resources</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="help-circle" />
              <span>Help</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="settings" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    
    )
}
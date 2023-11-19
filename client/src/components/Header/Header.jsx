
import '../Header/Header.css'
import 'feather-icons/dist/feather';
import feather from 'feather-icons';
import{Link} from 'react-router-dom';


feather.replace();


export default function Header() {

  const logoutHandler = (e) => {
    e.preventDefault();
    console.log('logout');
  }
    return (
      <div className="header">
      <div className="header__logo">
        <strong>LOGO</strong>
      </div>
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link to="/" className="navbar__link">
              <i data-feather="home" />
              <span>Home</span>{" "}
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/catalog" className="navbar__link">
              <i data-feather="target" />
              <span>Catalog</span>
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/profile" className="navbar__link">
              <i data-feather="user" />
              <span>Profile</span>
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/login" className="navbar__link">
              <i data-feather="log-in" />
              <span>Login</span>
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/register" className="navbar__link">
              <i data-feather="user-plus" />
              <span>Register</span>
            </Link>
          </li>
          <li className="navbar__item">
            <a onClick={logoutHandler} className="navbar__link">
              <i data-feather="log-out" />
              <span>Logout</span>
            </a>
          </li>
          <li className="navbar__item">
            <Link to="/create" className="navbar__link">
              <i data-feather="file-plus" />
              <span>Add</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    
    )
}
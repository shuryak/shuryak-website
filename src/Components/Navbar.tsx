import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import '../scss/navbar.scss';
import logo from './logo.png';

export const Navbar: React.FunctionComponent = () => {
  const history = useHistory();
  const [showExtraMenu, setShowExtraMenu] = useState<boolean>(true);
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const handleScroll = () => {
    setIsScroll(pageYOffset > 20);
  }

  const logoutHandler = () => {
    localStorage.clear();
    location.replace('/')
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    if (document.documentElement.clientWidth < 600) {
      setShowExtraMenu(false);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScroll && showExtraMenu? 'header-wrapper minimize' : 'header-wrapper'}>
      <nav className="nav-wrapper">
        <img src={logo} alt="shuryak logo" onClick={() => {history.push('/')}}/>

        <ul className="nav-menu">
          {showExtraMenu &&
            <li><NavLink to="/">Главная</NavLink></li>
          }
          <li><NavLink to="/articles">Статьи</NavLink></li>
          <li><NavLink to="/donation">Донат :з</NavLink></li>
        </ul>

        <ul className="extra-nav-menu">
          <li>
            {localStorage.getItem('access_token') !== null && showExtraMenu &&
              <NavLink to="/editor" className="editor-button">
                Открыть редактор
              </NavLink>
            }
          </li>
          <li>
            {localStorage.getItem('access_token') !== null && showExtraMenu &&
              <a className="logout" onClick={logoutHandler}>
                Выйти
              </a>
            }
          </li>
        </ul>
      </nav>
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../scss/navbar.scss';
import logo from './logo.png';

export const Navbar: React.FunctionComponent = () => {
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

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScroll ? 'header-wrapper minimize' : 'header-wrapper'}>
      <nav className="nav-wrapper">
        <img src={logo} alt="shuryak logo"/>

        <ul className="nav-menu">
          <li><NavLink to="/">Главная</NavLink></li>
          <li><NavLink to="/articles">Статьи</NavLink></li>
          <li><NavLink to="/donation">Донат :з</NavLink></li>
        </ul>

        <ul className="extra-nav-menu">
          <li>
            <NavLink to="/editor"
              className={'editor-button ' + (localStorage.getItem('access_token') !== null ? '' : 'hide')}
            >
            Открыть редактор
            </NavLink>
          </li>
          <li>
            <a
              className={'logout ' + (localStorage.getItem('access_token') !== null ? '' : 'hide')}
              onClick={logoutHandler}
            >
              Выйти
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/navbar.scss';
import logo from './logo.png';

export const Navbar: React.FunctionComponent = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const handleScroll = () => {
    setIsScroll(pageYOffset > 20);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScroll ? 'header-wrapper minimize' : 'header-wrapper'}> {/* .header class 100% */}
      <nav className="nav-wrapper">
        <img src={logo} alt="shuryak logo"/>
        <ul className="nav-menu">
          <li><NavLink to="/">Главная</NavLink></li>
          <li><NavLink to="/articles">Статьи</NavLink></li>
          <li><NavLink to="/">Донат :з</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

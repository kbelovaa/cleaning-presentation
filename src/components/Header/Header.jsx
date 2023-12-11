import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Header.scss';

const Header = () => (
  <div className="content">
    <header className="header-section">
      <div className="container">
        <div className="header">
          <h1 className="header__title">Servicio de limpieza</h1>
          <div className="burger">
            <div className="burger__bar"></div>
            <div className="burger__bar"></div>
            <div className="burger__bar"></div>
          </div>
        </div>
      </div>
    </header>
    <Outlet />
    <Footer />
  </div>
);

export default Header;

import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Header.scss';

const Header = () => {
  const [isLanguageOpened, setIsLanguageOpened] = useState(false);

  const { i18n } = useTranslation();
  const { language } = i18n;
  const availableLanguages = Object.keys(i18n.options.resources);

  const lngRef = useRef(null);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isSurvey = pathname === '/survey';

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (lngRef.current && !lngRef.current.contains(e.target)) {
        setIsLanguageOpened(false);
      }
    };

    if (isLanguageOpened) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageOpened]);

  const openLanguages = () => {
    setIsLanguageOpened((state) => !state);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    document.documentElement.lang = lng;
    setIsLanguageOpened(false);
  };

  return (
    <div className="content">
      <header className="header-section">
        <div className="container">
          <div className="header">
            <span className={`header__label ${isSurvey ? '' : 'header__label_hidden'}`} onClick={() => navigate('/')}>
              Sdl
            </span>
            <nav className="header__nav">
              <div className={`language ${isLanguageOpened ? 'opened' : ''}`} ref={lngRef}>
                <div className="language__selected" onClick={openLanguages}>
                  <span className="language__value">{language}</span>
                  <svg
                    className="language__arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.716265 3.83318C0.314979 4.25521 0.314979 4.91773 0.716265 5.33976L8 13L15.2837 5.33976C15.685 4.91773 15.685 4.25521 15.2837 3.83318C14.8528 3.37997 14.1302 3.37997 13.6993 3.83318L8 9.82706L2.30072 3.83318C1.86979 3.37998 1.14719 3.37998 0.716265 3.83318Z"
                      fill="#B0B0B0"
                    />
                  </svg>
                </div>
                <div className="language__variants">
                  {availableLanguages.map((elem, index) => (
                    <span
                      key={index}
                      className={`language__value ${elem !== language ? 'not-selected' : ''}`}
                      onClick={() => changeLanguage(elem)}
                    >
                      {elem}
                    </span>
                  ))}
                </div>
              </div>
              <div className="burger">
                <div className="burger__bar"></div>
                <div className="burger__bar"></div>
                <div className="burger__bar"></div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Header;

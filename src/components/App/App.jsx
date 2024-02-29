import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { setIpCountryAction } from '../../store/actions/userActions';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Survey from '../Survey/Survey';
import '../../utils/i18n';
import './App.scss';

const App = () => {
  const { i18n } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    const getCountryFromIP = async () => {
      try {
        const response = await axios.get('https://ipinfo.io/json?token=353f74029ca066');
        const countryCode = response.data.country;
        dispatch(setIpCountryAction(countryCode.toLowerCase()));

        return countryCode.toLowerCase();
      } catch {
        dispatch(setIpCountryAction(''));
      }
    };

    getCountryFromIP();

    const storedLanguage = localStorage.getItem('language');

    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
      document.documentElement.lang = storedLanguage;
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="survey" element={<Survey />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

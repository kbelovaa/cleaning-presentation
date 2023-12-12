import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ConfirmationModal.scss';

const ConfirmationModal = ({ isOpen, setIsOpen, email, setEmail }) => {
  const modalRef = useRef(null);

  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
        setEmail('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleButtonClick = () => {
    setIsOpen(false);
    navigate('/');
    setEmail('');
  };

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`}>
      <div className="confirmation" ref={modalRef}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M5 16.25L11.25 22.5L25 8.75" stroke="#268664" strokeLinecap="round" />
        </svg>
        <h3 className="confirmation__title">{t('thaksForMessage')}</h3>
        <p className="confirmation__text">{t('reply')}</p>
        <span className="confirmation__email">{email}</span>
        <button className="confirmation__btn btn btn_solid" onClick={handleButtonClick}>
          {t('ok')}
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;

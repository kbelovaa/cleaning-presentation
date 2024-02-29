import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ConfirmationModal.scss';

const ConfirmationModal = ({ isOpen, setIsOpen }) => {
  const modalRef = useRef(null);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleCloseConfirmation = () => {
    setIsOpen(false);
    navigate('/');
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseConfirmation();
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

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`}>
      <div className="confirmation" ref={modalRef}>
        <div className="confirmation__close" onClick={handleCloseConfirmation}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path d="M23.5425 23.5424L8.45758 8.45746" stroke="#268664" strokeLinecap="round" />
            <path d="M23.5424 8.45746L8.45747 23.5424" stroke="#268664" strokeLinecap="round" />
          </svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M5 16.25L11.25 22.5L25 8.75" stroke="#268664" strokeLinecap="round" />
        </svg>
        <h3 className="confirmation__title">{t('youAreInWaitingList')}</h3>
        <p className="confirmation__text">{t('infoWillBySent')}</p>
        <button className="confirmation__btn btn btn_solid" onClick={handleCloseConfirmation}>
          {t('ok')}
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;

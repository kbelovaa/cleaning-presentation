import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import requestImg from '../../images/request_img.png';
import notificationImg from '../../images/notification_img.png';
import responseImg from '../../images/response_img.png';
import paymentImg from '../../images/payment_img.png';
import './Main.scss';

const Main = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [mobile, setMobile] = useState('');
  const [isMobileValid, setIsMobileValid] = useState(true);
  const [text, setText] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);

  const contactUsRef = useRef(null);

  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const handleScroll = (ref) => {
    const element = ref.current;

    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleEmailChange = (email) => {
    setEmail(email);

    const isEmailValid = email === '' || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email);
    setIsEmailValid(isEmailValid);
  };

  const handleMobileChange = (mobile) => {
    setMobile(mobile);

    const digitsOnly = mobile.replace(/\D/g, '');
    const isMobileValid = mobile === '' || (/^[\d+ -]+$/.test(mobile) && digitsOnly.length >= 7);
    setIsMobileValid(isMobileValid);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!name || !surname || !email || !isEmailValid || !mobile || !isMobileValid || !text) {
      setIsFormValid(false);
    }
  };

  return (
    <div className="main">
      <section className="description-section">
        <div className="container">
          <div className="description">
            <h2 className={`title description__title ${language}`}>{t('welcome')}</h2>
            <p className="description__text">{t('about')}</p>
            <button className="btn" onClick={() => handleScroll(contactUsRef)}>
              {t('contact')}
            </button>
          </div>
        </div>
      </section>
      <section className="system-section">
        <div className="system">
          <h2 className="title system__title">{t('howItWorks')}</h2>
          <div className="system__stages">
            <div className="system__stage">
              <h3 className="system__subtitle">1. {t('request')}</h3>
              <p className="system__text">{t('requestDescription')}</p>
              <img className="system__img" src={requestImg} alt="Request screen" />
            </div>
            <div className="system__stage">
              <h3 className="system__subtitle">2. {t('notification')}</h3>
              <p className="system__text">{t('notificationDescription')}</p>
              <img className="system__img" src={notificationImg} alt="Notification screen" />
            </div>
            <div className="system__stage">
              <h3 className="system__subtitle">3. {t('response')}</h3>
              <p className="system__text">{t('responseDescription')}</p>
              <img className="system__img" src={responseImg} alt="Response screen" />
            </div>
            <div className="system__stage">
              <h3 className="system__subtitle">4. {t('instantPayments')}</h3>
              <p className="system__text">{t('instantPaymentsDescription')}</p>
              <img className="system__img" src={paymentImg} alt="Payment screen" />
            </div>
          </div>
        </div>
      </section>
      <section className="join-section">
        <div className="container">
          <div className="join">
            <h2 className="title">{t('whyJoinUs')}</h2>
            <div className={`join__reasons ${language}`}>
              <div className="join__reason">
                <h4 className="join__subtitle">{t('flexible')}</h4>
                <p className="join__text">{t('flexibleDescription')}</p>
              </div>
              <div className="join__reason">
                <h4 className="join__subtitle">{t('technology')}</h4>
                <p className="join__text">{t('technologyDescription')}</p>
              </div>
              <div className="join__reason">
                <h4 className="join__subtitle">{t('payment')}</h4>
                <p className="join__text">{t('paymentDescription')}</p>
              </div>
              <div className="join__reason">
                <h4 className="join__subtitle">{t('potential')}</h4>
                <p className="join__text">{t('potentialDescription')}</p>
              </div>
              <div className="join__reason">
                <h4 className="join__subtitle">{t('referrals')}</h4>
                <p className="join__text">{t('referralsDescription')}</p>
              </div>
              <div className="join__reason">
                <h4 className="join__subtitle">{t('complianceAndSecurity')}</h4>
                <p className="join__text">{t('complianceAndSecurityDescription')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="background"></div>
      </section>
      <section className="contact-us-section" ref={contactUsRef}>
        <div className="container">
          <div className="contact-us">
            <h2 className="title contact-us__title">{t('joinUs')}</h2>
            <form className={`form ${isFormValid ? 'valid' : 'invalid'}`} onSubmit={handleFormSubmit}>
              <div className="form__fields">
                <div className="form__field-wrap">
                  <label htmlFor="name" className="form__label">
                    {t('name')}
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`input ${!name ? 'invalid-field' : ''}`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="off"
                  />
                </div>
                <div className="form__field-wrap">
                  <label htmlFor="surname" className="form__label">
                    {t('surname')}
                  </label>
                  <input
                    id="surname"
                    type="text"
                    className={`input ${!surname ? 'invalid-field' : ''}`}
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    autoComplete="off"
                  />
                </div>
                <div className="form__field-wrap">
                  <label htmlFor="email" className="form__label">
                    {t('emailAddress')}
                  </label>
                  <input
                    id="email"
                    type="text"
                    className={`input ${!email || !isEmailValid ? 'invalid-field' : ''}`}
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    autoComplete="off"
                  />
                  <p className={isEmailValid ? 'hidden' : 'form__note'}>{t('enterValidEmail')}</p>
                </div>
                <div className="form__field-wrap">
                  <label htmlFor="mobile" className="form__label">
                    {t('mobileNumber')}
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    className={`input ${!mobile || !isMobileValid ? 'invalid-field' : ''}`}
                    value={mobile}
                    onChange={(e) => handleMobileChange(e.target.value)}
                    autoComplete="off"
                  />
                  <p className={isMobileValid ? 'hidden' : 'form__note'}>{t('enterValidMobile')}</p>
                </div>
                <div className="form__field-wrap">
                  <label htmlFor="text" className="form__label">
                    {t('text')}
                  </label>
                  <textarea
                    id="text"
                    rows="1"
                    className={`input form__message ${!text ? 'invalid-field' : ''}`}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onInput={(e) => {
                      e.target.style.height = 'auto';
                      e.target.style.height = `${e.target.scrollHeight + 2}px`;
                    }}
                  ></textarea>
                  <p
                    className={
                      !isFormValid && (!name || !surname || !email || !mobile || !text) ? 'form__note' : 'hidden'
                    }
                  >
                    {t('fillAllFields')}
                  </p>
                </div>
              </div>
              <button className="btn" type="submit">
                {t('send')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;

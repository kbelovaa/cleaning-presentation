import React, { useRef, useState } from 'react';
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
            <h2 className="title">
              Would you like <br /> to work with us?
            </h2>
            <p className="description__text">
              MFP is a new cleaning service where booking is as fast and simple as reserving an Uber. Our user-friendly
              website and mobile app enable customers to request cleaning services, even on short notice, with just a
              few clicks. As part of our team, you are equipped with a mobile app, where you will be receiving cleaning
              requests. The first member to accept the job will be assigned to it with all details sent through the
              mobile app. This allows you full flexibility to set your own schedule and work when you want.
            </p>
            <button className="btn" onClick={() => handleScroll(contactUsRef)}>
              Contact us
            </button>
          </div>
        </div>
      </section>
      <section className="system-section">
        <div className="system">
          <h2 className="title system__title">How the system works</h2>
          <div className="system__stages">
            <div className="system__stage">
              <h3 className="system__subtitle">1. Request</h3>
              <p className="system__text">
                Request cleaning, even on short notice, with just a few clicks on the user-friendly website/mobile app
              </p>
              <img className="system__img" src={requestImg} alt="Request screen" />
            </div>
            <div className="system__stage">
              <h3 className="system__subtitle">2. Notification</h3>
              <p className="system__text">Notifications of the request will be sent to you via the mobile app</p>
              <img className="system__img" src={notificationImg} alt="Notification screen" />
            </div>
            <div className="system__stage">
              <h3 className="system__subtitle">3. Response</h3>
              <p className="system__text">Accept the job, and all details are sent through the mobile app</p>
              <img className="system__img" src={responseImg} alt="Response screen" />
            </div>
            <div className="system__stage">
              <h3 className="system__subtitle">4. Instant payments</h3>
              <p className="system__text">Receive instant payment after completing each job</p>
              <img className="system__img" src={paymentImg} alt="Payment screen" />
            </div>
          </div>
        </div>
      </section>
      <section className="join-section">
        <div className="container">
          <div className="join">
            <h2 className="title">Why join us</h2>
            <div className="join__reasons">
              <div className="join__reason">
                <h4 className="join__subtitle">Flexible</h4>
                <p className="join__text">
                  Choose your work hours to align with your personal preferences and lifestyle
                </p>
              </div>
              <div className="join__reason">
                <h4 className="join__subtitle">Technology</h4>
                <p className="join__text">
                  Accept requests, manage and streamline your work with the intuitive mobile app
                </p>
              </div>
              <div className="join__reason">
                <h4 className="join__subtitle">Payment</h4>
                <p className="join__text">Receive payment after completing each job</p>
              </div>
              <div className="join__reason">
                <h4 className="join__subtitle">Potential</h4>
                <p className="join__text">
                  Earn an additional 20% on expedited cleanings and up to 60% during off-peak hours including early
                  mornings, late nights, and holidays
                </p>
              </div>
              <div className="join__reason">
                <h4 className="join__subtitle">Referrals</h4>
                <p className="join__text">
                  Refer a new customer and enjoy a 10% share of their bookings for an entire year
                </p>
              </div>
              <div className="join__reason">
                <h4 className="join__subtitle">Compliance and Security</h4>
                <p className="join__text">Full compliance with Spanish labour laws</p>
              </div>
            </div>
          </div>
        </div>
        <div className="background"></div>
      </section>
      <section className="contact-us-section" ref={contactUsRef}>
        <div className="container">
          <div className="contact-us">
            <h2 className="title">
              Interested?
              <br />
              Contact us here
            </h2>
            <form className={`form ${isFormValid ? 'valid' : 'invalid'}`} onSubmit={handleFormSubmit}>
              <div className="form__fields">
                <div className="form__field-wrap">
                  <label htmlFor="name" className="form__label">
                    Name
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
                    Surname
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
                    Email address
                  </label>
                  <input
                    id="email"
                    type="text"
                    className={`input ${!email || !isEmailValid ? 'invalid-field' : ''}`}
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    autoComplete="off"
                  />
                  <p className={isEmailValid ? 'hidden' : 'form__note'}>Please enter a valid email address.</p>
                </div>
                <div className="form__field-wrap">
                  <label htmlFor="mobile" className="form__label">
                    Mobile nr
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    className={`input ${!mobile || !isMobileValid ? 'invalid-field' : ''}`}
                    value={mobile}
                    onChange={(e) => handleMobileChange(e.target.value)}
                    autoComplete="off"
                  />
                  <p className={isMobileValid ? 'hidden' : 'form__note'}>Please enter a valid mobile number.</p>
                </div>
                <div className="form__field-wrap">
                  <label htmlFor="text" className="form__label">
                    Text
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
                    Please fill in all fields
                  </p>
                </div>
              </div>
              <button className="btn" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;

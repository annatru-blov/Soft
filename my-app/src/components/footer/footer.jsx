import "./footer.css";
import email from "./../../img/svg/email.svg";
import telegram from "./../../img/svg/telegram.svg";
import twit from "./../../img/svg/twit.svg";
import phone from "./../../img/svg/phone.svg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer_content">
        <div className="copyright"> © 2023 VNSoft </div>
          <div className="contacts_footer">
        
            <div className="title_contacts">Contacts:</div>

            <a
              id="linkedin-tracking-link"
              className="social-link"
              href="https://mail.google.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Linkedin"
            >
              <img className="email_icon" src={email} alt="email" />
            </a>

            <a
              id="linkedin-tracking-link"
              className="social-link"
              href="https://t.me/your_telegram_channel"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Linkedin"
            >
              <img className="email_icon" src={telegram} alt="telegram" />
            </a>
            <a
              id="linkedin-tracking-link"
              className="social-link"
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Linkedin"
            >
              <img className="email_icon" src={twit} alt="twit" />
            </a>
            <a
              id="linkedin-tracking-link"
              className="social-link"
              href="tel:+1234567890"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Linkedin"
            >
              <img className="email_icon" src={phone} alt="phone" />
            </a>
           
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;

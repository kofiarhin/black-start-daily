import "./footer.styles.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          &copy; {currentYear} Black Star Daily. All rights reserved.
        </p>
        <div className="footer__links">
          <a href="/about" className="footer__link">
            About
          </a>
          <a href="/privacy" className="footer__link">
            Privacy
          </a>
          <a href="/contact" className="footer__link">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

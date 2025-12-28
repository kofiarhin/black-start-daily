import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__brand">
          <h1 className="header__title">Black Star Daily</h1>
          <p className="header__tagline">5-Minute Ghana Digest</p>
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <a href="/" className="header__link">
                Home
              </a>
            </li>
            <li className="header__item">
              <a href="/latest" className="header__link">
                Latest
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

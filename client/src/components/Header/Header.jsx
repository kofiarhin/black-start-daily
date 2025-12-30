// client/src/components/Header.jsx
import { useEffect, useState } from "react";
import "./header.styles.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header__fx" aria-hidden="true" />

      <div className="site-header__container">
        <a className="site-header__brand" href="/">
          <span className="site-header__mark" aria-hidden="true">
            ★
          </span>

          <div className="site-header__brand-text">
            <h1 className="site-header__title">Black Star Daily</h1>
            <p className="site-header__tagline">5-Minute Ghana Digest</p>
          </div>
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          <a className="site-header__link is-active" href="/">
            Home
            <span className="site-header__link-glow" aria-hidden="true" />
          </a>

          <a className="site-header__link" href="/latest">
            Latest
            <span className="site-header__link-glow" aria-hidden="true" />
          </a>

          <a className="site-header__cta" href="/latest">
            Read now <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>

      <div className="site-header__ticker" aria-hidden="true">
        <div className="site-header__ticker-track">
          <span>Breaking</span>
          <span>•</span>
          <span>Politics</span>
          <span>•</span>
          <span>Business</span>
          <span>•</span>
          <span>Sports</span>
          <span>•</span>
          <span>Culture</span>
          <span>•</span>
          <span>Tech</span>
          <span>•</span>
          <span>Breaking</span>
          <span>•</span>
          <span>Politics</span>
          <span>•</span>
          <span>Business</span>
          <span>•</span>
          <span>Sports</span>
          <span>•</span>
          <span>Culture</span>
          <span>•</span>
          <span>Tech</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

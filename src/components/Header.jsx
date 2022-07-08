import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Header = () => {
  const linksRef = useRef(null);
  const logoRef = useRef(null);
  const loginBtnRef = useRef(null);

  const links = [
    { name: "about", path: "/about" },
    { name: "wedding", path: "/wedding" },
    { name: "headshot", path: "/headshot" },
    { name: "contacts", path: "/contacts" },
    { name: "portraits", path: "/portraits" },
  ];

  useEffect(() => {
    gsap.fromTo(
      [logoRef.current, loginBtnRef.current],
      { opacity: 0, y: -150 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.easeOut" }
    );

    gsap.fromTo(
      linksRef.current.children,
      { opacity: 0, y: -50 },
      {
        delay: 0.2,
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.4,
        ease: "power3.easeOut",
      }
    );
  }, []);

  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__content">
          <div ref={logoRef} className="header__logo">
            Site name
          </div>

          <ul ref={linksRef} className="header__links">
            {links.map(({ name, path }) => (
              <li key={name} className="header__link">
                <a href={path}>{name}</a>
              </li>
            ))}
          </ul>

          <button ref={loginBtnRef} className="header__btn-login">
            log in
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

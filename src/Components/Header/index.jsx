import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import DropdownMenu from "../DropdownMenu";
import { useTranslation } from "react-i18next";
import AppContext from "../../store/app-context";
import Logo from "../assets/Logo.png";
import {
  AiOutlineWhatsApp,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

import "./Header.scss";

const Header = ({ className }) => {
  const ctx = useContext(AppContext);
  const { t } = useTranslation();
  const [showHeader, setShowHeader] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(null); // State to track active link
  const location = useLocation();
  const links = [
    {
      route: "/",
      label: `${t("Header.Home")}`,
      link: true,
    },
    {
      route: "/services",
      label: `${t("Header.Services")}`,
      link: true,
    },
    {
      route: "/about-us",
      label: `${t("Header.About_Us")}`,
      link: true,
    },
    {
      route: "/projects",
      label: `${t("Header.Our_Works")}`,
      link: true,
    },
    {
      route: "/contact-us",
      label: `${t("Contact_Us")}`,
      link: true,
    },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      if (document.body.getBoundingClientRect().top < 0) {
        setScrollPosition(document.body.getBoundingClientRect().top);
        setShowHeader(
          document.body.getBoundingClientRect().top > scrollPosition
        );
      } else {
        setShowHeader(null);
      }
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [scrollPosition]);

  // Function to handle click on a link
  const handleLinkClick = (route) => {
    setActiveLink(route);
    setOpenMenu(false); // Close the menu on link click
  };

  return (
    <div
      className={`main__header ${`${
        location.pathname === "/new-wecan" ||
        location.pathname === "/new-wecan/" ||
        location.pathname === "/"
          ? "home__hero"
          : ""
      }`} ${
        showHeader === null ? "" : showHeader ? "header__show" : "header__hide"
      }`}
    >
      <nav className="nav container">
        <NavLink to="/" className="logo">
          <img src={Logo} alt="" />
        </NavLink>
        <div className={`nav__list ${openMenu ? "opened" : ""}`}>
          <button className="close__button" onClick={() => setOpenMenu(false)}>
            <AiOutlineClose />
          </button>
          <ul className="links__list">
            {links.map((link, i) => {
              if (link.link) {
                return (
                  <li key={i}>
                    <NavLink
                      onClick={() => handleLinkClick(link.route)} // Call handleLinkClick on link click
                      to={link.route}
                      className={`main__link ${
                        activeLink === link.route ? "active" : "" // Apply active class if activeLink matches current route
                      }`}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                );
              } else {
                return (
                  <li key={i}>
                    <DropdownMenu options={link.options} label={link.label} />
                  </li>
                );
              }
            })}
          </ul>
          <a
            className="whats__app"
            target="_blank"
            href="#"
            onClick={() => setOpenMenu(false)}
          >
            <AiOutlineWhatsApp />
          </a>
          <button
            className="language__btn"
            onClick={() => {
              setOpenMenu(false);
              ctx.toggleLang();
            }}
          >
            {ctx.lang === "ar" ? "En" : "Ar"}
          </button>
        </div>
        <button
          className="toogle__meun"
          onClick={() => {
            setOpenMenu(true);
          }}
        >
          <AiOutlineMenu />
        </button>
      </nav>
    </div>
  );
};

export default Header;

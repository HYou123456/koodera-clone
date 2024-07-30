import React from "react";
import AboutImage from "../assets/about__sec.png";
import { useTranslation } from "react-i18next";

import "./AboutUs.scss";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className="section__space section__padding about__section">
      <div className="container">
        <div className="about__content">
          <div className="left">
            <h2 className="section__title" data-aos="fade-right">
              {t("About_section.title")} <span className="under__line"></span>
            </h2>
            <p className="main__text" data-aos="fade-up">
              {t("About_section.text")}
            </p>
            <div className="about__us__btns">
              <Link
                to="/about-us"
                className="sec__button"
                data-aos="fade-right"
              >
                {t("Read_More")}
              </Link>
              <button
                className="main__button"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                {t("Download_Profile")}
              </button>
            </div>
          </div>
          <div className="rigth" data-aos="fade-left">
            <div>
              <img src={AboutImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;


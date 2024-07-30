import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./Services.scss";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    `${t("services.service1__title")}`,
    `${t("services.service2__title")}`,
    `${t("services.service3__title")}`,
    `${t("services.service4__title")}`,
    `${t("services.service5__title")}`,
    `${t("services.service6__title")}`,
  ];

  return (
    <section className="section__padding section__space services__section">
      <div className="container">
        <h2 className="section__title" data-aos="fade-up">
          {t("Our_Services")}
        </h2>
        <ul className="services__content">
          {services.map((service, i) => (
            <Link
              to="/services"
              state={{ id: `service_${i + 1}` }}
              className="services__item"
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <span>{i + 1}</span>
              {service}
            </Link>
          ))}
        </ul>
        <Link to="/services" className="sec__button" data-aos="fade-up">
          {t("All_Services")}
        </Link>
      </div>
    </section>
  );
};

export default Services;

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { ServicesBlock } from "../../Components";
import Masonry from "react-masonry-css";

import "./ServicesPage.scss";

const ServicesPage = () => {
  const { t } = useTranslation();
  const selectedService = useLocation()?.state?.id;
  
  useEffect(() => {
    if (!selectedService) {
      window.scrollTo({
        top: 0,
      });
    }
  }, [selectedService]);

  const breakpoints = {
    default: 2,
    991: 1,
  };

  const services = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/kodeera-5044a.appspot.com/o/saas-concept-collage.jpg?alt=media&token=e62fdb87-f781-43ea-8cd6-18e6a05e4f8d",
      title: t("services.service1__title"),
      text: t("services.service1__text"),
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/kodeera-5044a.appspot.com/o/representation-user-experience-interface-design.jpg?alt=media&token=6b3d71f4-e0a7-4962-bdf7-0c097b5ce6ea",
      title: t("services.service2__title"),
      text: t("services.service2__text"),
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/kodeera-5044a.appspot.com/o/o20.jpg?alt=media&token=1076bc6d-c715-436e-9473-41a89126d459",
      title: t("services.service3__title"),
      text: t("services.service3__text"),
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/kodeera-5044a.appspot.com/o/corporate-businessmen-working-tablet-office.jpg?alt=media&token=e1e7884d-5a22-4d04-af5f-ceea73f29803",
      title: t("services.service4__title"),
      text: t("services.service4__text"),
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/kodeera-5044a.appspot.com/o/man-using-digital-tablet-psd-mockup-smart-technology.jpg?alt=media&token=1748d684-ebdf-4074-beab-2d183776f786",
      title: t("services.service5__title"),
      text: t("services.service5__text"),
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/kodeera-5044a.appspot.com/o/businessman-handshaking-businesswoman-showing-respect-closeup-view-hands-shaking.jpg?alt=media&token=fa3f29f4-3bb1-4513-b329-7b02f79bbb8a",
      title: t("services.service6__title"),
      text: t("services.service6__text"),
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/kodeera-5044a.appspot.com/o/young-graphic-designer-working-office.jpg?alt=media&token=3a46890a-c286-4af8-b7b3-11efefddb90a",
      title: t("services.service7__title"),
      text: t("services.service7__text"),
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/kodeera-5044a.appspot.com/o/representation-user-experience-interface-design%20(1).jpg?alt=media&token=40da8474-3159-48ca-a138-17d74ef85745",
      title: t("services.service8__title"),
      text: t("services.service8__text"),
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/kodeera-5044a.appspot.com/o/html-css-collage-concept-with-person.jpg?alt=media&token=d026cf42-d789-44d1-b434-76c2c2296d51",
      title: t("services.service9__title"),
      text: t("services.service9__text"),
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/kodeera-5044a.appspot.com/o/application-programming-interface-hologram.jpg?alt=media&token=110ba806-b27b-4de8-84da-c65450137977",
      title: t("services.service10__title"),
      text: t("services.service10__text"),
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/kodeera-5044a.appspot.com/o/saas-concept-collage%20(1).jpg?alt=media&token=8e31a976-6483-481f-b910-1393a3fb74de",
      title: t("services.service11__title"),
      text: t("services.service11__text"),
    },
  ];

  return (
    <>
      <div className="services__page">
        <div className="container">
          <h2 className="section__title">{t("Our_Services")}</h2>
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {services.map((service, i) => (
              <ServicesBlock
                key={i}
                title={service.title}
                text={service.text}
                img={service.img}
                id={`service_${i + 1}`}
                selectedService={selectedService}
              />
            ))}
          </Masonry>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;

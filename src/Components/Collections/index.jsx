import React from "react";
import SingleCollection from "../SingleCollection";
import { useTranslation } from "react-i18next";
// import { imagesCollections } from "../assets";

import "./Collections.scss";
import { Link } from "react-router-dom";

const Collections = () => {
  const { t } = useTranslation();

  const collections = [
    {
      label: `${t("collections.Medical_Sector")}`,
      img: "https://firebasestorage.googleapis.com/v0/b/kodeera-5044a.appspot.com/o/TaeJune15.jpg?alt=media&token=41d28800-65d3-48ae-8f02-8b1682a8b54a",
      category__id: "Medical_Sector",
    },
    {
      label: `${t("collections.Home_Decor")}`,
      img: "https://firebasestorage.googleapis.com/v0/b/kodeera-5044a.appspot.com/o/CRM.jpg?alt=media&token=21758dab-0394-4a3a-a5fd-b92d9ee39199",
      category__id: "Home_Decor",
    },
    {
      label: `${t("collections.Commercial_Facilities")}`,
      img: "https://firebasestorage.googleapis.com/v0/b/kodeera-5044a.appspot.com/o/Commercial_Facilities.jpeg?alt=media&token=6458b52f-c5b4-4164-991a-8c7996b4cbd7",
      category__id: "Commercial_Facilities",
    },
    {
      label: `${t("collections.Studies")}`,
      img: "https://firebasestorage.googleapis.com/v0/b/kodeera-5044a.appspot.com/o/ui.jpg?alt=media&token=b2b14343-223b-45f6-bf64-3fc885075b05",
      category__id: "Studies",
    },
  ];

  return (
    <section className="section__space collection__section">
      <h2 className="section__title" data-aos="fade-up">
        {t("collections.Our_Collection")}
      </h2>
      <div className="collection__content" data-aos="fade-up">
        {collections.map((collection, i) => (
          <SingleCollection
            key={i}
            collection={collection}
            aos={collection.aos}
            categoryID={collection.category__id}
          />
        ))}
      </div>
      <Link to="/projects" className="sec__button" data-aos="fade-up">
        {t("Show_More")}
      </Link>
    </section>
  );
};

export default Collections;

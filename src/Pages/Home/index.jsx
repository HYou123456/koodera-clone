import React, { useEffect } from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AppContext from "../../store/app-context";
import "../../Styles/Variables.scss"; // Update the path as necessary

import {
  AboutUs,
  Collections,
  Hero,
  ProjectBox,
  Services,
} from "../../Components";

import "./Home.scss";

const Home = ({ projects }) => {
  const { t } = useTranslation();
  const ctx = useContext(AppContext);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <Hero />
      <Collections />
      <AboutUs />
      <Services />
      <section className="section__space some__works__section">
        <div className="container">
          <h2 className="section__title">{t("Some_Works")}</h2>
          <div className="some__project__container">
            {projects.map((project, i) => (
              <ProjectBox
                key={i}
                name={ctx.lang === "ar" ? project.ar_name : project.en_name}
                img={project.images && project.images.length > 0 ? project.images[0] : ""}
                imgs={project.images}
                collection_id={project.collection_id}
                desc={ctx.lang === "ar" ? project.ar_desc : project.en_desc}
                index={i}
              />
            ))}
          </div>
        </div>
        <Link to="/projects" className="sec__button">
          {t("All_Works")}
        </Link>
      </section>
    </>
  );
};

export default Home;

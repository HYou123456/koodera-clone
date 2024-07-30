// import React, { useEffect } from "react";
// import AOS from "aos";

// import "aos/dist/aos.css";
import "./AboutSection.scss";

const AboutSection = ({ content, heading, img, i, text_fade, img_fade }) => {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // }, []);
  return (
    <div className="about__page__section">
      <div className="container">
        <div className="about__section__content">
          <div className="content__col">
            <h2 className="section__title" data-aos={text_fade}>
              {heading}
            </h2>
            <p
              className="about__text main__text"
              data-aos={text_fade}
              data-aos-delay={100}
            >
              {content}
              <span>0{i}</span>
            </p>
          </div>
          <div className="img__col" data-aos={img_fade}>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AboutSection from "../../Components/AboutSection";
import AboutImage from "../../Components/assets/about1.png";
import MissionImage from "../../Components/assets/mission.png";
import VisionImage from "../../Components/assets/vision.png";
import ValueImage from "../../Components/assets/value.png";

import "./About.scss";

const About = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const aboutcontent = {
    heading: `${t("Header.About_Us")}`,
    content: `${t("About_Text")}`,
    img: AboutImage,
    text_fade: "fade-right",
    img_fade: "fade-left",
  };

  const mission = {
    heading: `${t("MISSION")}`,
    content: `${t("Mission_Text")}`,
    img: MissionImage,
    text_fade: "fade-left",
    img_fade: "fade-right",
  };

  const vision = {
    heading: `${t("VISION")}`,
    content: `${t("Vision_Text")}`,
    img: VisionImage,
    text_fade: "fade-right",
    img_fade: "fade-left",
  };
  const value = {
    heading: `${t("Value_Proposition")}`,
    content: `${t("Value_text")}`,
    img: ValueImage,
    text_fade: "fade-left",
    img_fade: "fade-right",
  };

  return (
    <>
      <div className="page">
        <AboutSection
          heading={aboutcontent.heading}
          content={aboutcontent.content}
          img={aboutcontent.img}
          i={1}
          text_fade={aboutcontent.text_fade}
          img_fade={aboutcontent.img_fade}
        />
        <AboutSection
          heading={mission.heading}
          content={mission.content}
          img={mission.img}
          i={2}
          text_fade={mission.text_fade}
          img_fade={mission.img_fade}
        />
        <AboutSection
          heading={vision.heading}
          content={vision.content}
          img={vision.img}
          i={3}
          text_fade={vision.text_fade}
          img_fade={vision.img_fade}
        />
        <AboutSection
          heading={value.heading}
          content={value.content}
          img={value.img}
          i={4}
          text_fade={value.text_fade}
          img_fade={value.img_fade}
        />
      </div>
    </>
  );
};

export default About;

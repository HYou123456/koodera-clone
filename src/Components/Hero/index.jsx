import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay, Pagination, Navigation } from "swiper";
import { heroImages } from "../assets";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "./Hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation();
  const content = [
    {
      text: t("Hero__title_1"), // Corrected here
      img: heroImages.hero1,
    },
    {
      text: t("Hero__title_2"), // Corrected here
      img: heroImages.hero2,
    },
    {
      text: t("Hero__title_3"), // Corrected here
      img: heroImages.hero3,
    },
  ];

  return (
    <section className="hero__section">
      <Swiper
        grabCursor={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        dir={"ltr"}
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            opacity: ".6",
            translate: [0, 0, -100],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Pagination, EffectCreative, Autoplay, Navigation]}
        className="hero__slider"
      >
        {content.map((content, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div className="div">
                <img src={content.img} alt="" />
                {i === 0 && (
                  <div
                    className={`hero__wecan__title ${isActive ? "active" : ""}`} // Corrected here
                  >
                    <div className="hero_wecan_icon">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/kodeera-5044a.appspot.com/o/dellp.png?alt=media&token=2241175c-fee9-4a6e-823f-9ee17a1b3101"
                        alt=""
                      />
                    </div>
                    <div className="wecan__text">
                      <h1 className="wecan__title">Kodeera</h1>
                      <div className="wooden__text">
                        <p>Coding a New Era</p>
                      </div>
                    </div>
                  </div>
                )}
                <h1
                  className={`Heading ${isActive ? "active" : ""} ${
                    i === 0 ? "one" : i === 1 ? "two" : "three"
                  }`}
                >
                  {content.text}
                </h1>
                {i === 1 && (
                  <div className={`hero__social ${isActive ? "active" : ""}`}> {/* Corrected here */}
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=100092163253656"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaFacebookSquare />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.upwork.com/agencies/1537407128405504000/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <RiInstagramFill />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://x.com/KooderaA "
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaTwitterSquare />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/103588730"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaLinkedin />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/103588730"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaWhatsappSquare />
                        </a>
                      </li>
                    </ul>
                    <Link to="/contact-us" className="sec__button">
                      {t("Contact_Us")}
                    </Link>
                  </div>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;


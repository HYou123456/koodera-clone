import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { FaImages } from "react-icons/fa";
import FullScreenSlider from "../FullScreenSlider";

import "./ProjectBox.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";

const ProjectBox = ({ name, collection_id, imgs, desc }) => {
  const [openSlider, setOpenSlider] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <>
      <div className="main__project__boxx" data-aos="fade-up" >
        {Array.isArray(imgs) && imgs.length > 0 ? (
          <Swiper
            onSlideChange={(e) => setCurrentIndex(e.activeIndex)}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            dir={"ltr"}
            speed={1200}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Pagination, Autoplay, Navigation]}
            className="projects__slider"
          >
            {imgs.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="swiper__block">
                  <img src={img} alt={`Slide ${i}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>No images available</p>
        )}
        <span className="collection">{t(`collections.${collection_id}`)}</span>
        <span className="project__name">{name}</span>
        <button onClick={() => setOpenSlider(true)} className="slider__button">
          <FaImages />
        </button>
      </div>
      {openSlider && (
        <FullScreenSlider
          images={imgs}
          startIndex={currentIndex}
          onClose={() => setOpenSlider(false)}
          desc={desc}
        />
      )}
    </>
  );
};

// Set default props to ensure imgs is always an array
ProjectBox.defaultProps = {
  imgs: [],
};

export default ProjectBox;

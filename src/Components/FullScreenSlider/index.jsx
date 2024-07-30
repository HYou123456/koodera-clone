import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { MdClose } from "react-icons/md";

import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "./FullScreenSlider.scss";

const FullScreenSlider = ({ onClose, images, startIndex, desc }) => {
  const [imagesSlider, setImagesSlider] = useState([]);

  useEffect(() => {
    const arr = [];
    // eslint-disable-next-line array-callback-return
    images.map((img) => {
      arr.push({
        original: img,
        thumbnail: img,
      });
    });

    setImagesSlider(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fullscreen__slider">
      <div className="overlay__"></div>
      <button className="close__btn" onClick={() => onClose(false)}>
        <MdClose />
      </button>
      <div className="slider__content">
        <div className="project__desc">{desc}</div>
        <ImageGallery
          items={imagesSlider}
          infinite={true}
          lazyLoad={true}
          autoPlay={true}
          slideDuration={500}
          startIndex={startIndex}
          className="full__slider"
        />
      </div>
    </div>
  );
};

export default FullScreenSlider;

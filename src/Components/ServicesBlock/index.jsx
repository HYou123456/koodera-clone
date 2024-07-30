import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import "./ServicesBlock.scss";

const ServicesBlock = ({ title, img, text, id, selectedService }) => {
  const { t } = useTranslation();
  const [wrap, setWrap] = useState(true);
  const ref = useRef();

  useEffect(() => {
    if (selectedService === id) {
      window.scrollTo({
        top: ref?.current?.offsetTop,
      });
    }
  }, [id, selectedService]);

  return (
    <div className="service__block" ref={ref}>
      <div className="service__media">
        <img src={img} alt="" />
      </div>
      <h3 to="/" className="service__title">
        {title}
      </h3>
      <p className={`service__desc main__text ${wrap ? "wrap" : ""}`}>{text}</p>
      <button className="sec__button" onClick={() => setWrap((prev) => !prev)}>
        {wrap ? `${t("Show_More")}` : `${t("Show_Less")}`}
      </button>
    </div>
  );
};

export default ServicesBlock;

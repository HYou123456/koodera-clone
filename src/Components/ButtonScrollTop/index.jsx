import React, { useEffect, useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";

import "./ButtonScrollTop.scss";

const ButtonScrollTop = () => {
  const [show, setShow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 400) {
          setShow(true);
        } else {
          setShow(false);
        }
      });
    };
  }, []);

  return (
    <button
      className={`button__top ${show ? "show" : ""}`}
      onClick={() => {
        window.scrollTo({
          top: 0,
        });
      }}
    >
      <IoIosArrowDropupCircle />
    </button>
  );
};

export default ButtonScrollTop;

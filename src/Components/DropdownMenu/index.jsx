import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import "./DropdownMenu.scss";

const DropdownMenu = ({ label, options }) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <button
        className="main__link dropdown__button"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {label}
        <RiArrowDropDownLine className="drop__icon" />
        <ul className={`dropdown__menu ${hover ? "show" : ""}`}>
          {options?.map((option, i) => (
            <li key={i}>
              <Link to={option.route} className="dropdown__link">
                {option.label}
              </Link>
            </li>
          ))}
        </ul>
      </button>
    </>
  );
};

export default DropdownMenu;

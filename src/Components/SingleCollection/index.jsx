import React from "react";
import { Link } from "react-router-dom";

import "./SingleCollection.scss";

const SingleCollection = ({ collection, categoryID }) => {
  return (
    <Link to="/projects" state={{ categoryID }} className="collection__box">
      <img src={collection.img} alt="" />
      <h3>{collection.label}</h3>
    </Link>
  );
};

export default SingleCollection;

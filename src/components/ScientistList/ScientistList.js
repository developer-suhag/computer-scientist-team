import React from "react";
import "./ScientistList.css";

const ScientistList = (props) => {
  // scientist list component
  const { name, img } = props.scientist;
  return (
    <div>
      <li className="list-item">
        <div className="single-list">
          <div>
            <img className="list-img img-thumbnail" src={img} alt="" />
          </div>
          <div>
            <b>{name}</b>
          </div>
        </div>
      </li>
    </div>
  );
};

export default ScientistList;

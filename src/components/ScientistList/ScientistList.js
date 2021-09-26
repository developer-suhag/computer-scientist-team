import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./ScientistList.css";

const ScientistList = (props) => {
  const { scientist } = props;
  return (
    <div>
      <li className="list-item">
        <span className="me-2 check">
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <b>{scientist}</b>
      </li>
    </div>
  );
};

export default ScientistList;

import React from "react";
// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Scientist.css";

const Scientist = (props) => {
  const { name, age, img, education, know_for, occupation, salary } =
    props.scientist;
  return (
    <div>
      {/* card  */}
      <div className="col h-100">
        <div className="card h-100 p-3 scientist-box">
          <div className="profile text-center">
            {/* profile img  */}
            <img
              src={img}
              className="card-img-top profile-img img-thumbnail"
              alt=""
            />
          </div>
          {/* card description  */}
          <div className="card-body text-center">
            <div className="social-icons">
              <a
                href="https://www.facebook.com/suhag.alamin.315/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://twitter.com/suhag_alamain"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://github.com/developer-suhag"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <h5 className="card-title name">{name}</h5>
            <h6 className="age">Age: {age}</h6>
            <p className="education">
              <b>Education:</b> {education}
            </p>
            <p className="occpation">
              <b>Occupation:</b> {occupation}
            </p>
            <p className="know-for">
              <b>Know for:</b> {know_for.slice(0, 100)}.
            </p>
            <p className="salary">
              <b>Salary: ${salary}</b>
            </p>
          </div>
          {/* add to team button  */}
          <div className="card-footer bg-white border-0 text-center">
            <button
              onClick={() => props.handleCart(props.scientist)}
              className="regular-btn animate__animated animate__backInUp animate__delay-2s"
            >
              <span className="icon me-2">
                <FontAwesomeIcon icon={faUserPlus} />
              </span>
              Add to Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scientist;

import React from "react";
import "./Scientist.css";

const Scientist = (props) => {
  console.log(props);
  const { name, age, img, education, know_for, occupation, salary } =
    props.scientist;
  return (
    <div>
      {/* card  */}

      <div className="col h-100">
        <div className="card h-100 p-3 scientist-box">
          <div className="profile text-center">
            <img
              src={img}
              className="card-img-top profile-img img-thumbnail"
              alt="..."
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6>Age: {age}</h6>
            <p>Education: {education}</p>
            <p>Occupation: {occupation}</p>
            <p>Know for: {know_for.slice(0, 100)}</p>
            <p>
              <b>Salary: {salary}</b>
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scientist;

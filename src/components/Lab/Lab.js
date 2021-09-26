import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Scientist from "../Scientist/Scientist";
import "./Lab.css";

const Lab = () => {
  // load data
  const [scientists, setScientists] = useState([]);
  //   console.log(scientists);
  useEffect(() => {
    fetch("./scientists.json")
      .then((res) => res.json())
      .then((data) => setScientists(data));
  }, []);
  return (
    //   lab section
    <div className="container-fluid lab-section py-5 px-3">
      <h3 className="section-title text-center pick-experts">
        Pick your Experts
      </h3>
      {/* lab container  */}
      <div className="lab-container">
        {/* scientists components  */}
        <div className="scientists row row-cols-1 row-cols-md-3 g-4 px-4">
          {scientists.map((scientist) => (
            <Scientist key={scientist.id} scientist={scientist}></Scientist>
          ))}
        </div>
        <div className="cart">
          {/* cart components  */}
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Lab;

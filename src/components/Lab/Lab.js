import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Scientist from "../Scientist/Scientist";
import "./Lab.css";

const Lab = () => {
  // load data
  const [scientists, setScientists] = useState([]);
  useEffect(() => {
    // load data
    fetch("./scientists.json")
      .then((res) => res.json())
      .then((data) => setScientists(data));
  }, []);

  // handle cart
  const [cart, setCart] = useState([]);
  const handleCart = (scientist) => {
    const newCarts = [...cart, scientist];
    setCart(newCarts);
  };
  return (
    //   lab section
    <div className="container-fluid lab-section py-5 px-3">
      <h3 className="section-title text-center pick-experts">
        Pick your <span style={{ color: "#ff9e00" }}>Experts</span>
      </h3>
      {/* lab container  */}
      <div className="lab-container animate__animated animate__fadeInLeft animate__delay-1s">
        {/* scientists components  */}
        <div className="scientists row row-cols-1 row-cols-md-3 g-4 px-4">
          {scientists.map((scientist) => (
            <Scientist
              key={scientist.id}
              scientist={scientist}
              handleCart={handleCart}
            ></Scientist>
          ))}
        </div>
        <div className="cart px-3 animate__animated animate__fadeInRight animate__delay-2s">
          {/* cart components  */}
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Lab;

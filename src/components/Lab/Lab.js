import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Scientist from "../Scientist/Scientist";
import "./Lab.css";

const Lab = () => {
  // load data
  const [scientists, setScientists] = useState([]);
  useEffect(() => {
    fetch("./scientists.json")
      .then((res) => res.json())
      .then((data) => setScientists(data));
  }, []);

  // handle cart
  // cart count
  const [cart, setCart] = useState(0);
  // cart salary
  const [newSalary, setNewSalary] = useState(0);
  // added scientists list
  const [scientistList, setScientistList] = useState([]);
  const handleCart = (scientist) => {
    // cart count
    const newCount = cart + 1;
    setCart(newCount);
    // salary
    const { salary, name } = scientist;
    const totalSalary = newSalary + salary;
    setNewSalary(totalSalary);
    // scientists list
    const newList = [...scientistList, name];
    setScientistList(newList);
  };
  return (
    //   lab section
    <div className="container-fluid lab-section py-5 px-3">
      <h3 className="section-title text-center pick-experts">
        Pick your Experts
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
          <Cart
            cart={cart}
            newSalary={newSalary}
            scientistList={scientistList}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Lab;

import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Scientist from "../Scientist/Scientist";
import "./Lab.css";
import { getStoredCart, addToDb } from "../../utilities/fakedb";

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
    const exist = cart.find((s) => s.id === scientist.id);

    let newCart = [];
    if (exist) {
      const rest = cart.filter((s) => s.id !== scientist.id);
      scientist.quantity = 1;
      newCart = [...rest, scientist];
      alert("already added");
    } else {
      scientist.quantity = 1;
      newCart = [...cart, scientist];
    }
    // const newCarts = [...cart, scientist];
    setCart(newCart);
    addToDb(scientist.id);
  };
  // handle localStroage
  useEffect(() => {
    const savedCart = getStoredCart();
    const storedCart = [];
    if (scientists.length) {
      for (const id in savedCart) {
        // debugger;
        const addedScientist = scientists.find(
          (scientist) => scientist.id === id
        );
        storedCart.push(addedScientist);
        if (addedScientist) {
          const quantity = savedCart[id];
          addedScientist.quantity = quantity;
          setCart(storedCart);
        }
      }
    }
  }, [scientists]);
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

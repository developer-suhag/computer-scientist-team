import React from "react";
import ScientistList from "../ScientistList/ScientistList";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  const total = cart.reduce(
    (previous, current) => previous + current.salary,
    0
  );

  return (
    //   cart section
    <div className="cart-box">
      <h3 className="text-center team-summary">Team Summary</h3>
      <div className="mt-4">
        <h5 className="mb-3 total-members">Total members: {cart.length}</h5>
        <h5 className="mb-4">
          Costs of team: <span className="team-salary">${total}</span>
        </h5>
        <div>
          <h5 className="mb-4 text-center scientist-list">
            Scientists List :-{" "}
          </h5>
          {/* scientist list  */}
          <ul>
            {cart.map((scientist) => (
              <ScientistList
                key={scientist.id}
                scientist={scientist}
              ></ScientistList>
            ))}
          </ul>
          {/* buy now  */}
          <div className="text-center mt-4">
            <button className="regular-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

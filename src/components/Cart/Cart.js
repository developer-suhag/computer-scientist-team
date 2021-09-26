import React from "react";
import ScientistList from "../ScientistList/ScientistList";
import "./Cart.css";

const Cart = (props) => {
  const { cart, newSalary, scientistList } = props;
  return (
    //   cart section
    <div className="cart-box">
      <h3 className="text-center team-summary">Team Summary</h3>
      <div className="mt-4">
        <h5 className="mb-3 total-members">Total members: {cart}</h5>
        <h5 className="mb-4">
          Costs of team: <span className="team-salary">${newSalary}</span>
        </h5>
        <div>
          <h5 className="mb-4 text-center scientist-list">
            Scientists List :-{" "}
          </h5>
          <ul>
            {scientistList.map((scientist) => (
              <ScientistList scientist={scientist}></ScientistList>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;

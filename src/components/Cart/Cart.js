import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart, newSalary } = props;
  return (
    //   cart section
    <div className="cart-box">
      <h3 className="text-center team-summary">Team Summary</h3>
      <div className="mt-4">
        <h5 className="mb-3 total-members">Total members: {cart}</h5>
        <h5 className="mb-4">Costs of team: ${newSalary}</h5>
        <h5 className="mb-4">Scientists List:</h5>
      </div>
    </div>
  );
};

export default Cart;

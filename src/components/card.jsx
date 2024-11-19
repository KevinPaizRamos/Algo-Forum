import React from "react";

const Card = ({ time, title, upvotes }) => {
  return (
    <div className="card">
      <h4>{time}</h4>
      <h2>{title}</h2>
      <h4>{upvotes}</h4>
    </div>
  );
};

export default Card;

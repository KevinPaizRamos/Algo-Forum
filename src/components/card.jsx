import React from "react";
import { Link } from "react-router-dom";
import { timeSince } from "../utils/timeUtils";

const Card = ({ time, title, upvotes, onClick, linkTo }) => {
  return (
    <div className="card">
      <h4>{timeSince(time)}</h4>
      <Link to={linkTo}>{title}</Link>
      <h4>{upvotes}</h4>
    </div>
  );
};

export default Card;

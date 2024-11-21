import React from "react";

const Comment = ({}) => {
  return (
    <div className="comment">
      <h2>Comments</h2>
      <ul>
        <li>
          <p>Comment</p>
        </li>
      </ul>
      <input type="text" placeholder="Add a comment" />
    </div>
  );
};

export default Comment;

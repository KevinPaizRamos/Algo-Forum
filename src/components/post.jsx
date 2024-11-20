import React from "react";

const Post = ({ title, description, solution, image }) => {
  return (
    <div className="post">
      <h3>Jose Jose</h3>
      <p>{description}</p>
      <p>{solution}</p>
      <img src={image} alt="Post" />
    </div>
  );
};

export default Post;

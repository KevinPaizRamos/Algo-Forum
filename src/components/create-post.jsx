import React, { useState } from "react";
import { supabase } from "../client";

const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    solution: "",
    image: "",
  });
  const createPost = async (event) => {
    event.preventDefault();

    await supabase
      .from("posts")
      .insert({
        title: post.title,
        description: post.description,
        solution: post.solution,
        image: post.image,
      })
      .select();

    window.location = "/";
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="create-post">
      <h1>Create Post </h1>
      <form className="post-form">
        <input type="text" placeholder="Title" onChange={handleChange} />
        <input
          onChange={handleChange}
          type="text"
          className="description"
          placeholder="description"
        />
        <input onChange={handleChange} type="text" placeholder="solution" />
        <input onChange={handleChange} type="text" placeholder="Image URL" />
      </form>
      <button onSubmit={createPost}>Post</button>
    </div>
  );
};

export default CreatePost;

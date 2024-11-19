import React from "react";
import { supabase } from "../client";

const CreatePost = () => {
  return (
    <div className="create-post">
      <h1>Create Post </h1>
      <form className="post-form">
        <input type="text" placeholder="Title" />
        <input type="text" className="description" placeholder="description" />
        <input type="text" placeholder="solution" />
        <input type="text" placeholder="Image URL" />
      </form>
      <button>Post</button>
    </div>
  );
};

export default CreatePost;

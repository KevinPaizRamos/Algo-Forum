import React from "react";
import { supabase } from "../client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "./comment";

const Post = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch the post data based on the ID
    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          throw error;
        }

        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <h4>Description:</h4>
      <p>{post.description}</p>
      <h4>Solution:</h4>
      <p>{post.solution}</p>
      <br />
      <Comment />
      <br />
    </div>
  );
};

export default Post;

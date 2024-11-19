import React, { useEffect } from "react";
import { useState } from "react";
import { supabase } from "../client";
import Card from "./card";

const PostCard = (props) => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const { data } = await supabase
        .from("posts")
        .select("title, description, solution, image")
        .order("created_at", { ascending: true });
      setPost(data);
    }
    fetchPost();
  }, [props]);

  return (
    <div className="post-card">
      {posts && posts.length > 0 ? (
        posts.map((posts) => (
          <div key={posts.id}>
            <Card title={posts.title} />
          </div>
        ))
      ) : (
        <h1>No posts available</h1>
      )}

      <h1></h1>
    </div>
  );
};

export default PostCard;

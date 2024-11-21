import React from "react";
import { supabase } from "../client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // Fetch the post data based on the ID
    const fetchPost = async () => {
      try {
        const { data: postData, error: postError } = await supabase
          .from("posts")
          .select("*")
          .eq("id", id)
          .single();

        if (postError) {
          throw postError;
        }

        setPost(postData);

        // Fetch the comments data based on the post_id
        const { data: commentsData, error: commentsError } = await supabase
          .from("comments")
          .select("*")
          .eq("post_id", id);

        if (commentsError) {
          throw commentsError;
        }

        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPost();
  }, [id]);

  const handleKeyPress = async (event) => {
    if (event.key === "Enter" && newComment.trim() !== "") {
      try {
        const { data, error } = await supabase
          .from("comments")
          .insert([{ content: newComment, post_id: id }])
          .select();

        if (error) {
          throw error;
        }

        setComments([...comments, data[0]]);
        setNewComment("");
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

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
      <div className="comment">
        <h2>Comments</h2>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>{comment.content}</li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
        <input
          type="text"
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>

      <br />
    </div>
  );
};

export default Post;

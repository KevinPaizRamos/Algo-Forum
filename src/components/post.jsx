import React from "react";
import { supabase } from "../client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();
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

  const handleUpvote = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .update({ upvotes: post.upvotes + 1 })
        .eq("id", id)
        .select();

      if (error) {
        throw error;
      }

      setPost(data[0]);
    } catch (error) {
      console.error("Error updating upvotes:", error);
    }
  };

  const handleDelete = async () => {
    try {
      // Delete comments first
      const { error: commentsError } = await supabase
        .from("comments")
        .delete()
        .eq("post_id", id);

      if (commentsError) {
        throw commentsError;
      }

      // Delete the post
      const { error: postError } = await supabase
        .from("posts")
        .delete()
        .eq("id", id);

      if (postError) {
        throw postError;
      }

      // Redirect to home page after deletion
      navigate("/");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post">
      {post.image && (
        <img
          src={post.image}
          alt="Post"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      )}
      <br />
      <h2>{post.title}</h2>
      <h4>Description:</h4>
      <p>{post.description}</p>
      <h4>Solution:</h4>
      <p>{post.solution}</p>
      <br />
      <div className="upvote">
        <span>{post.upvotes} Upvotes</span>
        <button onClick={handleUpvote}>Upvote</button>
        <div className="edit-delete-buttons">
          <button>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>

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

import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { supabase } from "../client";
import { useState, useEffect } from "react";
import Card from "../components/card";
const Layout = () => {
  const [posts, setPosts] = useState([]); // Posts from the database
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredPosts, setFilteredPosts] = useState([]); // Filtered posts

  const location = useLocation();

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await supabase
        .from("posts")
        .select("title, description, solution, image")
        .order("created_at", { ascending: true });
      setPosts(data);
      setFilteredPosts(data); // Initialize filteredPosts with all posts
    }
    fetchPosts();
  }, []);

  // Handle search query change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter posts based on the query
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
    setFilteredPosts(filtered);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="./src/assets/algo-forum-2.png" alt="Logo" />
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-button">
            Home
          </Link>
          <Link to="/create" className="nav-button">
            Create
          </Link>
        </div>
      </nav>
      <Outlet />
      {location.pathname === "/" && (
        <div className="post-list">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <div key={index} className="card">
                <Card title={post.title} />
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Layout;

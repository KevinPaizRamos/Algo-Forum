import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import CreatePost from "./components/create-post.jsx";
import App from "./App.jsx";
import Layout from "./pages/layout.jsx";
import Post from "./components/post.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />
          <Route index={true} element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

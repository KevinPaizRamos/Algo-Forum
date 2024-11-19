import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import CreatePost from "./components/create-post.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/create" element={<CreatePost />} />
        <Route index={true} element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

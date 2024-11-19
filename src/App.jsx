import { useState } from "react";
import CreatePost from "./components/create-post";
import "./App.css";
import PostCard from "./components/post-card";
import Card from "./components/card";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* <h1>Algo Forum</h1>
      <p>
        Share your most recent data Structures and algorithms questions that you
        have recently solved.
      </p>
      <img className="app-logo" src="./src/assets/algo-forum-2.png"></img> */}

      <PostCard />
    </>
  );
}

export default App;

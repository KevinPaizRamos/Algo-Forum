import { useState } from "react";

import "./App.css";
import PostCard from "./components/post-card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Algo Forum</h1>
      <p>
        Share your most recent data Structures and algorithms questions that you
        have recently solved.
      </p>
    </>
  );
}

export default App;

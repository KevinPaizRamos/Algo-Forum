import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Algo Forum</h1>
      <p>
        Share and navigate Data Structures and algorithms question to prepare
        for your technical interviews
      </p>
    </>
  );
}

export default App;

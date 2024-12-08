import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TimeComponents from "./components/TimeComponents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TimeComponents />
    </>
  );
}

export default App;

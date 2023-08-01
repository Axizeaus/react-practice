import { useState } from "react";
import "./App.css";
import ClassInput from "./components/ClassInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ClassInput />
    </>
  );
}

export default App;

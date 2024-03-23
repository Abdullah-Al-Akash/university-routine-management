import { useState } from "react";
import "./App.css";
import ResponsiveTable from "./components/MyTable";
import FridayTable from "./components/FridayTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ResponsiveTable></ResponsiveTable>
      <FridayTable></FridayTable>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import ResponsiveTable from "./components/MyTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ResponsiveTable></ResponsiveTable>
    </>
  );
}

export default App;

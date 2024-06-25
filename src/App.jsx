import { useState } from "react";
import HeaderBar from "./HeaderBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  return (
    <>
      <HeaderBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </>
  );
}

export default App;

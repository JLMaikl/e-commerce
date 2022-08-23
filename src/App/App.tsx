import { useState, useEffect } from "react";

import axios from "axios";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios({
        method: "get",
        url: "https://fakestoreapi.com/products",
      })
      setUsers(result.data);
    }
    fetch()
  }, []);

  return (
    <div className="App">
      srtydrtyeryerdtyudtyururu
    </div>
  );
}

export default App;

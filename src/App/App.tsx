import { useState, useEffect } from "react";

import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CardPage from "./Pages/CardPage";
import "./App.css";
import MainPage from "./Pages/MainPage";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios({
        method: "get",
        url: "https://fakestoreapi.com/products",
      })
      setUsers(result.data);
    };
    fetch();
  }, []);

  if (users.length === 0){
    return (
       <div>Loading...</div>
    );
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage users={users} /> } />
        <Route path="/card">
          <Route path=":id" element={<CardPage users={users}/>} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;

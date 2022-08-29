import React, { useState, useEffect } from "react";

import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CardPage from "./Pages/CardPage";
import "./App.css";
import MainPage from "./Pages/MainPage";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const result = await axios({
        method: "get",
        url: "https://fakestoreapi.com/products",
      }).catch((err) => {
        console.log(err);
      });
      setCards(result.data);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage cards={cards} loading={loading}/>} />
        <Route path="/card">
          <Route path=":id" element={<CardPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

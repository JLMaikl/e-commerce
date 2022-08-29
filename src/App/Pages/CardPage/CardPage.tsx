import React, { useState, useEffect } from "react";

import axios from "axios";
import classNames from "classnames";
import { useParams } from "react-router-dom";

import "./CardPage.css";

const CardPage = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const result: any = await axios({
        method: "get",
        url: `https://fakestoreapi.com/products/${id}`,
      }).catch((err: any) => {
        console.log(err);
      });
      setCard(result.data);
      setLoading(false);
    };
    fetch();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={classNames("cardPage-item")} key={card.id} style={{textDecoration: "none"}}>
      <div className={classNames("cardPage-item_image")}>
        <img src={card.image} alt="title" className={classNames("cardPage-item_img")} />
      </div>
      <div className="cardPage-item_wrapper">
        <h2 className={classNames("card-item_subtitle")}>{card.category}</h2>
        <h2 className={classNames("card-item_title")}>{card.title}</h2>
        <div>
          <div className={classNames("card-item_description")}>{card.description}</div>
          <p className={classNames("cardPage-item_content")}>${card.price}</p>
        </div>
      </div>
    </div>
  )
}

export default CardPage;
import React, { useState, useEffect } from "react";

import axios from "axios";
import classNames from "classnames";
import { useParams } from "react-router-dom";

import styles from "./CardPage.module.scss";

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
    <div className={classNames(styles.cardPageItem)} key={card.id}>
      <div className={classNames("cardPage-item_image")}>
        <img
          src={card.image}
          alt="title"
          className={classNames(styles.cardPageItemImg)}
        />
      </div>
      <div className={classNames(styles.cardPageItemWrapper)}>
        <h2 className={classNames(styles.cardItemSubtitle)}>{card.category}</h2>
        <h2 className={classNames(styles.cardItemTitle)}>{card.title}</h2>
        <div>
          <div className={classNames(styles.cardItemDescription)}>{card.description}</div>
          <p className={classNames(styles.cardPageItemContent)}>${card.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPage;

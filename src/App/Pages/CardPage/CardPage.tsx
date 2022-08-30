import React, { useState, useEffect } from "react";

import cardStore from "@store/cardStore";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import styles from "./CardPage.module.scss";

const CardPage = observer(() => {
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    cardStore.fetchCard(id);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={classNames(styles.cardPageItem)} key={cardStore.card.id}>
      <div className={classNames(styles.cardPageItemImage)}>
        <img
          src={cardStore.card.image}
          alt="title"
          className={classNames(styles.cardPageItemImg)}
        />
      </div>
      <div className={classNames(styles.cardPageItemWrapper)}>
        <h2 className={classNames(styles.cardItemSubtitle)}>
          {cardStore.card.category}
        </h2>
        <h2 className={classNames(styles.cardItemTitle)}>
          {cardStore.card.title}
        </h2>
        <div>
          <div className={classNames(styles.cardItemDescription)}>
            {cardStore.card.description}
          </div>
          <p className={classNames(styles.cardPageItemContent)}>
            ${cardStore.card.price}
          </p>
        </div>
      </div>
    </div>
  );
});

export default CardPage;

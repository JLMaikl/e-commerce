import Card from "@components/Card";
import classNames from "classnames";
import { Link } from "react-router-dom";

import styles from "./Goods.module.scss";

type CardProps2 = {
  image: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  price: string;
  category: React.ReactNode;
  id: number;
  loading: boolean;
  paginate: () => void;
};

type CardProps = {
  cards: CardProps2[];
  loading: boolean;
};

const Goods = ({ cards, loading }: CardProps) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={classNames(styles.goodsWrapper)}>
      {cards.map((card: any) => (
        <Link
          to={`/card/${card.id}`}
          key={card.id}
          style={{ textDecoration: "none" }}
        >
          <Card
            image={card.image}
            title={card.title}
            category={card.category}
            description={card.description}
            price={card.price}
            key={card.id}
          />
        </Link>
      ))}
    </div>
  );
};

export default Goods;
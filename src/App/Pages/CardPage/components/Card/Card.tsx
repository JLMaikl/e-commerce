import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

type CardProps = {
  image: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  description?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  price: string;
  category: React.ReactNode;
  id: number;
};

const Card = ({ image, title, category, description, price, id }: CardProps) => {
  return (
    <Link to={`/card/${id}`} key={id}>
      <div className={classNames(styles.cardItem)}>
        <div className={classNames(styles.cardItemWrapper)}>
          <div className={classNames(styles.cardItemImage)}>
            <img src={image} alt="title" className={classNames(styles.cardItemImg)} />
          </div>
          <h2 className={classNames(styles.cardItemSubtitle)}>{category}</h2>
          <h2 className={classNames(styles.cardItemTitle)}>{title}</h2>
          <div>
            <div className={classNames(styles.cardItemDescription)}>{description.substring(0, 200)}</div>
            <p className={classNames(styles.cardItemContent)}>${price}</p>
          </div>
        </div>
      </div>
    </Link>
    );
};

export default Card;
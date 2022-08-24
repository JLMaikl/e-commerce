import classNames from "classnames";
import { Link } from "react-router-dom";
import "./Card.css";

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
    <Link to={`/card/${id}`} className={classNames("card-item")} key={id}>
      <div className={classNames("card-item_image")}>
        <img src={image} alt="title" className={classNames("card-item_img")} />
      </div>
      <h2 className={classNames("card-item_subtitle")}>{category}</h2>
      <h2 className={classNames("card-item_title")}>{title}</h2>
      <div>
        <div className={classNames("card-item_description")}>{description.substring(0, 200)}</div>
        <p className={classNames("card-item_content")}>${price}</p>
      </div> 
    </Link>
    );
};

export default Card;
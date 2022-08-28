import classNames from "classnames";
import { Link } from "react-router-dom";
import "./Goods.css";

import Card from "../Card";

type CardProps = {
  image: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  price: string;
  category: React.ReactNode;
  id: number;
  loading: boolean;
};

const Goods = ({ cards, loading }: CardProps []) => {

  if (loading) {
    return <h2>Loading...</h2>;
  }
  
  return (
    <div className={classNames("goods-wrapper")}>
      {cards.map((card: any) => <Link to={`/card/${card.id}`} key={card.id} style={{ textDecoration: 'none' }}><Card image={card.image} title={card.title} category={card.category} description={card.description} price={card.price} key={card.id}/></Link>)}      
    </div>
    
    );
}

export default Goods;
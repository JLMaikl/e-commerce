import classNames from "classnames";
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
};

const Goods = ({ users }: CardProps []) => {
  return (
    <div className={classNames("goods-wrapper")}>
      {users.map(user => <Card image={user.image} title={user.title} category={user.category} description={user.description} price={user.price} key={user.id}/>)}
    </div>
    
    );
}

export default Goods;
import classNames from "classnames";
import InfiniteScroll from "react-infinite-scroll-component";
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
};

const Goods = ({ users }: CardProps []) => {
  
  const fetchMoreData = () => {
    console.log(111);
  }

  return (
    <div className={classNames("goods-wrapper")}>
      
      {users.map((user) => <Link to={`/card/${user.id}`} key={user.id} style={{ textDecoration: 'none' }}><Card image={user.image} title={user.title} category={user.category} description={user.description} price={user.price} key={user.id}/></Link>)}
      
    </div>
    
    );
}

export default Goods;
import classNames from "classnames";

import Card from "../Card";
import styles from "./Goods.module.scss";

type CardProps = {
  image: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  price: string;
  category: React.ReactNode;
  id: number;
};

const Goods = ({ users }: CardProps[]) => {
  return (
    <div className={classNames(styles.goods-wrapper)}>
      {users.map((user: any) => (
        <Card 
          image={user.image}
          title={user.title}
          category={user.category}
          description={user.description}
          price={user.price}
          key={user.id}
        />
      ))}
    </div>
  );
};

export default Goods;

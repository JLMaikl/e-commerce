import classNames from "classnames";

import Card from "../Card";
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
};

type CardProps = {
  users: CardProps2[];
  paginate: () => void;
  loading: boolean;
};

const Goods = ({ users }: CardProps) => {
  return (
    <div className={classNames(styles.goodsWrapper)}>
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

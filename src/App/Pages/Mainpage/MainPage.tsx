import classNames from "classnames";

import "./MainPage.css";
import Goods from "./components/Goods";


type CardProps = {
    users: []
};

const MainPage= ({ users }: never) => {

  return (
      <div className={classNames("goods-container")}>
      <Goods users={users}/>
    </div>
  )
}

export default MainPage;
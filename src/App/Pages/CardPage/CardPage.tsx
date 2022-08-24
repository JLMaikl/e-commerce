import { useParams } from 'react-router-dom';
import classNames from "classnames";

import "./CardPage.css";

const CardPage = ({ users }: any) => {
  const { id } = useParams();
  const page = users.find((user: any) => user.id == id);

  return (
    <div className={ classNames("cardPage-item") } key={ page.id } style={{ textDecoration: "none" }}>
      <div className={classNames("cardPage-item_image")}>
        <img src={page.image} alt="title" className={classNames("cardPage-item_img")} />
      </div>
      <div className="cardPage-item_wrapper">
        <h2 className={classNames("card-item_subtitle")}>{page.category}</h2>
        <h2 className={classNames("card-item_title")}>{page.title}</h2>
        <div>
          <div className={classNames("card-item_description")}>{page.description}</div>
          <p className={classNames("cardPage-item_content")}>${page.price}</p>
        </div>
      </div>
    </div>
  )
}

export default CardPage;
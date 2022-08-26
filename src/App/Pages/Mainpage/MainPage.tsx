import { useState } from "react";

import classNames from "classnames";

import "./MainPage.css";
import Goods from "./components/Goods";
import Pagination from "./components/Pagination";

type CardProps = {
  cards: [];
  paginate: () => void;
  loading: boolean;
};

const MainPage = ({ cards, loading }: CardProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = cards.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={classNames("goods-container")}>
      <Goods cards={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={cards.length}
        paginate={paginate}
      />
    </div>
  );
};

export default MainPage;

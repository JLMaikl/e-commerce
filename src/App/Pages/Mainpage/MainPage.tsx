import { useState, useEffect } from "react";

import cardsStore from "@store/сardsStore/cardsStore";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import Goods from "./components/Goods";
import Pagination from "./components/Pagination";
import styles from "./MainPage.module.scss";

const MainPage = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    cardsStore.fetchCards();
    setLoading(false);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = cardsStore.cards.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={classNames(styles.goodsContainer)}>
      <Goods cards={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={cardsStore.cards.length}
        paginate={paginate}
      />
    </div>
  );
});

export default MainPage;
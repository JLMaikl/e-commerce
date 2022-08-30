import { useEffect } from "react";

import cardsStore from "@store/сardsStore/cardsStore";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import styles from "./Pagination.module.scss";

const Pagination = observer(({ postsPerPage, totalPosts, paginate }: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    cardsStore.fetchCards();
  }, []);

  return (
    <nav>
      <ul className={classNames(styles.pagination)}>
        {pageNumbers.map((number) => (
          <li key={number} className={classNames(styles.pageItem)}>
            <div
              onClick={() => paginate(number)}
              className={classNames(styles.pageLink)}
            >
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default Pagination;

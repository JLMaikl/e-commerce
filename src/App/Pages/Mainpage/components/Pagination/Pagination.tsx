import React from "react";

import classNames from "classnames";

import styles from "./Pagination.module.scss";

const Pagination = ({ postsPerPage, totalPosts, paginate }: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className={classNames(styles.pagination)}>
        {pageNumbers.map((number) => (
          <li key={number} className={classNames(styles.pageItem)}>
            <div onClick={() => paginate(number)} className={classNames(styles.pageLink)}>
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

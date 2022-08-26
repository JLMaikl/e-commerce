import React from "react";

import classNames from "classnames";
import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className={classNames("pagination")}>
        {pageNumbers.map((number) => (
            <li key={number} className={classNames("pageItem")}>
                <a onClick={() => paginate(number)} href="!#" className={classNames("pageLink")}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

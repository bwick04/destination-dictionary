import React from "react";

const PageNumbers = ({ number, currentPage, handleClick }) => {
  return (
    <a
      href="#"
      data-testid="page-number"
      key={number}
      id={number}
      className={currentPage === number ? "current" : ""}
      onClick={() => handleClick(number)}
    >
      {number}
    </a>
  );
};

export default PageNumbers;

import { Fragment } from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

function sortQuotes(quotes, ascending = false, author = false) {
  if (author) {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.author < quoteB.author ? 1 : -1;
      } else {
        return quoteA.author > quoteB.author ? 1 : -1;
      }
    });
  }
  if (!author) {
    return quotes.sort((quoteA, quoteB) => {
      return quoteA.id > quoteB.id ? 1 : -1;
    });
  }
}

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);

  const isSortingAsc = queryParam.get("sort") === "asc";
  const isSortingAuthor = queryParam.get("sort") === "author";
  const sortedQuotes = sortQuotes(props.quotes, isSortingAsc, isSortingAuthor);

  console.log("is SortingAsc:", isSortingAsc);
  console.log("is SortingAuth:", isSortingAuthor);

  const sortHandler = (sortType) => {
    history.push(`/quotes?sort=${sortType}`);
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button
          onClick={() => {
            sortHandler(!isSortingAsc ? "asc" : "desc");
          }}
        >
          Sort {!isSortingAsc ? "Ascending" : "Descending"}
        </button>
        <button
          onClick={() => {
            sortHandler("author");
          }}
        >
          Sort by author
        </button>
      </div>

      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;

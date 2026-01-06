import React, {
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode,
  type TouchEvent,
} from "react";

export type PaginationProps = {
  /** set current page number */
  current: number;
  /** total number of pages */
  items: number;
  /** don't show an ellipsise and then the last page link, usefull for search results where the last page isn't important */
  hideLast?: boolean;
  /** callback function which is passed the selected page number on click */
  pagerCallback: (n: number) => void;
  /** number of items per page */
  perPage: number;
  /** the name of the search param in the url that is modified on page click, defaults to 'page' */
  searchParam?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLElement>;

/**
 * 
 * Pagination is used when we are viewing large amounts of data.
Data is split into multiple pages and pagination is used to
easily navigate through these pages.
 */
export function Pagination({
  current,
  items,
  hideLast,
  pagerCallback,
  perPage,
  searchParam = "page",
  children,
  id,
}: PaginationProps) {
  const perPageValue = perPage > 0 ? perPage : 1;
  const totalPages = Math.ceil(items / perPageValue) || 1;

  const linkProps = (number: number) => ({
    href: `${typeof window !== "undefined" ? window.location.pathname : ""}?${
      searchParam ? `${searchParam}=${number}` : ""
    }`,
    onClick: (e: TouchEvent | MouseEvent) => {
      e.preventDefault();
      pagerCallback(number);
    },
  });

  const renderPager = (active: number, total: number) => {
    const list = [];
    let pager = [];
    // get the list of items
    for (let number = 1; number <= total; number += 1) {
      list.push(
        <li className="pager-item" key={number}>
          <a
            className="pager-link"
            data-cta={id ? `${id}-${number}` : null}
            data-is-active={number === active}
            {...linkProps(number)}
            aria-label={`page ${number} of ${total}`}
          >
            {number}
          </a>
        </li>,
      );
    }
    const first = list.slice(0, 1).concat(
      <li className="pager-item" key="first">
        <span>...</span>
      </li>,
    );
    const last = list
      .slice(list.length - 1)
      .concat(
        <li className="pager-item" key="last">
          <span>...</span>
        </li>,
      )
      .reverse();
    pager = list.slice(0, total);
    if (total > 7) {
      if (active <= 4) {
        pager = hideLast ? list.slice(0, 7) : list.slice(0, 5).concat(last);
      } else {
        pager =
          active > total - 4
            ? first.concat(list.slice(-5))
            : hideLast
              ? first.concat(list.slice(active - 3, active + 2))
              : first.concat(list.slice(active - 2, active + 1)).concat(last);
      }
    }
    return pager;
  };

  return (
    <>
      {items > perPage && (
        <div className="component-pagination" id={id}>
          <ul className="pager-list">
            <li className="pager-item" key="Prev">
              <a
                className="pager-link"
                data-cta={id ? `${id}-prev` : null}
                data-name="Prev"
                aria-disabled={current === 1}
                {...(current === 1 && { tabIndex: -1 })}
                {...(current !== 1 && linkProps(current - 1))}
                data-is-disabled={current === 1}
              >
                Prev
              </a>
            </li>
            {renderPager(current, totalPages)}
            <li className="pager-item" key="Next">
              <a
                className="pager-link"
                data-cta={id ? `${id}-next` : null}
                data-name="Next"
                aria-disabled={current === totalPages}
                {...(current === totalPages && { tabIndex: -1 })}
                {...(current !== totalPages && linkProps(current + 1))}
                data-is-disabled={current === totalPages}
              >
                Next
              </a>
            </li>
          </ul>
          {children}
        </div>
      )}
    </>
  );
}

export default Pagination;

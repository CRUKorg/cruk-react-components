import React, { FunctionComponent, MouseEvent } from 'react';
import { ThemeProvider, useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';

import { PagerItem, PagerLink, PagerList, PagerWrapper } from './styles';

export type PaginationProps = {
  /** set current page number */
  current: number;
  /** total number of pages */
  items: number;
  /** don't show an ellipsise and then the last page link, usefull for search results where the last page isn't important */
  hideLast?: boolean;
  /** callback function which is passed the selected page number on click*/
  pagerCallback: Function;
  /** number of items per page*/
  perPage: number;
  /** the name of the search param in the url that is modified on page click, defaults to 'page' */
  searchParam?: string;
};

/**
 * 
 * Pagination is used when we are viewing large amounts of data.
Data is split into multiple pages and pagination is used to
easily navigate through these pages.
 */
const Pagination: FunctionComponent<PaginationProps> = props => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  const perPage = props.perPage > 0 ? props.perPage : 1;
  const totalPages = Math.ceil(props.items / perPage) || 1;

  const linkProps = (number: number) => ({
    href: `${typeof window !== 'undefined' ? window.location.pathname : ''}?${props.searchParam}=${number}`,
    onClick: (e: MouseEvent) => {
      e.preventDefault();
      props.pagerCallback(number);
    },
  });

  const renderPager = (active: number, total: number) => {
    const list = [];
    let pager = [];
    // get the list of items
    for (let number = 1; number <= total; number++) {
      list.push(
        <PagerItem key={number}>
          <PagerLink active={number === active} {...linkProps(number)} aria-label={`page ${number} of ${total}`}>
            {number}
          </PagerLink>
        </PagerItem>,
      );
    }
    const first = list.slice(0, 1).concat(
      <PagerItem key="first">
        <span>...</span>
      </PagerItem>,
    );
    const last = list
      .slice(list.length - 1)
      .concat(
        <PagerItem key="last">
          <span>...</span>
        </PagerItem>,
      )
      .reverse();
    pager = list.slice(0, total);
    if (total > 7) {
      if (active <= 4) {
        pager = props.hideLast ? list.slice(0, 7) : list.slice(0, 5).concat(last);
      } else {
        pager =
          active > total - 4
            ? first.concat(list.slice(-5))
            : props.hideLast
            ? first.concat(list.slice(active - 3, active + 2))
            : first.concat(list.slice(active - 2, active + 1)).concat(last);
      }
    }
    return pager;
  };

  return (
    <ThemeProvider theme={theme}>
      {props.items > props.perPage && (
        <PagerWrapper>
          <PagerList>
            <PagerItem key="Prev">
              <PagerLink
                name="Prev"
                disabled={props.current === 1}
                {...(props.current !== 1 && linkProps(props.current - 1))}
              >
                Prev
              </PagerLink>
            </PagerItem>
            {renderPager(props.current, totalPages)}
            <PagerItem key="Next">
              <PagerLink
                name="Next"
                disabled={props.current === totalPages}
                {...(props.current !== totalPages && linkProps(props.current + 1))}
              >
                Next
              </PagerLink>
            </PagerItem>
          </PagerList>
          {props.children}
        </PagerWrapper>
      )}
    </ThemeProvider>
  );
};

Pagination.defaultProps = {
  searchParam: 'page',
};

export default Pagination;

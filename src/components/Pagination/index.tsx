import React from 'react';
import styled, { css, ThemeProvider, withTheme } from 'styled-components';
import { BREAKPOINT, COLORS, TYPOGRAPHY, FONT_SIZES } from '../../themes/cruk';

type PaginationProps = {
  current: number;
  items: number;
  hideLast: boolean;
  pagerCallback: Function;
  perPage: number;
  searchParam?: string;
  theme: { pagination: {}; colors: {} };
  children: any;
};

type PaginationStyledProps = {
  active?: boolean;
  name?: string;
  disabled?: boolean;
};

const PagerWrapper = styled.div`
  display: table;
  width: 100%;
  clear: both;
  text-align: center;
`;
const PagerList = styled.ul`
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
`;
const PagerLink = styled.a`
  font-weight: normal;
  font-family: ${TYPOGRAPHY.fontFamilyBase};
  font-size: ${FONT_SIZES.small};
  color: ${props => props.theme.colors.textLight};
  background-color: ${props => props.theme.colors.primary};
  cursor: pointer;
  border-radius: 0;
  margin: 1px;
  padding: 7px 11px;
  text-decoration: none;
  &:hover{
    opacity: 0.88;
    text-decoration: underline;
  }
  &:focus,
  &:active, 
  &:visited {
    text-decoration: none;
  }
  
  ${(itemProps: PaginationStyledProps) =>
    itemProps.active &&
    css`
      color: ${props => props.theme.colors.textDark};
      background-color: ${({
        theme: {
          colors: { paginationActive },
        },
      }) => paginationActive};
      cursor: default;
      &:hover {
        background-color: ${({
          theme: {
            colors: { paginationActive },
          },
        }) => paginationActive};
        text-decoration: none;
      }
    `}
  ${itemProps =>
    (itemProps.name === 'Prev' || itemProps.name === 'Next') &&
    css`
      color: ${props => props.theme.colors.primary};
      background-color: transparent;
      font-weight: bold;
      padding: 8px 6px;
      background-color: transparent;
      &:hover {
        background-color: transparent;
        text-decoration: underline;
      }
      &:focus,
      &:active,
      &:visited {
        text-decoration: none;
      }
    `}
  ${itemProps =>
    itemProps.disabled &&
    css`
      color: ${props => props.theme.colors.paginationDisabled};
      cursor: not-allowed;
      text-decoration: none;
      &:hover,
      &:focus,
      &:active,
      &:visited {
        color: ${props => props.theme.colors.paginationDisabled};
        text-decoration: none;
      }
    `}
`;
const PagerItem = styled.li`
  display: none;
  &:first-child,
  &:last-child {
    display: inline;
  }
  @media (min-width: ${BREAKPOINT.mobile}) {
    display: inline;
  }
  span {
    border: none;
    min-width: 30px;
    padding: 5px;
    margin: 1px;
    border-radius: 0;
  }
`;

const Pagination = (props: PaginationProps) => {
  const theme = {
    colors: {
      ...COLORS,
      ...props.theme.colors,
    },
    pagination: props.theme.pagination,
  };
  const perPage = props.perPage > 0 ? props.perPage : 1;
  const totalPages = Math.ceil(props.items / perPage) || 1;
  const linkProps = (number: number) => ({
    href: `${window.location.pathname}?${props.searchParam}=${number}`,
    onClick: (e: any) => {
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
          <PagerLink active={number === active} {...linkProps(number)}>
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
    </ThemeProvider>
  );
};

Pagination.defaultProps = {
  searchParam: 'page',
  theme: {},
};

export default withTheme(Pagination);

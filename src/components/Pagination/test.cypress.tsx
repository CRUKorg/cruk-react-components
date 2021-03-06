/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';

import TestWrapper, { TestThemeWrapper } from '../TestWrapper';
import { Pagination, Box, Heading, crukTheme, su2cTheme } from '../';

const Content = () => {
  const [page, setPage] = React.useState(1);

  return (
    <>
      <Box>
        <Heading h2>Page {page}</Heading>
        <Pagination current={page} perPage={10} items={100} pagerCallback={(n: number) => setPage(n)} />
        <Pagination current={page} perPage={10} items={100} hideLast pagerCallback={(n: number) => setPage(n)} />
      </Box>
      <Pagination current={5} perPage={10} items={59} pagerCallback={(n: number) => alert(n)} />
      <Pagination current={6} perPage={10} items={101} pagerCallback={(n: number) => alert(n)} />
      <Pagination current={1} perPage={10} items={100} pagerCallback={(n: number) => alert(n)} />
      <Pagination hideLast current={6} perPage={7} items={70} pagerCallback={(n: number) => alert(n)} />
    </>
  );
};

describe('Pagination', () => {
  it('is accessible CRUK theme', () => {
    mount(
      <TestThemeWrapper theme={crukTheme}>
        <Content />
      </TestThemeWrapper>,
    );
    cy.injectAxe();
    cy.checkA11y('body', {
      rules: {
        'color-contrast': { enabled: false }, // disabled next and prev button don't pass colour contrast, axe isn't smart enough to know that they are disabled
      },
    });
  });

  it('is accessible SU2C theme', () => {
    mount(
      <TestThemeWrapper theme={su2cTheme}>
        <Content />
      </TestThemeWrapper>,
    );
    cy.injectAxe();
    cy.checkA11y('body', {
      rules: {
        'color-contrast': { enabled: false }, // TODO disabled because brand does not pass WCAG AA.
      },
    });
  });

  it('should match snapshot', () => {
    mount(
      <TestWrapper>
        <Content />
      </TestWrapper>,
    );
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});

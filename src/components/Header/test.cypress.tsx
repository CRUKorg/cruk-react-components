/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper from '../TestWrapper';
import { Header, Button } from '../';

const content = () => {
  return (
    <Header siteSlogan="Header slogan here">
      <Button>Child component</Button>
    </Header>
  );
};

describe('Header', () => {
  it('is accessible', () => {
    cy.viewport(1000, 480); // desktop breakpoint for full size header
    mount(
      <>
        <Header siteSlogan="Header slogan here">
          <Button>Child component</Button>
        </Header>
        <main id="main" tabIndex={-1}>
          blah
        </main>
      </>,
    );
    cy.injectAxe();
    cy.checkA11y('body', {
      rules: {
        'color-contrast': { enabled: false }, // TODO disabled because brand does not pass WCAG AA.
      },
    });
  });

  it('should match snapshot', () => {
    Cypress.config('waitForAnimations', true);
    Cypress.config('animationDistanceThreshold', 2);
    cy.viewport(1000, 480);
    mount(<TestWrapper>{content()}</TestWrapper>);
    // local only flake with snap happening before text has rendered hence the wait
    // this is probably caused be styled components and how it loads text from theme
    cy.wait(200);
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});

describe('Header Behaviour', () => {
  beforeEach(() => {
    cy.viewport(2000, 200);
    mount(
      <Header siteSlogan="Header slogan here">
        <Button>Child component</Button>
      </Header>,
    );
  });

  it('should scroll to main content', () => {
    cy.tab();
    cy.focused().should('have.text', 'Skip to main content');
    // can't test further than this without a page with some junk above main content
  });

  it('should alt text in link in logo image', () => {
    cy.tab();
    cy.tab();
    cy.focused()
      .find('img')
      .should('have.attr', 'alt', 'Cancer Research UK Giving Page');
  });

  it('should go to link in logo', () => {
    cy.tab();
    cy.tab();
    cy.focused().should('have.attr', 'href', '/');
  });

  it('should stick to the top of the page', () => {
    cy.get('header')
      .find('[data-cy="header-sticky-container"]')
      .should('have.css', 'height', '120px')
      .should('have.css', 'position', 'relative');
  });
});

describe('Header Sticky Behaviour', () => {
  beforeEach(() => {
    cy.viewport(2000, 200);
    mount(
      <>
        <Header siteSlogan="Header slogan here" isSticky={true}>
          <Button>Child component</Button>
        </Header>
        <div className="making-a-tall-scroll-able-page" style={{ height: 2000 }}></div>
      </>,
    );
  });

  it('should reduce to smaller height when not at top of page', () => {
    cy.window().scrollTo(0, 800);
    cy.get('header')
      .find('[data-cy="header-sticky-container"]')
      .should('have.css', 'height', '72px')
      .should('have.css', 'position', 'fixed')
      .should('have.css', 'top', '0px');
  });
});

/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';

import TestWrapper from '../TestWrapper';
import { Footer, Link } from '../';

const content = () => {
  return (
    <>
      <Footer>
        <Link appearance="secondary" href="https://www.cancerresearchuk.org/about-us/contact-us">
          Contact us
        </Link>
        <Link appearance="secondary" href="https://www.cancerresearchuk.org/privacy-statement">
          Privacy
        </Link>
      </Footer>

      <Footer middleSection="Cancer Research UK is a registered charity in England and Wales (1089464), Scotland (SC041666), the Isle of Man (1103) and Jersey (247). A company limited by guarantee. Registered company in England and Wales (4325234) and the Isle of Man (5713F).">
        <Link appearance="secondary" href="https://www.cancerresearchuk.org/about-us/contact-us">
          Contact us
        </Link>
        <Link appearance="secondary" href="https://www.cancerresearchuk.org/privacy-statement">
          Privacy
        </Link>
      </Footer>
    </>
  );
};

describe('Footer', () => {
  it('is accessible', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.injectAxe();
    cy.checkA11y('body', {
      rules: {
        'color-contrast': { enabled: false }, // TODO disabled because SU2C links do not pass WCAG AA.
        'landmark-unique': { enabled: false }, // TODO disabled because we have identical links on repeated for different themes.
      },
    });
  });

  it('should match snapshot', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});

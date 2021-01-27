/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper from '../TestWrapper';
import { PopOver, Button, Icon } from '../';

const internalContent = () => (
  <>
    <Button appearance="text" size="l" aria-label="Facebook">
      <Icon name="facebookSquare" color="#4267b2" size="1.5rem" />
    </Button>
    <Button appearance="text" size="l" aria-label="Twitter">
      <Icon name="twitterSquare" color="#1da1f2" size="1.5rem" />
    </Button>
    <Button appearance="text" size="l" aria-label="WhatsApp">
      <Icon name="whatsappSquare" color="#4dc247" size="1.5rem" />
    </Button>
    <Button appearance="text" size="l" aria-label="Facebook Messenger">
      <Icon name="messengerSquare" color="#288ef8" size="1.5rem" />
    </Button>
    <Button appearance="text" size="l" aria-label="LinkedIn">
      <Icon name="linkedin" color="#0077b5" size="1.5rem" />
    </Button>
    <Button appearance="text" size="l" aria-label="Email">
      <Icon name="envelopeSquare" color="#00b6ed" size="1.5rem" />
    </Button>
  </>
);

const content = () => (
  <>
    <PopOver overlay={internalContent()}>
      <Button>
        <Icon name="share" />
        Share top
      </Button>
    </PopOver>
    <PopOver position="topLeft" overlay={internalContent()}>
      <Button>
        <Icon name="share" />
        Share topLeft
      </Button>
    </PopOver>
    <PopOver position="bottom" overlay={internalContent()}>
      <Button>
        <Icon name="share" />
        Share bottom
      </Button>
    </PopOver>
    <PopOver position="bottomLeft" overlay={internalContent()}>
      <Button>
        <Icon name="share" />
        Share bottomLeft
      </Button>
    </PopOver>
    <PopOver position="left" overlay={internalContent()}>
      <Button>
        <Icon name="share" />
        Share left
      </Button>
    </PopOver>
    <PopOver position="right" overlay={internalContent()}>
      <Button>
        <Icon name="share" />
        Share right
      </Button>
    </PopOver>
  </>
);

describe('Popover', () => {
  it('is accessible', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.contains('Share left').click();
    cy.injectAxe();
    cy.checkA11y('body', {
      rules: {
        'color-contrast': { enabled: false }, // TODO disabled because brand does not pass WCAG AA.
      },
    });
  });

  it('should match snapshot share top', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.contains('Share top').click();
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
  it('should match snapshot share left', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.contains('Share left').click();
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
  it('should match snapshot share right', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.contains('Share right').click();
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
  it('should match snapshot share bottom', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.contains('Share bottom').click();
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
  it('should match snapshot share bottomLeft', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.contains('Share bottomLeft').click();
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
  it('should match snapshot share topLeft', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.contains('Share topLeft').click();
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});

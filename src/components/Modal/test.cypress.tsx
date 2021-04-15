/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';

import TestWrapper, { TestThemeWrapper } from '../TestWrapper';
import { Modal, Button, Heading, su2cTheme } from '../';

const ModalOnlyContent = () => (
  <Modal closeFunction={() => {}}>
    <Heading h2 marginTop="none" textSize="xl">
      Modal title
    </Heading>
    <p>Some really important information</p>
    <Button onClick={() => {}}>Get me out of here</Button>
    <Button appearance="primary" onClick={() => {}}>
      Go for it 😃
    </Button>
  </Modal>
);

const Content = () => {
  const [showModal, setShowModal] = React.useState(false);
  const toggleShowModal = () => setShowModal(!showModal);

  return (
    <>
      <Button appearance="primary" onClick={toggleShowModal}>
        Show me a modal
      </Button>
      {showModal && (
        <Modal closeFunction={toggleShowModal}>
          <Heading h2 marginTop="none" textSize="xl">
            Modal title
          </Heading>
          <p>Some really important information</p>
          <Button onClick={toggleShowModal}>Get me out of here</Button>
          <Button appearance="primary" onClick={toggleShowModal}>
            Go for it 😃
          </Button>
        </Modal>
      )}
    </>
  );
};

describe('Modal', () => {
  it('is accessible', () => {
    mount(
      <TestWrapper>
        <Content />
      </TestWrapper>,
    );
    cy.injectAxe();
    cy.checkA11y('body', {
      rules: {
        'color-contrast': { enabled: false }, // TODO disabled because brand does not pass WCAG AA.
      },
    });
  });

  it('should match CRUK snapshot', () => {
    Cypress.config('waitForAnimations', true);
    Cypress.config('animationDistanceThreshold', 2);
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    mount(<TestThemeWrapper>{ModalOnlyContent()}</TestThemeWrapper>);
    cy.get('[aria-modal="true"]')
      .first()
      .matchImageSnapshot();
  });
  it('should match SU2C snapshot', () => {
    Cypress.config('waitForAnimations', true);
    Cypress.config('animationDistanceThreshold', 2);
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    mount(<TestThemeWrapper theme={su2cTheme}>{ModalOnlyContent()}</TestThemeWrapper>);
    cy.get('[aria-modal="true"]')
      .first()
      .matchImageSnapshot();
  });
});

describe('Modal behviour', () => {
  beforeEach(() => {
    mount(<Content />);
  });

  it('should open modal, focus trap inside the modal', () => {
    cy.contains('Show me a modal').type('{enter}');
    cy.focused().should('have.attr', 'aria-label', 'close');
    cy.focused().tab();
    cy.focused().should('have.text', 'Get me out of here');
    cy.focused().tab();
    cy.focused().should('have.text', 'Go for it 😃');
    cy.focused().tab();
    cy.focused().should('have.attr', 'aria-label', 'close');
    cy.focused().tab({ shift: true });
    cy.focused().should('have.text', 'Go for it 😃');
    cy.focused().tab({ shift: true });
    cy.focused().should('have.text', 'Get me out of here');
    cy.focused().tab({ shift: true });
    cy.focused().should('have.attr', 'aria-label', 'close');
  });

  it('should close the modal when Esc key pressed', () => {
    cy.contains('Show me a modal').click();
    cy.get('body').type('{esc}');
    cy.get('[aria-label=close]').should('not.exist');
  });
});

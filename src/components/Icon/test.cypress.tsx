/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper from '../TestWrapper';
import { Icon } from '../';

const content = () => {
  return (
    <>
      <Icon name="question" />
      <Icon name="question" size="36px" color="primary" />
      <Icon name="question" size="48px" color="secondary" />
      <Icon name="calendar" />
      <Icon name="chevronLeft" />
      <Icon name="chevronRight" />
      <Icon name="chevronRightBold" />
      <Icon name="copy" />
      <Icon name="clock" />
      <Icon name="close" />
      <Icon name="comment" />
      <Icon name="delete" />
      <Icon name="edit" />
      <Icon name="envelope" />
      <Icon name="envelopeSquare" />
      <Icon name="eventName" />
      <Icon name="heartbeat" />
      <Icon name="facebook" />
      <Icon name="facebookRound" />
      <Icon name="facebookSquare" />
      <Icon name="flag" />
      <Icon name="linkedinSquare" />
      <Icon name="linkedin" />
      <Icon name="messengerSquare" />
      <Icon name="move" />
      <Icon name="moveDown" />
      <Icon name="moveLeft" />
      <Icon name="moveRight" />
      <Icon name="moveUp" />
      <Icon name="poundSign" />
      <Icon name="question" />
      <Icon name="rotateLeft" />
      <Icon name="rotateRight" />
      <Icon name="search" />
      <Icon name="selectImage" />
      <Icon name="settings" />
      <Icon name="share" />
      <Icon name="shareSquare" />
      <Icon name="team" />
      <Icon name="twitter" />
      <Icon name="twitterSquare" />
      <Icon name="uploadPhoto" />
      <Icon name="view" />
      <Icon name="whatsappSquare" />
      <Icon name="zoomIn" />
      <Icon name="zoomOut" />
    </>
  );
};

describe('Icon', () => {
  it('is accessible', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.injectAxe();
    cy.checkA11y('body');
  });

  it('should match snapshot', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});

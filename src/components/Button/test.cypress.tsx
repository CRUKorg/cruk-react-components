/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';

import TestWrapper from '../TestWrapper';
import { Button, Icon } from '../';

const content = () => {
  return (
    <>
      <Button appearance="primary">Primary</Button>
      <Button appearance="secondary">Secondary</Button>
      <Button appearance="tertiary">Tertiary</Button>
      <Button disabled appearance="primary">
        Disabled primary
      </Button>
      <Button disabled appearance="secondary">
        Disabled secondary
      </Button>
      <Button disabled appearance="tertiary">
        Disabled secondary
      </Button>
      <Button size="l">Large button</Button>
      <Button>
        <Icon name="view" />
        Icon with text
      </Button>
      <Button>
        Icon right
        <Icon name="edit" />
      </Button>
      <Button>
        <Icon name="view" />
        Icon either side
        <Icon name="view" />
      </Button>
      <Button href="https://www.styled-components.com/">Link as Button</Button>
      <Button appearance="text">Text style button</Button>
      <Button aria-label="Upload a photo">
        <Icon name="uploadPhoto" />
      </Button>
      <Button css="background-color: #4267b2;border-color: #4267b2; color: white !important; :hover {background-color: #365899; border-color:  #365899; color: white !important;}">
        <Icon name="facebookSquare" size="18px" />
        Continue with facebook
      </Button>
      <Button full>Full width Button</Button>
    </>
  );
};

describe('Button', () => {
  it('is accessible', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.injectAxe();
    cy.checkA11y('body', {
      rules: {
        'color-contrast': { enabled: false }, // TODO disabled because brand does not pass WCAG AA.
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

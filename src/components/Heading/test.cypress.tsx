/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';

import TestWrapper, { TestThemeWrapper } from '../TestWrapper';
import { Heading, crukTheme, su2cTheme } from '../';

const content = () => {
  return (
    <>
      <Heading>H2 is the default</Heading>
      <Heading h2 textSize="xxxxl" textColor="primary">
        This is H2 with H1 size
      </Heading>
      <Heading h1>This is H1 heading</Heading>
      <Heading h2>This is H2 heading</Heading>
      <Heading h3 textColor="#ff00ff">
        This is H3 heading
      </Heading>
      <Heading h4>This is H4 heading</Heading>
      <Heading h5>This is H5 heading</Heading>
      <Heading h6>This is H6 heading</Heading>
      <Heading textAlign="center">This is center aligned</Heading>
      <Heading textAlign="right">This is right aligned</Heading>
    </>
  );
};

describe('Heading', () => {
  it('is accessible CRUK theme', () => {
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.injectAxe();
    cy.checkA11y('body');
  });

  it('is accessible SU2C theme', () => {
    mount(<TestThemeWrapper theme={su2cTheme}>{content()}</TestThemeWrapper>);
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

describe('H1 Styles', ()=>{
  it('should have Font size 32px for mobile and tablets devices',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.viewport(576,750)
    cy.contains('This is H1 heading')
    .should('have.css','font-size','32px')
    cy.viewport(767,1028)
    cy.contains('This is H1 heading')
    .should('have.css','font-size','32px')
  })

  it('should have Font size 40px for desktops',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.viewport(768,1000)
    cy.contains('This is H1 heading')
    .should('have.css','font-size','40px')
    cy.viewport(991,1028)
    cy.contains('This is H1 heading')
    .should('have.css','font-size','40px')
  })

  it('should have Font size 50px for large desktops',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.viewport(992,1000)
    cy.contains('This is H1 heading')
    .should('have.css','font-size','50px')
    cy.viewport(1200,1028)
    cy.contains('This is H1 heading')
    .should('have.css','font-size','50px')
  })

  it('should have Font weight 500 ',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.viewport(576,1000)
    cy.contains('This is H1 heading')
    .should('have.css','font-weight','500')
    cy.viewport(1200,1028)
    cy.contains('This is H1 heading')
    .should('have.css','font-weight','500')
  })
})

describe('H2 Styles', ()=>{
  it('should have Font size 25px for mobile  devices',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.viewport(576,750)
    cy.contains('This is H2 heading')
    .should('have.css','font-size','25px')
    cy.viewport(767,1028)
    cy.contains('This is H2 heading')
    .should('have.css','font-size','25px')
  })

  it('should have Font size 32px for tablets and desktops',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.viewport(768,1028)
    cy.contains('This is H2 heading')
    .should('have.css','font-size','32px')
    cy.viewport(991,1028)
    cy.contains('This is H2 heading')
    .should('have.css','font-size','32px')
  })

  it('should have Font size 40px for large desktops',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.viewport(992,1000)
    cy.contains('This is H2 heading')
    .should('have.css','font-size','40px')
    cy.viewport(1200,1028)
    cy.contains('This is H2 heading')
    .should('have.css','font-size','40px')
  })

  it('should have Font weight 500 ',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.viewport(576,1000)
    cy.contains('This is H2 heading')
    .should('have.css','font-weight','500')
    cy.viewport(1200,1028)
    cy.contains('This is H2 heading')
    .should('have.css','font-weight','500')
  })
})

describe('H3 Styles', ()=>{
  it('should have Font size 20px for mobile and tablets',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.viewport(576,750)
    cy.contains('This is H3 heading')
    .should('have.css','font-size','20px')
    cy.viewport(767,1028)
    cy.contains('This is H3 heading')
    .should('have.css','font-size','20px')
  })

  it('should have Font size 25px for desktops',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.viewport(768,1028)
    cy.contains('This is H3 heading')
    .should('have.css','font-size','25px')
    cy.viewport(991,1028)
    cy.contains('This is H3 heading')
    .should('have.css','font-size','25px')
  })

  it('should have Font size 32px for large desktops',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.viewport(992,1000)
    cy.contains('This is H3 heading')
    .should('have.css','font-size','32px')
    cy.viewport(1200,1028)
    cy.contains('This is H3 heading')
    .should('have.css','font-size','32px')
  })

  it('should have Font weight 500 ',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.viewport(576,1000)
    cy.contains('This is H3 heading')
    .should('have.css','font-weight','500')
    cy.viewport(1200,1028)
    cy.contains('This is H3 heading')
    .should('have.css','font-weight','500')
  })
})

describe('H4 Styles', ()=>{
  it('should have Font size 20px for mobile, tablets and desktops',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.viewport(576,750)
    cy.contains('This is H4 heading')
    .should('have.css','font-size','20px')
    cy.viewport(767,1028)
    cy.contains('This is H4 heading')
    .should('have.css','font-size','20px')
    cy.viewport(991,1028)
    cy.contains('This is H4 heading')
    .should('have.css','font-size','20px')
  })

  it('should have Font size 25px for large desktops',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.viewport(992,1028)
    cy.contains('This is H4 heading')
    .should('have.css','font-size','25px')
    cy.viewport(1200,1028)
    cy.contains('This is H4 heading')
    .should('have.css','font-size','25px')
  })

  it('should have Font weight 500 ',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.viewport(576,1000)
    cy.contains('This is H4 heading')
    .should('have.css','font-weight','500')
    cy.viewport(1200,1028)
    cy.contains('This is H4 heading')
    .should('have.css','font-weight','500')
  })
})

describe('H5 Styles', ()=>{
  it('should have Font size 20px for mobile, tablets ,desktops and large desktops',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.viewport(576,750)
    cy.contains('This is H5 heading')
    .should('have.css','font-size','20px')
    cy.viewport(687,1028)
    cy.contains('This is H5 heading')
    .should('have.css','font-size','20px')
    cy.viewport(992,1028)
    cy.contains('This is H5 heading')
    .should('have.css','font-size','20px')
  })

  it('should have Font weight 500 ',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.viewport(576,1000)
    cy.contains('This is H5 heading')
    .should('have.css','font-weight','500')
    cy.viewport(1200,1028)
    cy.contains('This is H5 heading')
    .should('have.css','font-weight','500')
  })
})

describe('H6 Styles', ()=>{
  it('should have Font size 16px for mobile, tablets ,desktops and large desktops',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.viewport(576,750)
    cy.contains('This is H6 heading')
    .should('have.css','font-size','16px')
    cy.viewport(687,1028)
    cy.contains('This is H6 heading')
    .should('have.css','font-size','16px')
    cy.viewport(992,1028)
    cy.contains('This is H6 heading')
    .should('have.css','font-size','16px')
  })

  it('should have Font weight 500 ',()=>{
    mount(<TestThemeWrapper theme={crukTheme}>{content()}</TestThemeWrapper>);
    cy.viewport(576,1000)
    cy.contains('This is H6 heading')
    .should('have.css','font-weight','500')
    cy.viewport(1200,1028)
    cy.contains('This is H6 heading')
    .should('have.css','font-weight','500')
  })
})
/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';

import TestWrapper, { TestThemeWrapper } from '../TestWrapper';
import { Select, Box, Button, su2cTheme, crukTheme } from '../';

const content = () => {
  return (
    <>
      <Box>
        <Select value="" label="Disabled option" onChange={event => {}}>
          <option disabled value="">
            --Please choose an option--
          </option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </Select>
      </Box>
      <Box>
        <Select value="" label="Disabled control" onChange={event => {}} disabled>
          <option disabled value="">
            --Please choose an option--
          </option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </Select>
      </Box>
      <Box>
        <Select required hasError={true} label="Has error" onChange={event => {}}>
          <option value="dog">Dog</option>
          <option value="red_panda">Red panda</option>
          <option value="axolotl">Axolotl</option>
        </Select>
      </Box>
      <Box>
        <Select required errorMessage="This felid is required ☹️" label="Error message" onChange={event => {}}>
          <option value="cat">Cat</option>
        </Select>
      </Box>
    </>
  );
};

const selectSection = () =>{
  return (
    <Select label="Test Select Option">
      <option disabled value="">Please select one of the below</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
    </Select>
  )
}

describe('Select', () => {
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
    cy.document()
      .its('fonts.status')
      .should('equal', 'loaded');
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});


describe('Select Behavior', () => {
  it('should be able to select an option from select list', () => {
    mount(<TestThemeWrapper theme={crukTheme}>{selectSection()}</TestThemeWrapper>);
    cy.get('.sc-dkQUaI.bxnKRO').select('Cat').should('have.value','cat')
  });
});

describe('Arrow Keys', ()=>{
  it('expands the listbox and selects the next option.', () => {
    mount(<TestThemeWrapper theme={crukTheme}>{selectSection()}</TestThemeWrapper>)
    cy.get('.sc-dkQUaI').type("{enter}").type("{downarrow}").select("Cat").should('have.value','cat');
});

it('expands the listbox and selects the previous option.', () => {
  mount(<TestThemeWrapper theme={crukTheme}>{selectSection()}</TestThemeWrapper>)
  cy.get('.sc-dkQUaI').find('option').then($elm => $elm.get(2).setAttribute('selected',"selected"))
  cy.get('.sc-dkQUaI').type("{enter}").type("{uparrow}").select("Dog").should('have.value','dog');
});
})

describe('Tab', ()=>{
  it('Tab should move the focus to the next focusable element.', () => {
    mount(<TestThemeWrapper theme={crukTheme}>{
      <><Box>
        <Select label="Test Select Option">
          <option disabled value="">Please select one of the below</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </Select>
      </Box><Box>
          <Button>Click me</Button>
        </Box><Box>
          <Button>Click</Button>
        </Box></>

      }</TestThemeWrapper>);
    cy.get('.sc-dkQUaI').tab();
    cy.focused().should('have.text','Click me').tab({shift:true});
    cy.focused().should('have.descendants','option').and('include.text','Please select one of the below')
  })
});


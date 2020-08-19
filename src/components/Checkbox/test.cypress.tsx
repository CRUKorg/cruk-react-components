/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper from '../TestWrapper';
import { Box, Checkbox, Heading } from '../';

const unControlledContent = () => (
  <>
    <Box>
      <Checkbox name="example" value="one" checked={true}>
        Option one
      </Checkbox>
    </Box>
    <Box>
      <Checkbox name="example" value="two">
        Option two
      </Checkbox>
    </Box>
  </>
);
const Content = () => {
  const [selected, setSelected] = React.useState([]);
  const handleChange = (value: string) => {
    if (selected.indexOf(value) === -1) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter(item => item !== value));
    }
  };

  return (
    <>
      <Box>
        <Checkbox
          name="example"
          onChange={e => handleChange(e.target.value)}
          value="one"
          checked={selected.indexOf('one') >= 0}
        >
          Option one
        </Checkbox>
      </Box>
      <Box>
        <Checkbox
          name="example"
          onChange={e => handleChange(e.target.value)}
          value="two"
          checked={selected.indexOf('two') >= 0}
        >
          Option two
        </Checkbox>
      </Box>

      <Heading h3>Selected values</Heading>
      <ul>
        {selected.map(value => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </>
  );
};

describe('Checkbox', () => {
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

  it('should match snapshot', () => {
    Cypress.config('waitForAnimations', true);
    Cypress.config('animationDistanceThreshold', 2);
    mount(<TestWrapper>{unControlledContent()}</TestWrapper>);
    cy.get('body')
      .first()
      .matchImageSnapshot();
  });
});

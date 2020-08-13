/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import TestWrapper from '../TestWrapper';
import { AddressLookup, Box, TextField } from '../';

const content = () => {
  const [validated, setValidated] = React.useState(false);
  const [line1, setLine1] = React.useState('');
  const [line2, setLine2] = React.useState('');
  const [line3, setLine3] = React.useState('');
  const [city, setCity] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');

  const handleAddressSelected = (address: any) => {
    setValidated(true);
    setLine1(address.Line1);
    setLine2(address.Line2);
    setLine3(address.Line3);
    setCity(address.City);
    setPostalCode(address.PostalCode);
  };

  return (
    <>
      <fieldset>
        <legend>Your Address</legend>
        <p>
          Example wired up to a simple form, with controlled inputs. For production use we recomend using useing Formic
          and Yup for form management and validation
        </p>
        <Box>
          <AddressLookup
            apiKey="MG17-ZD93-FF33-KF13"
            onAddressSelected={handleAddressSelected}
            onChange={e => {
              setValidated(false);
              setLine1(e.target.value);
            }}
            value={line1}
          />
        </Box>
        <Box>
          <TextField
            onChange={e => {
              setValidated(false);
              setLine2(e.target.value);
            }}
            label="Address line 2"
            value={line2}
          />
        </Box>
        <Box>
          <TextField
            onChange={e => {
              setValidated(false);
              setLine3(e.target.value);
            }}
            label="Address line 3"
            value={line3}
          />
        </Box>
        <Box>
          <TextField
            onChange={e => {
              setValidated(false);
              setCity(e.target.value);
            }}
            label="City"
            value={city}
            required
          />
          <Box></Box>
          <TextField
            onChange={e => {
              setValidated(false);
              setPostalCode(e.target.value);
            }}
            label="Postcode"
            value={postalCode}
            required
          />
        </Box>
        <pre>{JSON.stringify({ validated }, null, 2)}</pre>
      </fieldset>
    </>
  );
};

describe('AddressLookup', () => {
  it('is accessible', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.get('body')
      .first()
      .within($list => {
        cy.getInputByLabel('Home address')
          .type('N10')
          .blur();
        cy.contains('li', 'N17 0AB High Road, London - 14 Addresses').should('exist');
      });
    cy.injectAxe();
    cy.checkA11y('body', {
      rules: {
        'color-contrast': { enabled: false }, // TODO disabled because brand does not pass WCAG AA.
      },
    });
  });

  it('should match snapshot', () => {
    mount(<TestWrapper>{content()}</TestWrapper>);
    cy.getInputByLabel('Home address')
      .type('N10')
      .blur();
    cy.contains('li', 'N17 0AB High Road, London - 14 Addresses').should('exist');
    cy.get('body')
      .first()
      .matchImageSnapshot({
        customSnapshotsDir: './cypress/snapshots',
        customDiffDir: './cypress/snapshots/diff',
      });
  });
});

declare namespace Cypress {
  interface Chainable {
    injectAxe(): Chainable;
    checkA11y(context?: any, options?: any, violationCallback?: any, skipFailures?: boolean): Chainable;
    percySnapshot(name?: string, options?: Object): Chainable;
    matchImageSnapshot(nameOrOptions?: string | Object): Chainable;
    getInputByLabel(input: string): Chainable;
    tab(options?: Partial<{ shift: Boolean }>): Chainable;
  }
}

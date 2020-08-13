declare namespace Cypress {
  interface Chainable {
    injectAxe(): void;
    checkA11y(context?: any, options?: any, violationCallback?: any, skipFailures?: boolean): void;
    matchImageSnapshot(nameOrOptions?: string | Object): void;
    getInputByLabel(input: string): any;
  }
}

declare module "*.md";

declare namespace Cypress {
  interface Chainable {
    injectAxe(): Chainable;
    checkA11y(
      context?: any,
      options?: any,
      violationCallback?: any,
      skipFailures?: boolean
    ): Chainable;
    // eslint-disable-next-line @typescript-eslint/ban-types
    matchImageSnapshot(nameOrOptions?: string | Object): Chainable;
    getInputByLabel(input: string): Chainable;
    tab(options?: Partial<{ shift: boolean }>): Chainable;
  }
}

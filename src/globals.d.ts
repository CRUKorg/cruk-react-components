declare module "*.md";

declare namespace Cypress {
  interface Chainable {
    getInputByLabel(input: string): Chainable;
    tab(options?: Partial<{ shift: boolean }>): Chainable;
  }
}

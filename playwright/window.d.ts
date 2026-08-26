export {};

// Contract implemented by playwright/index.tsx and driven by the `mount` fixture in playwright/fixtures.ts.
declare global {
  interface Window {
    mount: (params: {
      story: string;
      props?: Record<string, unknown>;
    }) => Promise<void>;
    unmount: () => Promise<void>;
  }
}

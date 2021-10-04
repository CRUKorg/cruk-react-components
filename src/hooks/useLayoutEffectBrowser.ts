import { useLayoutEffect, EffectCallback, DependencyList } from "react";

const isBrowser = typeof window !== `undefined`;

// The sole purpose of this hook is to silence pointless warnings in next.js when using
// useLayoutEffect about it not being isomorphic which is the whole point of the hook
// which waits for components to be mounted to the DOM for scroll handlers etc.
export function useLayoutEffectBrowser(
  action: EffectCallback,
  deps: DependencyList
) {
  if (!isBrowser) return null;
  return useLayoutEffect(action, deps);
}

export default useLayoutEffectBrowser;

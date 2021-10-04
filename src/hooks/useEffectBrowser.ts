import { useEffect, EffectCallback, DependencyList } from "react";

const isBrowser = typeof window !== `undefined`;

// this is a useEffect hook which automatically checks if the code is running
// in the browser before executing the action
export function useEffectBrowser(action: EffectCallback, deps: DependencyList) {
  if (!isBrowser) return null;
  return useEffect(action, deps);
}

export default useEffectBrowser;

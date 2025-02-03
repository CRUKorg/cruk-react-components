import { useEffect, type EffectCallback, type DependencyList } from "react";

// this is a useEffect hook which automatically checks if the code is running
// in the browser before executing the action
export function useEffectBrowser(action: EffectCallback, deps: DependencyList) {
  useEffect(() => {
    if (typeof window === `undefined`) return;
    return action();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps]);
}

export default useEffectBrowser;

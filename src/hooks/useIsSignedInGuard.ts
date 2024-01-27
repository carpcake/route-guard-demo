import { RouteGuardFunction } from "@/components/RouteGuard";
import { useCallback } from "react";

export function useIsSignedInGuard(redirectTo: string) {
  const isSignedInGuard: RouteGuardFunction = useCallback(async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.random() < 0.5 || redirectTo);
      }, 1000);
    });
  }, []);

  return isSignedInGuard;
}

import { RouteGuardFunction } from "@/components/RouteGuard";
import { useCallback } from "react";

export function useIsActiveOrganization(redirectTo: string) {
  const isActiveOrganization: RouteGuardFunction = useCallback(async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.random() < 0.5 || redirectTo);
      }, 1000);
    });
  }, []);

  return isActiveOrganization;
}

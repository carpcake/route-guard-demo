import { useRouter } from "next/router";
import { PropsWithChildren, useCallback, useEffect, useState } from "react";

export type RouteGuardFunction = () => Promise<boolean | string>;

export interface RouteGuardOptions extends PropsWithChildren {
  guards: RouteGuardFunction[];
}

export const RouteGuard = (opts: RouteGuardOptions) => {
  const { guards } = opts;

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkCanActivate = async () => {
      const results = await Promise.all(guards.map((guard) => guard()));
      const redirectPath = results.find((result) => typeof result === "string");
      return redirectPath === undefined ? true : redirectPath;
    };

    checkCanActivate().then((result) => {
      console.log(result);

      if (typeof result === "string") {
        router.push(result);
      }

      setIsLoading(false);
    });
  }, [router, guards]);

  if (isLoading) {
    return <>Loading...</>;
  }

  return <>{opts.children}</>;
};

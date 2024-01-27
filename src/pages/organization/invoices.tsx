import { RouteGuard } from "@/components/RouteGuard";
import { useIsActiveOrganization } from "@/hooks/useIsActiveOrganization";
import { useIsSignedInGuard } from "@/hooks/useIsSignedInGuard";

export default function Page() {
  const isSignedInGuard = useIsSignedInGuard("/signin");
  const isActiveOrgGuard = useIsActiveOrganization("/organization/inactive");

  return (
    <RouteGuard guards={[isSignedInGuard, isActiveOrgGuard]}>
      <div>Invoices</div>
    </RouteGuard>
  );
}

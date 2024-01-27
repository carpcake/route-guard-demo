import { RouteGuard } from "@/components/RouteGuard";
import { useIsActiveOrganization } from "@/hooks/useIsActiveOrganization";

export default function Page() {
  const isActiveOrgGuard = useIsActiveOrganization("/organization/inactive");

  return (
    <RouteGuard guards={[isActiveOrgGuard]}>
      <div>
        <h1>Organization</h1>
        <p>
          This is the organization page. You should only be able to see this page if your
          organization is active.
        </p>
      </div>
    </RouteGuard>
  );
}

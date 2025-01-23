import { CardSkeleton } from "@/components/card-skeleton";
import DashboardHeader from "@/components/dashboard-header";

export default function DashboardLoading() {
  return (
    <DashboardHeader title="Dashboar" goBack={true} isCreate={true}>
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardHeader>
  );
}

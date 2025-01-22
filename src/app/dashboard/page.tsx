import DashboardCard from "@/components/dashboard-card";
import DashboardHeader from "@/components/dashboard-header";

export default function Dashboard() {
  return (
    <div>
      <div className="px-10 py-12">
        <DashboardCard>
          <DashboardHeader title="Dashboard"></DashboardHeader>
        </DashboardCard>
      </div>
    </div>
  );
}

import DashboardHeader from "@/components/dashboard-header";

import metadata from "./metadata.json";
import { Card } from "@/components/ui/card";

export default function ExtratoDeServicos() {
  return (
    <div>
      <DashboardHeader
        title={metadata.title}
        description={metadata.description}
        goBack={true}
      >
        <Card className="mt-10 max-w-7xl min-h-96"></Card>
      </DashboardHeader>
    </div>
  );
}

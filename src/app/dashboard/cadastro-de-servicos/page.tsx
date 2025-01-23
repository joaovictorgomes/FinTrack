import DashboardHeader from "@/components/dashboard-header";

import metadata from "./metadata.json";
import { Card } from "@/components/ui/card";

export default function CadastroDeServicos() {
  return (
    <div>
      <DashboardHeader
        title={metadata.title}
        description={metadata.description}
        goBack={true}
        isCreate={true}
      >
        <Card className="mt-10 max-w-4xl min-h-96"></Card>
      </DashboardHeader>
    </div>
  );
}

import DashboardHeader from "@/components/dashboard-header";

import metadata from "./metadata.json";

export default function CadastroDeServicos() {
  return (
    <div>
      <DashboardHeader
        title={metadata.title}
        description={metadata.description}
        goBack={true}
        isCreate={true}
      ></DashboardHeader>
    </div>
  );
}

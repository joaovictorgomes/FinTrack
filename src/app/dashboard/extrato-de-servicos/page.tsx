import DashboardHeader from "@/components/dashboard-header";

import metadata from "./metadata.json"

export default function ExtratoDeServicos() {

  return (
    <div>
     <DashboardHeader title={metadata.title} description={metadata.description} goBack={true}>
      teste
     </DashboardHeader>
    </div>
  );
}

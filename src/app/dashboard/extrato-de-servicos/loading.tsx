import { CardSkeleton } from "@/components/card-skeleton";
import { metadata } from "../layout";
import DashboardHeader from "@/components/dashboard-header";

export default function DashboardLoading() {
  return (
    <DashboardHeader
      title={String(metadata.title) ?? "Extrato de Serviço"}
      description={
        metadata.description ??
        "Acompanhe e gerencie os detalhes dos seus serviços realizados. Visualize informações completas sobre seus extratos de serviço de maneira simples e eficiente."
      }
      goBack={true}
      isCreate={true}
    >
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardHeader>
  );
}

import { CardSkeleton } from "@/components/card-skeleton";
import { metadata } from "../layout";
import DashboardHeader from "@/components/dashboard-header";

export default function DashboardLoading() {
  return (
    <DashboardHeader
      title={String(metadata.title) ?? "Cadastro de Serviços"}
      description={metadata.description ?? "Gerencie o cadastro de serviços de forma simples e eficiente. Adicione, edite e visualize serviços cadastrados no sistema."}
      goBack={true}
      isCreate={true}
    >
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardHeader>
  );
}

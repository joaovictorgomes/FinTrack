"use client";

import Link from "next/link";
import GoBack from "./go-back";
import { Button } from "./ui/button";

interface DashboardHeaderProps {
  title: string;
  description?: string;
  isCreate?: boolean;
  goBack?: boolean;
  children?: React.ReactNode;
}

export default function DashboardHeader({
  title,
  description,
  isCreate = false,
  goBack = false,
  children,
}: DashboardHeaderProps) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="mt-4 flex items-center gap-4">
          {goBack && <GoBack />}
          <div className="flex flex-col items-start pt-6">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-md text-gray-500">{description}</p>
          </div>
        </div>
        {isCreate && (
          <Button variant="default" size="sm" className="bg-blue-500">
            <Link href="/dashboard/cadastro-de-servicos/create">Create</Link>
          </Button>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}

interface DashboardCardProps {
  children?: React.ReactNode;
}

export default function DashboardCard({ children }: DashboardCardProps) {
  return (
    <div className="w-full h-screen px-4 py-6 bg-neutral-950 text-white border-white border-opacity-10 border-2 rounded-md ">
      {children}
    </div>
  );
}

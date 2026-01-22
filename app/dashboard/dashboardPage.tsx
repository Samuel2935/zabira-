import StatCard from "@/components/StatCard";

export default function DashboardPage() {
  return (
    <div className="flex gap-6">
      <StatCard title="Users" value="12,450" />
      <StatCard title="Revenue" value="₦3.2M" />
      <StatCard title="Transactions" value="8,921" />
    </div>
  );
}

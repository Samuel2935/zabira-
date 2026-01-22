import BalanceCard from "@/components/BalanceCard";
import AssetCard from "@/components/AssetCard";

export default function DashboardPage() {
  return (
    <div className="flex gap-2 bg-white p-4 rounded-md">
      <BalanceCard balance={125000} currencyCode="NGN" />
      <AssetCard />
    </div>
  );
}

import BalanceCard from "@/components/BalanceCard";
import TradeAssetComponent from "@/components/TradeAssetComponent";
export default function DashboardPage() {
  return (
    <div className="dashboard">
      <div className="flex gap-2 bg-white p-4 rounded-md">
        <BalanceCard balance={125000} currencyCode="NGN" />
        <TradeAssetComponent />
      </div>
    </div>
  );
}

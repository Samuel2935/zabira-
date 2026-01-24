import BalanceCard from "@/components/BalanceCard";
import PaymentModeComponent from "@/components/PaymentModeComponent";
import Section from "@/components/Section";
import TradeAssetComponent from "@/components/TradeAssetComponent";
export default function DashboardPage() {
  return (
    <div className="dashboard">
      <div className="flex gap-2 bg-white p-4 rounded-md w-[1208px] h-[286px] mx-auto">
        <BalanceCard balance={125000} currencyCode="NGN" />
        <TradeAssetComponent />
      </div>
      <Section/>
      <PaymentModeComponent />
    </div>
  );
}

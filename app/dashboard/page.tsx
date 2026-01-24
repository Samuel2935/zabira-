import BalanceCard from "@/components/BalanceCard";
import Info from "@/components/Info";
import PaymentModeComponent from "@/components/PaymentModeComponent";
import Section from "@/components/Section";
import TradeAssetComponent from "@/components/TradeAssetComponent";
import TransactionTable from "@/components/TransactionTable";
import { transactions } from "../config/transaction";
import Image from "next/image";
import MerchantComponent from "@/components/MerchantComponent";
export default function DashboardPage() {
  return (
    <div className="dashboard">
      <div className="flex gap-2 bg-white p-4 rounded-md w-302 h-71.5 mx-auto">
        <BalanceCard balance={125000} currencyCode="NGN" />
        <TradeAssetComponent />
      </div>
      <Section/>
      <PaymentModeComponent />
      <Info/>
      <div>
        <Image src="/ProgressSegmented.png" alt="" width={87.69} height={4.38} className="gap-[13.15px] mx-auto mt-4"/>
      </div>
      <TransactionTable transactions={transactions} />
      <MerchantComponent/>
    </div>
  );
}

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
    <div className="">
      <div className="flex flex-col md:flex-row gap-2 bg-white p-4 rounded-md w-full h-auto mx-auto">
        <BalanceCard balance={125000} currencyCode="NGN" />
        <TradeAssetComponent />
      </div>

      <Section />
      <PaymentModeComponent />
      <Info />
      <div>
        <Image
          src="/ProgressSegmented.png"
          alt=""
          width={87.69}
          height={4.38}
          className="gap-2 mx-auto mt-4"
        />
      </div>
      <TransactionTable transactions={transactions} />
      <MerchantComponent />
    </div>
  );
}

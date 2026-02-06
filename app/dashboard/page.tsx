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
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 w-full bg-white p-6 rounded-md">
          <BalanceCard balance={125000} currencyCode="NGN" />

          <div className="w-full md:w-[60%] min-w-0">
            <TradeAssetComponent />
          </div>
        </div>

        <Section />
        <PaymentModeComponent />
        <Info />

        <div className="flex justify-center mt-4">
          <Image
            src="/ProgressSegmented.png"
            alt=""
            width={88}
            height={5}
            className="max-w-full h-auto"
          />
        </div>

        <TransactionTable transactions={transactions} />
        <MerchantComponent />
      </div>
    </div>
  );
}

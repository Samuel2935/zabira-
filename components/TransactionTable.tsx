"use client";

import { ArrowDown, ArrowUp, ChevronRight } from "lucide-react";
import { Transaction } from "@/app/types/transaction";

function getCurrencySymbol(channel: Transaction["channel"]) {
  const cryptoChannels = ["Crypto Pay", "Crypto"];
  const airtimeChannels = ["Airtime"];
  const giftcardChannels = ["Giftcard Sell", "Giftcard"];
  const fiatChannels = ["Fiat", "Bank", "Card", "Wallet"];

  if (cryptoChannels.includes(channel)) return "BTC";
  if (airtimeChannels.includes(channel)) return "USDT";
  if (giftcardChannels.includes(channel)) return "NGN";
  if (fiatChannels.includes(channel)) return "NGN";

  return "NGN";
}

function StatusBadge({ status }: { status: Transaction["status"] }) {
  const styles = {
    success: "bg-[#EFFBF7] text-[#0CAF60] px-2 py-1 h-[27px] w-[65px] rounded-sm",
    pending: "bg-[#FFF0E6] text-[#FE964A] px-2 py-1 h-[27px] w-[65px] rounded-sm",
    cancelled: "bg-[#FFF0F0] text-[#FD6A6A] px-2 py-1 h-[27px] w-[65px] rounded-sm",
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${styles[status]}`}>
      {status}
    </span>
  );
}

export default function TransactionTable({
  transactions,
}: {
  transactions: Transaction[];
}) {
  return (
    <div className=" rounded-md border w-302 h-113.5 px-6 pb-2 pt-6 bg-white mt-6">
        <div className="flex justify-between border-b w-290 h-11 bg-[#FCFCFC] py-2 px-3">
            <p className="text-[#1A1A1A] font-bold leading-1.5">Recent Transactions</p>
            <div className="flex gap-0.5 text-[#0044EE] font-semibold cursor-pointer">
                <span>View All</span>
                <ChevronRight/>
            </div>
        </div>
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-500">
          <tr>
            <th className="px-4 py-3 text-left">Channel</th>
            <th className="px-4 py-3 text-left">Type</th>
            <th className="px-4 py-3 text-right">Amount</th>
            <th className="px-4 py-3 text-right">Fee</th>
            <th className="px-4 py-3 text-right">Total</th>
            <th className="px-4 py-3 text-left">Reference ID</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Date</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {transactions.map((tx) => {
            const isDeposit = tx.type === "Deposit";
            const symbol = getCurrencySymbol(tx.channel);

            return (
              <tr key={tx.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{tx.channel}</td>

                <td className="px-4 py-3">
                  <div
                    className={`flex items-center gap-2 font-medium ${
                      isDeposit ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {isDeposit ? <ArrowDown size={16} /> : <ArrowUp size={16} />}
                    {tx.type}
                  </div>
                </td>

                <td className="px-4 py-3 text-right font-medium">
                  {tx.amount.toLocaleString()} {symbol}
                </td>

                <td className="px-4 py-3 text-right text-gray-500">
                  {tx.fee.toLocaleString()} {symbol}
                </td>

                <td className="px-4 py-3 text-right font-semibold">
                  {tx.total.toLocaleString()} {symbol}
                </td>

                <td className="px-4 py-3 font-mono text-xs">{tx.reference}</td>

                <td className="px-4 py-3">
                  <StatusBadge status={tx.status} />
                </td>

                <td className="px-4 py-3 text-gray-500">
                  <div className="flex flex-col">
                    <span>{new Date(tx.date).toLocaleDateString()}</span>
                    <span className="text-xs text-gray-400">
                      {new Date(tx.date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

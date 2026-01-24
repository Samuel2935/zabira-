"use client";

import { ArrowDown, ArrowUp, ChevronRight } from "lucide-react";
import { Transaction } from "@/app/types/transaction";

/* ---------------------------------- */
/* Helpers */
/* ---------------------------------- */

function getCurrencySymbol(channel: Transaction["channel"]) {
  const cryptoChannels = ["Crypto Pay", "Crypto"];
  const airtimeChannels = ["Airtime"];
  const giftcardChannels = ["Giftcard Sell", "Giftcard"];
  const fiatChannels = ["Fiat", "Bank", "Card", "Wallet"];

  if (cryptoChannels.includes(channel)) return "BTC";
  if (airtimeChannels.includes(channel)) return "USDT";
  if (airtimeChannels.includes(channel)) return "USDT";
  if (giftcardChannels.includes(channel)) return "NGN";
  if (fiatChannels.includes(channel)) return "NGN";

  return "NGN";
}

function formatDateTime(date: string) {
  const d = new Date(date);

  return {
    date: d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    time: d.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
  };
}

function StatusBadge({ status }: { status: Transaction["status"] }) {
  const styles = {
    success: "bg-[#EFFBF7] text-[#0CAF60]",
    pending: "bg-[#FFF0E6] text-[#FE964A]",
    cancelled: "bg-[#FFF0F0] text-[#FD6A6A]",
  };

  return (
    <span
      className={`px-2 py-1 rounded-sm text-xs font-medium capitalize ${styles[status]}`}
    >
      {status}
    </span>
  );
}

/* ---------------------------------- */
/* Component */
/* ---------------------------------- */

export default function TransactionTable({
  transactions,
}: {
  transactions: Transaction[];
}) {
  return (
    <div className="mt-6 w-full rounded-md border bg-white px-6 pb-2 pt-6">
      {/* Header */}
      <div className="mb-4 flex h-11 items-center justify-between border-b bg-[#FCFCFC] px-3">
        <p className="font-bold text-[#1A1A1A]">Recent Transactions</p>

        <div className="flex cursor-pointer items-center gap-1 text-sm font-semibold text-[#0044EE]">
          <span>View All</span>
          <ChevronRight size={16} />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b text-gray-500">
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
              const { date, time } = formatDateTime(tx.date);

              return (
                <tr key={tx.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{tx.channel}</td>

                  {/* Type */}
                  <td className="px-4 py-3">
                    <div
                      className={`flex items-center gap-2 font-medium ${
                        isDeposit ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {isDeposit ? (
                        <ArrowDown size={16} />
                      ) : (
                        <ArrowUp size={16} />
                      )}
                      {tx.type}
                    </div>
                  </td>

                  {/* Amounts */}
                  <td className="px-4 py-3 text-right font-medium">
                    {tx.amount.toLocaleString()} {symbol}
                  </td>

                  <td className="px-4 py-3 text-right text-gray-500">
                    {tx.fee.toLocaleString()} {symbol}
                  </td>

                  <td className="px-4 py-3 text-right font-semibold">
                    {tx.total.toLocaleString()} {symbol}
                  </td>

                  {/* Reference */}
                  <td className="px-4 py-3 font-mono text-xs">
                    {tx.reference}
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3">
                    <StatusBadge status={tx.status} />
                  </td>

                  {/* Date */}
                  <td className="px-4 py-3">
                    <div className="flex flex-col leading-tight">
                      <span className="text-sm font-semibold text-[#111827]">
                        {date}
                      </span>
                      <span className="text-xs text-gray-400">
                        {time}
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

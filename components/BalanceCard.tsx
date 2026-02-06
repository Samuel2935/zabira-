"use client";

import { useState } from "react";
import {
  Eye,
  EyeOff,
  ArrowUpRight,
  ArrowDownLeft,
  ArrowLeftRight,
} from "lucide-react";
import { CURRENCIES } from "@/app/config/currencies";
import { CurrencyCode } from "@/app/types/currency";
import Image from "next/image";

type BalanceCardProps = {
  balance: number;
  currencyCode: CurrencyCode;
};

export default function BalanceCard({
  balance,
  currencyCode,
}: BalanceCardProps) {
  const [showBalance, setShowBalance] = useState(true);

  //   const currency = CURRENCIES[currencyCode];
  const currency = CURRENCIES[currencyCode as keyof typeof CURRENCIES];

  return (
    <div className="w-full md:w-[40%] min-w-0 h-auto rounded-md p-2">
      <div className="bg-[#EBF0FF] p-4 rounded-xl mb-6">
        <div className="flex items-center mb-4 gap-2">
          <p className="text-[16px] text-gray-500">Total Balance</p>

          <button
            onClick={() => setShowBalance(!showBalance)}
            className="text-[#1A1A1AB2] hover:text-gray-800"
          >
            {showBalance ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        </div>

        <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
          {showBalance
            ? `${balance.toLocaleString(currency.locale)}`
            : "••••••"}
          {
            <span className="bg-[#D6E2FF] border border-[#ADC5FF] text-sm py-1 px-3 text-[#0044EE] rounded-full">
              {" "}
              {currency.code}
            </span>
          }
        </h2>

        <div className="flex justify-center items-center gap-2 py-1  bg-[#D6E2FF] rounded-md">
          {Object.values(CURRENCIES).map((c) => {
            const isActive = c.code === currencyCode;

            return (
              <div
                key={c.code}
                className={`country flex items-center gap-2 text-sm py-1 px-3 rounded-md
          ${isActive ? "bg-white" : "bg-transparent"}
        `}
              >
                <span className="text-sm text-gray-500">{c.code}</span>
                <Image
                  src={c.flagUrl}
                  width={20}
                  height={20}
                  alt="flag"
                  className="rounded-full h-5 w-5"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#FCFCFC] text-[#1A1A1A] px-3 py-2 cursor-pointer text-sm font-Geista border border-[#E1E1E2]">
          <ArrowUpRight size={16} />
          Withdraw
        </button>

        <button className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#FCFCFC] text-[#1A1A1A] px-3 py-2 cursor-pointer text-sm font-Geista border border-[#E1E1E2]">
          <ArrowDownLeft size={16} />
          Deposit
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#FCFCFC] text-[#1A1A1A] px-3 py-2 cursor-pointer text-sm font-Geista border border-[#E1E1E2]">
          <ArrowLeftRight size={16} />
          Swap
        </button>
      </div>
    </div>
  );
}

"use client";

import { ArrowRight } from "lucide-react";

import Image from "next/image";

export default function AssetCard() {
  return (
    <div className="w-full max-w-full rounded-md bg-white p-2">
      <div className=" p-4 rounded-xl mb-6">
        <div className="flex items-center justify-between mb-4 gap-2">
          <p className="text-[16px] text-gray-500 flex items-center gap-2">
            <Image
              src="/lighting.svg"
              alt="Trading Icon"
              width={20}
              height={20}
            />
            Top traded assets this week
          </p>

          <button className=" flex gap-2 text-white text-sm bg-black px-3 py-1 rounded-full hover:bg-gray-800">
            Trade Now
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="flex gap-3 justify-end">
        <p className="text-[16px] text-[#1A1A1A] font-semibold flex items-center gap-2">
          <Image src="/reward.svg" alt="Trading Icon" width={20} height={20} />
          Earn Rewards
          <ArrowRight size={16} />
        </p>
      </div>
    </div>
  );
}
